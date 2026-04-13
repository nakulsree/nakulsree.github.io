# SpaceX Falcon 9 Landing Prediction — Portfolio Project Page

## Overview

Standalone portfolio case-study page for the **"SpaceX Falcon 9 First Stage Landing Prediction"**
project — an end-to-end data science pipeline from raw API data collection through machine learning
classification, based on the IBM Data Science Professional Certificate capstone, modified and
extended by Nakul Sreekanth.

---

## File Structure

```
spacex-landing/
├── spacex-landing.html                # Main project page (standalone)
├── spacex-landing.json                # Project metadata (portfolio index)
├── README-spacex-landing.md           # This file
└── assets/
    ├── css/
    │   └── spacex-landing.css         # Deep space navy/violet stylesheet + Orbitron
    ├── js/
    │   └── spacex-landing.js          # Star field, scroll nav, reveals, counters
    └── images/
        └── spacex-landing-thumbnail.svg  # 7-stage pipeline + ML comparison thumbnail
```

---

## Design System

| Property      | Value                                       |
|---------------|---------------------------------------------|
| Theme         | Deep space dark (`#04050f` base)            |
| Primary accent| Electric violet `#6349ff`                   |
| Secondary     | Indigo `#818cf8`, Purple `#c77dff`          |
| Display font  | Orbitron (900 weight) — space/tech feel     |
| Body/code     | IBM Plex Mono                               |
| Effects       | Procedural star field (JS), nebula blobs    |
| Hero animation| Hovering Falcon 9 SVG rocket                |
| Framework     | None — pure HTML + CSS + JS                 |

Visually and tonally distinct from all 3 previous projects.

---

## Sections

1. **Hero** — Title, key metrics, inline SVG Falcon 9 rocket, business context
2. **Executive Summary** — Cost context ($62M vs $165M+), pipeline overview, binary target
3. **7-Stage Pipeline** — One card per notebook/script with tech stack and key findings
4. **EDA Findings** — 6 cards: experience effect, orbit type, site specialization, coastal proximity, SQL milestone, class imbalance
5. **Model Comparison** — Setup panel, results table with real CV/test numbers, 4 model detail cards with parameter interpretation, convergence insight
6. **What I Learned** — 6 lessons: API resolution patterns, HTML table scraping, SQL in Jupyter, geospatial context, small test set limitations, regularization as a signal
7. **Skills** — 4 groups: Data Collection, EDA/SQL, Visualization, Machine Learning
8. **CTA** — GitHub link

---

## Attribution Note

Notebooks include a derivative work notice:
> "Based on IBM Data Science Professional Certificate materials (©IBM Corporation 2021-2022).
> Modified, analyzed, and adapted by Nakul Sreekanth."

The JSON metadata includes this attribution. The HTML page does not display it prominently
(it's a portfolio showcase of the work done, not a course submission), but the GitHub repo
should retain the original notebook attribution.

---

## Index Card Integration

```html
<a href="spacex-landing.html" class="project-card">
  <img
    src="spacex-landing/assets/images/spacex-landing-thumbnail.svg"
    alt="SpaceX Falcon 9 Landing Prediction — 7-stage ML pipeline, 83.3% accuracy"
    loading="lazy"
  />
  <div class="card-body">
    <div class="card-tags">
      <span>Machine Learning</span>
      <span>End-to-End Pipeline</span>
      <span>Geospatial</span>
    </div>
    <h3>SpaceX Falcon 9 Landing Prediction</h3>
    <p>
      7-stage pipeline from REST API to ML classification. 4 models via 10-fold
      GridSearchCV, Folium geospatial maps, and Plotly Dash dashboard.
    </p>
    <div class="card-metric">83.3% test accuracy · 4 classifiers · 7 notebooks</div>
  </div>
</a>
```

---

*Generated for Nakul Sreekanth's Data Science Portfolio — 2024/2026*
