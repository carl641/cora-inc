# Cora Environmental

Marketing website for **Cora Environmental**, a locally owned septic services company in Huntsville, Alabama.

## Overview

A static, responsive, multi-page website built with plain HTML, CSS, and a small amount of JavaScript — no build step required. It showcases the company's core septic services and makes it easy for customers to request a quote or reach the emergency line.

## Pages

- `index.html` — Home, with hero, service highlights, value props, service area, and CTAs
- `services.html` — Full breakdown of all septic services with anchor links
- `about.html` — Company story, values, credentials
- `contact.html` — Contact info, quote request form, and FAQ

## Services covered

1. Septic Tank Pumping (Maintenance)
2. Septic System Inspections
3. Repairs & Troubleshooting
4. Drain Field (Leach Field) Work
5. New Septic System Installation
6. Septic Tank Locating & Mapping
7. Emergency Services (24/7)
8. Additional: grease trap pumping, lift station repair, video inspections, soil testing, etc.

## Structure

```
.
├── index.html
├── services.html
├── about.html
├── contact.html
├── css/
│   └── styles.css
└── js/
    └── main.js
```

## Running locally

It's a static site — open `index.html` directly in a browser, or serve the directory with any static server:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Notes

- The phone number, email, and testimonials are placeholders and should be replaced with real values before launch.
- The contact form is currently client-side only. To accept real submissions, wire the form to a backend endpoint or form service (Formspree, Netlify Forms, etc.).
