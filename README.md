# Cora Environmental

Marketing website for **Cora Environmental**, a locally owned septic services company in Huntsville, Alabama.

## Overview

A static, responsive, multi-page website built with plain HTML, CSS, and a small amount of JavaScript — no build step required. It showcases the company's core septic services and makes it easy for customers to request a quote or reach the emergency line.

## Pages

- `/` (`index.html`) — Home, with hero, service highlights, value props, service area, and CTAs
- `/services` (`services/index.html`) — Full breakdown of all septic services with anchor links
- `/about` (`about/index.html`) — Company story, values, credentials
- `/contact` (`contact/index.html`) — Contact info, quote request form, and FAQ
- `/blog` (`blog/index.html`) — Blog index listing published articles
- `/huntsville-madison-county`, `/decatur-morgan-county`, `/athens-limestone-county` — County service-area pages, linked from the **Areas** dropdown in the primary nav
- `/blog/<post-slug>/` — Individual blog posts (e.g. `blog/septic-system-installation-huntsville-al/`)

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
├── services/
│   └── index.html
├── about/
│   └── index.html
├── contact/
│   └── index.html
├── blog/
│   ├── index.html
│   └── septic-system-installation-huntsville-al/
│       └── index.html
├── huntsville-madison-county/
│   └── index.html
├── decatur-morgan-county/
│   └── index.html
├── athens-limestone-county/
│   └── index.html
├── css/
│   └── styles.css
└── js/
    └── main.js
```

Each page lives in its own directory so URLs resolve without a `.html` extension (e.g. `/about`, `/services`, `/contact`) on any static host.

## Running locally

It's a static site — serve the directory with any static server so the clean URLs resolve correctly:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Notes

- The phone number, email, and testimonials are placeholders and should be replaced with real values before launch.
- Service-area pages target county residents on private septic systems (the bulk of the copy) while still covering the commercial work done inside each city. To add another county, copy an existing county directory, update the copy, meta tags, canonical URL, and JSON-LD, then add it to the **Areas** submenu and the "Areas We Serve" footer column on every page, plus `sitemap.xml`.
- To add a blog post: copy an existing post directory under `blog/`, rename it to the new slug, update the `<title>`, meta description, canonical URL, JSON-LD, and body copy — then add a matching `.post-card` to `blog/index.html` and a `<url>` entry to `sitemap.xml`.
- The contact form is currently client-side only. To accept real submissions, wire the form to a backend endpoint or form service (Formspree, Netlify Forms, etc.).
