# Portfolio Setup Guide
## Nakul Sreekanth — Data Science Portfolio

---

## 1. File Structure

After extracting this ZIP, your portfolio directory should look exactly like this:

```
portfolio/                          ← your root folder (rename as you like)
│
├── index.html                      ← MAIN LANDING PAGE
├── assets/
│   ├── css/index.css
│   └── js/index.js
│
├── power-outage-forecasting/
│   ├── power-outage-forecasting.html
│   └── assets/
│       ├── css/power-outage-forecasting.css
│       ├── js/power-outage-forecasting.js
│       └── images/power-outage-forecasting-thumbnail.svg
│
├── ev-charging-intelligence/
│   ├── ev-charging-intelligence.html
│   └── assets/ ...
│
├── scm-dashboard/
│   ├── scm-dashboard.html
│   └── assets/ ...
│
├── spacex-landing/
│   ├── spacex-landing.html
│   └── assets/ ...
│
├── bellabeat-case-study/
│   ├── bellabeat-case-study.html
│   └── assets/ ...
│
└── cs229-independent-study/
    ├── cs229-independent-study.html
    └── assets/ ...
```

**Critical:** All project folders must live at the SAME LEVEL as index.html.
The index page references thumbnails like `power-outage-forecasting/assets/images/...`
These paths only work if the structure above is preserved exactly.

---

## 2. Placeholders You MUST Fill In

Search each file for the text `PLACEHOLDER` to find every item requiring your input.
Here is the complete list:

### index.html (3 placeholders)

| Location | Placeholder | What to replace with |
|---|---|---|
| Line ~35 | `https://linkedin.com/in/YOUR-LINKEDIN-HERE` | Your LinkedIn profile URL (appears twice — nav + footer) |
| Line ~155 | Hero tag `<!-- PLACEHOLDER: Update if graduated -->` | Update the tag if you've graduated: change "IE Student" to your actual status (e.g., "IE Graduate 2025") |
| Line ~195 | `<!-- <a href="YOUR-CV-LINK.pdf"...` | Uncomment and add your CV/resume link if you want a download button |
| Line ~215 | `<!-- PLACEHOLDER: Add your email -->` | Add your email as an `<a href="mailto:...">` link in the about-links and footer |

### power-outage-forecasting.html (1 placeholder)

The GitHub URL in this file was set to `https://github.com/nakulsreekath` (without `/Portofolio`).
You need to update it manually:

Open `power-outage-forecasting/power-outage-forecasting.html` and find/replace:
- Find: `https://github.com/nakulsreekath`
- Replace with: `https://github.com/nakulsree/Portofolio`

This appears in the "View on GitHub" buttons (2 places in that file).

---

## 3. Things to Verify Before Publishing

### Verify the Bellabeat RPubs link still works
Open `bellabeat-case-study/bellabeat-case-study.html` and find the RPubs URL:
```
https://rstudio-pubs-static.s3.amazonaws.com/1233761_e98bc2082db34143862f2f001a9efc58.html
```
Open this link in a browser. If it's broken, either remove the "Read on RPubs" button
or update it to wherever your published analysis currently lives.

### Verify the Bellabeat optimization video link
In `ev-charging-intelligence/ev-charging-intelligence.html`, there is no video link,
but the original SAS paper mentioned a YouTube video at:
`https://youtu.be/Zoz0iEQhMGk`
If you want to add this, you can add a link in the optimization section.

### Update your photo (optional)
The portfolio doesn't include a headshot. If you want one on the index page,
add it to `assets/images/nakul.jpg` and update the About section in index.html.

---

## 4. Hosting Options

### Option A: GitHub Pages (Free, Recommended)

1. Create a GitHub repository named `YOUR-USERNAME.github.io`
   (e.g., `nakulsree.github.io`) — or use your existing `Portofolio` repo.

2. Push all portfolio files to the `main` branch.

3. Go to repo Settings → Pages → Source → Deploy from branch → main → / (root).

4. Your portfolio will be live at `https://YOUR-USERNAME.github.io` within a few minutes.

**If using your existing `Portofolio` repo:**
The URL will be `https://nakulsree.github.io/Portofolio/`
Make sure index.html is at the root of that repo.

### Option B: Netlify (Free, drag-and-drop)

1. Go to https://netlify.com and create a free account.
2. Drag your entire `portfolio/` folder onto the Netlify dashboard.
3. Done — you get a live URL like `https://random-name-123.netlify.app`
4. You can set a custom subdomain in Netlify settings (e.g., `nakulsreekanth.netlify.app`).

### Option C: Vercel (Free)

Same as Netlify. Go to https://vercel.com, connect your GitHub repo, deploy.

### Option D: Self-hosted / your own domain

Any static web host works. This portfolio uses zero backend — just HTML, CSS, JS.
Upload all files to your hosting provider's `public_html` or `www` folder.

---

## 5. Custom Domain (Optional)

If you want `nakulsreekanth.com` or similar:
1. Buy a domain from Namecheap, Google Domains, Cloudflare, etc. (~$10-15/year)
2. On Netlify/GitHub Pages, add your custom domain in the project settings
3. Update your domain's DNS records as instructed by the hosting platform

---

## 6. After You Go Live

Update the following places with your live URL:
- Your GitHub profile README
- Your LinkedIn profile (Website field)
- Your resume/CV
- Email signature

---

## 7. Updating the Portfolio

Each project page is completely self-contained. To update a project:
1. Edit only the files inside that project's folder
2. Re-upload just that folder
3. index.html does not need to be changed for content edits

To add a new project:
1. Follow the same folder structure as existing projects
2. Add a new `<a class="project-card ...">` block in `index.html`
3. Use the same card pattern as the existing five

---

## 8. One-Time Fixes Checklist

- [ ] Replace `YOUR-LINKEDIN-HERE` in index.html (2 places)
- [ ] Fix GitHub URL in power-outage-forecasting.html (2 places)
- [ ] Verify Bellabeat RPubs link works
- [ ] Add email to index.html About section (optional)
- [ ] Decide whether to add CV download link
- [ ] Update hero tag if you've graduated
- [ ] Test on mobile (all pages are responsive)
- [ ] Test all "View on GitHub" buttons
- [ ] Check all 6 project page → back to portfolio navigation

---

## 9. Fonts

All fonts are loaded from Google Fonts (no installation required):
- Index: Manrope + JetBrains Mono
- Power Outage: Syne + Space Mono
- EV Charging: Unbounded + Fira Code
- SCM Dashboard: Lexend + JetBrains Mono
- SpaceX: Orbitron + IBM Plex Mono
- Bellabeat: DM Serif Display + DM Mono
- CS229: Playfair Display + Source Code Pro

All pages require an internet connection for fonts to load correctly.
For offline viewing, the fallback fonts (system-ui, Georgia, monospace) still work.

---

## 10. Browser Support

Tested layout for: Chrome, Firefox, Safari, Edge (all modern versions).
Minimum: any browser released after 2020.

---

*Portfolio generated for Nakul Sreekanth · April 2026*
