# ClaimEase – concept demo

Mobile web app for a product design case study by Bijnesh Singh: file a health insurance reimbursement claim with an AI document check and plain-language updates. All data is sample data; nothing is sent anywhere.

- Site files live in `public/` (plain HTML, CSS and JavaScript, no build step).
- `wrangler.jsonc` tells Cloudflare to serve `public/` as a static site.
- Every push to `main` redeploys automatically through Cloudflare.

Try it: log in with any 10 digits and any 6-digit code (000000 shows the wrong-code state), start a claim, tap "Use sample", check documents, fix the 2 items and submit. Updates arrive a few seconds later. Reset the demo from the Help tab.
