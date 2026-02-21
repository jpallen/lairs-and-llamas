---
name: import-ddb-adventure
description: Import a D&D Beyond sourcebook/adventure as a campaign template with markdown and images
argument-hint: <adventure-name> <ddb-source-url>
disable-model-invocation: true
allowed-tools: Bash, Read, Write, Glob
---

# Import D&D Beyond Adventure

Import a D&D Beyond sourcebook into a campaign template folder with markdown chapters and downloaded images.

## Arguments

- `$0` — Adventure name (e.g. "Dragon of Icespire Peak")
- `$1` — D&D Beyond source URL (e.g. `https://www.dndbeyond.com/sources/dnd/doip`)

## Prerequisites

### Cookie Setup

The fetch script reads session cookies from `~/.ddb-cookies`. The user must have a D&D Beyond account with access to the sourcebook.

**To get cookies:**

1. Open [dndbeyond.com](https://www.dndbeyond.com) in Chrome and log in
2. Navigate to the sourcebook you want to import
3. Open DevTools (F12) → Network tab
4. Reload the page
5. Click the main page request (the HTML document, not JS/CSS)
6. Right-click → Copy → Copy as cURL
7. From the copied command, find the `-b '...'` or `--cookie '...'` parameter
8. Copy just the cookie string (without the `-b` flag or quotes) into `~/.ddb-cookies`

If `~/.ddb-cookies` doesn't exist, ask the user to follow these steps before proceeding.

### Python Dependencies

The conversion script requires `beautifulsoup4` and `markdownify`. Install them in the project venv:

```bash
pip install beautifulsoup4 markdownify
```

## Steps

1. Check that `~/.ddb-cookies` exists. If not, show the user the cookie setup instructions above and stop.

2. Ensure Python dependencies are installed:
   ```bash
   pip install beautifulsoup4 markdownify 2>&1 | tail -1
   ```

3. Run the conversion script:
   ```bash
   python scripts/convert-ddb.py "$1" "templates/campaigns/$0/Campaign"
   ```
   This will:
   - Fetch the overview page and discover all chapters
   - Download each chapter's HTML and convert to markdown
   - Download all images and maps to `Campaign/images/`
   - Save the first chapter as `index.md`, rest as `Title Case.md`

4. Copy the shared character sheet templates into the campaign:
   ```bash
   cp -r templates/campaigns/Orc\ Kidnapping/CharacterSheets "templates/campaigns/$0/CharacterSheets"
   ```
   Or if the user wants blank character sheets only:
   ```bash
   mkdir -p "templates/campaigns/$0/CharacterSheets"
   cp templates/CharacterSheets/template.md "templates/campaigns/$0/CharacterSheets/"
   ```

5. Add the campaign directory to `.gitignore` if the user wants (the content is copyrighted):
   ```
   templates/campaigns/$0
   ```

6. Verify the output:
   - Count the chapter files
   - Count the downloaded images
   - Show a sample of the index.md to confirm content looks correct

7. Report results to the user: number of chapters, number of images, output directory.
