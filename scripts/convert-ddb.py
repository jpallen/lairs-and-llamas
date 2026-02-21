#!/usr/bin/env python3
"""
Convert D&D Beyond sourcebook HTML pages to markdown.

Usage:
    python scripts/convert-ddb.py <base-url> <output-dir> [slug:filename ...]

Examples:
    # Fetch all chapters linked from the overview page:
    python scripts/convert-ddb.py https://www.dndbeyond.com/sources/dnd/doip templates/campaigns/MyAdventure/Campaign

    # Fetch specific chapters:
    python scripts/convert-ddb.py https://www.dndbeyond.com/sources/dnd/doip out/ running-the-adventure:index.md gnomengarde:Gnomengarde.md

If no slug:filename pairs are given, the script fetches the overview page,
discovers all chapter links, and downloads them all. The first chapter
becomes index.md.
"""

import os
import re
import subprocess
import sys
import urllib.request
from pathlib import Path

from bs4 import BeautifulSoup
from markdownify import markdownify as md

SCRIPT_DIR = Path(__file__).parent
FETCH_SCRIPT = SCRIPT_DIR / "fetch-ddb.sh"


def fetch_page(url: str, cache_key: str) -> str:
    """Fetch an HTML page using the fetch script, with /tmp caching."""
    outfile = f"/tmp/ddb-{cache_key}.html"

    if os.path.exists(outfile) and os.path.getsize(outfile) > 1000:
        print(f"  Using cached HTML for {cache_key}")
    else:
        print(f"  Fetching {url}")
        result = subprocess.run(
            [str(FETCH_SCRIPT), url, outfile],
            capture_output=True, text=True, timeout=30
        )
        if result.returncode != 0:
            print(f"  ERROR fetching {cache_key}: {result.stderr}")
            return ""

    with open(outfile, "r", encoding="utf-8", errors="replace") as f:
        return f.read()


def download_image(url: str, dest: Path):
    """Download an image if it doesn't already exist."""
    if dest.exists():
        return
    print(f"  Downloading image: {dest.name}")
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req) as response:
            dest.write_bytes(response.read())
    except Exception as e:
        print(f"  ERROR downloading {url}: {e}")


def rewrite_images(soup: BeautifulSoup) -> list[tuple[str, str]]:
    """Rewrite image srcs to local paths and return list of (url, filename) to download."""
    images = []
    for img in soup.find_all("img"):
        src = img.get("src", "")
        if "media.dndbeyond.com" in src:
            filename = src.split("/")[-1]
            images.append((src, filename))
            img["src"] = f"images/{filename}"
    # Also grab full-res versions from lightbox links
    for a in soup.find_all("a", class_="ddb-lightbox-outer"):
        href = a.get("href", "")
        if "media.dndbeyond.com" in href:
            filename = href.split("/")[-1]
            images.append((href, filename))
    return images


def clean_soup(soup: BeautifulSoup):
    """Remove nav elements, hidden divs, and other non-content elements."""
    for el in soup.find_all(style=lambda s: s and "display:none" in s):
        el.decompose()
    for a in soup.find_all("a", class_="tooltip-hover"):
        a.replace_with(a.get_text())
    for a in soup.find_all("a", attrs={"aria-hidden": "true"}):
        a.decompose()


def convert_html(html: str) -> tuple[str, list[tuple[str, str]]]:
    """Extract article content, convert to markdown, return (markdown, images)."""
    soup = BeautifulSoup(html, "html.parser")

    content_div = soup.find("div", class_="p-article-content")
    if not content_div:
        print("  WARNING: Could not find article content")
        return "", []

    clean_soup(content_div)
    images = rewrite_images(content_div)

    markdown = md(
        str(content_div),
        heading_style="ATX",
        bullets="-",
        strip=["script", "style", "nav"],
    )

    markdown = re.sub(r"\n{4,}", "\n\n\n", markdown)
    markdown = markdown.strip() + "\n"

    return markdown, images


def discover_chapters(html: str, base_url: str) -> list[tuple[str, str]]:
    """Discover chapter slugs from an overview page."""
    soup = BeautifulSoup(html, "html.parser")

    # Extract the sourcebook path prefix (e.g. /sources/dnd/doip or /sources/doip)
    # Links may use either the old or new URL scheme
    from urllib.parse import urlparse
    parsed = urlparse(base_url)
    path = parsed.path.rstrip("/")  # e.g. /sources/dnd/doip

    # Find all links that match either URL pattern for this sourcebook
    slug_part = path.split("/")[-1]  # e.g. "doip"
    pattern = re.compile(rf'/sources/(?:dnd/)?{re.escape(slug_part)}/([a-z0-9-]+)')

    slugs = set()
    for a in soup.find_all("a", href=True):
        href = a["href"]
        m = pattern.search(href)
        if m:
            slugs.add(m.group(1))

    # Sort alphabetically, but put common "intro" slugs first
    ordered = sorted(slugs)
    intro_slugs = ["running-the-adventure", "introduction", "credits"]
    front = [s for s in intro_slugs if s in ordered]
    rest = [s for s in ordered if s not in front]

    chapters = []
    for i, slug in enumerate(front + rest):
        if i == 0:
            filename = "index.md"
        else:
            # Convert slug to title case filename
            name = slug.replace("-", " ").title()
            filename = f"{name}.md"
        chapters.append((slug, filename))

    return chapters


def process_chapter(slug: str, filename: str, base_url: str, output_dir: Path, images_dir: Path):
    """Fetch, convert, and save a single chapter."""
    print(f"\nProcessing: {slug} -> {filename}")

    html = fetch_page(f"{base_url}/{slug}", slug)
    if not html:
        return

    markdown, images = convert_html(html)
    if not markdown:
        return

    out_path = output_dir / filename
    out_path.write_text(markdown, encoding="utf-8")
    print(f"  Saved {filename} ({len(markdown)} chars)")

    for url, img_filename in images:
        download_image(url, images_dir / img_filename)


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)

    base_url = sys.argv[1].rstrip("/")
    output_dir = Path(sys.argv[2])
    images_dir = output_dir / "images"

    output_dir.mkdir(parents=True, exist_ok=True)
    images_dir.mkdir(parents=True, exist_ok=True)

    # Explicit chapter list or auto-discover
    if len(sys.argv) > 3:
        chapters = []
        for arg in sys.argv[3:]:
            if ":" in arg:
                slug, filename = arg.split(":", 1)
            else:
                slug = arg
                filename = slug.replace("-", " ").title() + ".md"
            chapters.append((slug, filename))
    else:
        print(f"Discovering chapters from {base_url} ...")
        overview_html = fetch_page(base_url, "overview-" + base_url.split("/")[-1])
        if not overview_html:
            print("ERROR: Could not fetch overview page")
            sys.exit(1)
        chapters = discover_chapters(overview_html, base_url)
        print(f"Found {len(chapters)} chapters")

    for slug, filename in chapters:
        process_chapter(slug, filename, base_url, output_dir, images_dir)

    print(f"\nDone! Processed {len(chapters)} chapters.")
    print(f"Output directory: {output_dir}")


if __name__ == "__main__":
    main()
