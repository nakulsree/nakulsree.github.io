# Power Outage Forecasting — Portfolio Project Page

## Overview

This directory contains the standalone portfolio case-study page for the
**"Routing-Based Ensemble Framework for County-Level Power Outage Forecasting
Under Extreme Weather"** project, submitted to the IISE 2026 Analytics Competition.

The page is designed for Nakul Sreekanth's Data Science portfolio website and
targets hiring managers and senior data scientists evaluating technical depth.

---

## File Structure

```
power-outage-forecasting/
├── power-outage-forecasting.html          # Main project page (standalone)
├── power-outage-forecasting.json          # Project metadata (portfolio index)
├── README-power-outage-forecasting.md     # This file
└── assets/
    ├── css/
    │   └── power-outage-forecasting.css   # Dark mode data-science stylesheet
    ├── js/
    │   └── power-outage-forecasting.js    # Scroll animations, nav, counters
    └── images/
        └── power-outage-forecasting-thumbnail.svg  # Project thumbnail / OG image
```

---

## Design System

| Property      | Value                                  |
|---------------|----------------------------------------|
| Theme         | Dark mode (`#090c12` base)             |
| Accent color  | Cyan `#00d4ff`                         |
| Secondary     | Amber `#ffb340`, Green `#00e5a0`       |
| Display font  | Syne (800 weight)                      |
| Body/mono     | Space Mono                             |
| Grid overlay  | 48px CSS grid, 3% opacity              |
| Framework     | None — pure HTML + CSS + JS            |

---

## Sections Included

1. **Hero** — Title, key metrics (animated counters), architecture preview, CTA
2. **Executive Summary** — 3-paragraph recruiter-facing summary with context cards
3. **Problem Statement** — Distribution statistics panel + structural failure modes
4. **Business Impact** — Four cards: crew positioning, critical infrastructure, uncertainty, weather readiness
5. **Data Summary** — Sources, preprocessing, feature engineering, storm event callout
6. **Approach / Methodology** — Four stage cards with mathematical formulations
7. **Results** — Validation metrics table, feature importance bar charts, key insights
8. **What I Learned** — Eight lessons: mixture-of-experts, loss design, leakage, EWC, ablation, etc.
9. **Skills Demonstrated** — Tagged skills cloud (core vs. secondary)
10. **CTA** — GitHub link

---

## How This Fits Into the Portfolio

This page follows the standard portfolio project template. To integrate it into
a portfolio index page:

1. Add this project's metadata from `power-outage-forecasting.json` to your
   portfolio index JSON array.
2. Link to `power-outage-forecasting.html` from your project cards/grid.
3. Use `assets/images/power-outage-forecasting-thumbnail.svg` as the card
   thumbnail on the index page.
4. The CSS/JS are scoped to this project — no conflicts with other pages.

### Recommended Index Card Entry

```html
<a href="power-outage-forecasting.html" class="project-card">
  <img
    src="power-outage-forecasting/assets/images/power-outage-forecasting-thumbnail.svg"
    alt="Power Outage Forecasting — four-stage routing ensemble architecture"
    loading="lazy"
  />
  <div class="card-body">
    <div class="card-tags">
      <span>Forecasting</span>
      <span>Ensemble ML</span>
      <span>Extreme Events</span>
    </div>
    <h3>Power Outage Forecasting</h3>
    <p>
      Routing-based ensemble for 48-hour county-level outage prediction.
      89% Winkler score improvement over baseline.
    </p>
    <div class="card-metric">F1: 0.696 · RMSE −43% · 336 models</div>
  </div>
</a>
```

---

## Notes

- All metrics and findings are sourced directly from the IISE 2026 paper.
  Nothing has been fabricated or embellished.
- GitHub URL placeholder (`https://github.com/nakulsreekanth`) should be
  updated to the actual repository URL before publishing.
- No CDN dependencies — works fully offline.
- Fully responsive down to 375px viewport width.
- Accessible: semantic HTML, ARIA labels, alt text on all images.

---

*Generated for Nakul Sreekanth's Data Science Portfolio — March 2026*
