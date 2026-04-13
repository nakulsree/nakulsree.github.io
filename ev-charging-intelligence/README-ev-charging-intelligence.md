# EV Charging Intelligence — Portfolio Project Page

## Overview

Standalone portfolio case-study page for the **"EV Charging Intelligence"** project,
combining two complementary papers submitted to the **SAS Global Forum Curiosity Cup 2026**
(Forecasting paper selected as **Finalist**):

1. *Forecasting Electricity Price Volatility for EV Charging* — LSTM + ARIMA pipeline
   for 24-hour ahead SP15 real-time electricity price prediction.

2. *Socially Optimal Pricing and Capacity Dynamics in a Competitive EV Charging Corridor*
   — Nash equilibrium pricing model for 51 stations on California's I-210 corridor.

Both projects were developed within **Purdue University's VIP-ORSOL initiative**.

---

## File Structure

```
ev-charging-intelligence/
├── ev-charging-intelligence.html           # Main project page (standalone)
├── ev-charging-intelligence.json           # Project metadata (portfolio index)
├── README-ev-charging-intelligence.md      # This file
└── assets/
    ├── css/
    │   └── ev-charging-intelligence.css    # Orange-electric dark mode stylesheet
    ├── js/
    │   └── ev-charging-intelligence.js     # Scroll animations, KPI counters, bars
    └── images/
        └── ev-charging-intelligence-thumbnail.svg  # Dual-chart project thumbnail
```

---

## Design System

| Property      | Value                                        |
|---------------|----------------------------------------------|
| Theme         | Dark mode (`#080b10` base)                   |
| Primary accent| Electric orange `#ff7c3a`                    |
| Secondary     | Electric blue `#4facfe`, Gold `#ffd060`      |
| Display font  | Unbounded (900 weight)                        |
| Body/code     | Fira Code                                    |
| Background    | Noise overlay + angled grid                  |
| Framework     | None — pure HTML + CSS + JS                  |

Visually distinct from the Power Outage Forecasting project (different fonts,
palette, and layout philosophy).

---

## Sections Included

1. **Hero** — Title, award banner, KPI counters, dual module preview cards
2. **Executive Summary** — 3-paragraph overview with Duck Curve, corridor, and award context cards
3. **Multi-Source Data Integration** — Five data source cards (CAISO, NOAA/MERRA-2, PeMS, OpenChargeMap, DESL)
4. **Forecasting Module** — LSTM pipeline + ARMA benchmark, leakage prevention block, feature engineering
5. **Market Optimization** — Mathematical framework (4 equations), 4 equilibrium findings, utilization visual
6. **Results** — Side-by-side metrics tables (forecasting + optimization) with joint insight
7. **What I Learned** — 6 lessons: leakage discipline, hard ramp hours, classical baselines, game theory framing, capacity vs. pricing, data integration
8. **Skills** — Grouped by category (Modeling / Engineering / Analysis / Tools)
9. **CTA** — GitHub link, award badge

---

## Framing Notes

The page presents these as a **unified data science project**, not as SAS competition submissions.
SAS is mentioned in the methodology context only (PROC OPTMODEL, benchmark modeling)
and the award is highlighted for prestige — not to center the SAS tooling.

The Python LSTM pipeline, leakage prevention architecture, and game-theoretic optimization
formulation are the technical centerpiece of the narrative.

---

## How This Fits Into the Portfolio

```html
<a href="ev-charging-intelligence.html" class="project-card">
  <img
    src="ev-charging-intelligence/assets/images/ev-charging-intelligence-thumbnail.svg"
    alt="EV Charging Intelligence — LSTM forecasting and Nash equilibrium optimization"
    loading="lazy"
  />
  <div class="card-body">
    <div class="card-tags">
      <span>Forecasting</span>
      <span>Optimization</span>
      <span>Game Theory</span>
    </div>
    <h3>EV Charging Intelligence</h3>
    <p>
      24-hour electricity price forecasting + Nash equilibrium market optimization
      for California's I-210 corridor. SAS Curiosity Cup 2026 Finalist.
    </p>
    <div class="card-metric">MAE $10.99 · R² 0.48 · 51 stations</div>
    <div class="card-award">★ SAS Curiosity Cup 2026 Finalist</div>
  </div>
</a>
```

---

## Notes

- GitHub URL set to `https://github.com/nakulsree/Portofolio` — update paper-specific
  links once individual notebooks are pushed.
- No CDN dependencies — fully offline capable.
- Responsive to 375px viewport.
- Accessible: semantic HTML5, ARIA roles/labels, descriptive alt text on all images.

---

*Generated for Nakul Sreekanth's Data Science Portfolio — 2026*
