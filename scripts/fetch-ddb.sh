#!/usr/bin/env bash
# Fetch a D&D Beyond page with session cookies
# Usage: ./scripts/fetch-ddb.sh <url> <output-file>
#
# Reads cookies from ~/.ddb-cookies. To get your cookies:
# 1. Open dndbeyond.com in Chrome and log in
# 2. Open DevTools (F12) > Network tab
# 3. Navigate to any sourcebook page
# 4. Right-click the page request > Copy > Copy as cURL
# 5. Extract the -b '...' cookie string and save it to ~/.ddb-cookies
set -euo pipefail

COOKIE_FILE="$HOME/.ddb-cookies"

if [ ! -f "$COOKIE_FILE" ]; then
  echo "ERROR: Cookie file not found at $COOKIE_FILE" >&2
  echo "See script header for instructions on how to get your cookies." >&2
  exit 1
fi

URL="$1"
OUTPUT="$2"
COOKIES=$(cat "$COOKIE_FILE")

curl -s "$URL" \
  -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8' \
  -H 'accept-language: en-GB,en-US;q=0.9,en;q=0.8' \
  -H 'cache-control: no-cache' \
  -b "$COOKIES" \
  -H 'sec-fetch-dest: document' \
  -H 'sec-fetch-mode: navigate' \
  -H 'sec-fetch-site: same-origin' \
  -H 'upgrade-insecure-requests: 1' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36' \
  -o "$OUTPUT"
