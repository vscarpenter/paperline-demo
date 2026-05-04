# Fieldnotes — Paperline Demo

**Live demo: [https://vscarpenter.github.io/paperline-demo/](https://vscarpenter.github.io/paperline-demo/)**

A set of example HTML pages showcasing the [Paperline](https://github.com/vscarpenter/paperline) design system. The pages are built around a fictional SaaS product called **Fieldnotes** — a team documentation and knowledge management tool.

## Purpose

This project demonstrates how to use Paperline's components, design tokens, and icons in a realistic, multi-page product UI using the browser-based (no-bundler) setup.

## Pages

| Page | Live | Description |
|---|---|---|
| `index.html` | [View](https://vscarpenter.github.io/paperline-demo/index.html) | Marketing landing page — hero, features, testimonials, pricing |
| `dashboard.html` | [View](https://vscarpenter.github.io/paperline-demo/dashboard.html) | Main app dashboard — stat cards, documents table, activity feed |
| `analytics.html` | [View](https://vscarpenter.github.io/paperline-demo/analytics.html) | Analytics view — charts, space breakdown, top documents, engagement metrics |
| `team.html` | [View](https://vscarpenter.github.io/paperline-demo/team.html) | Team management — member list, role permissions, invite form, remove modal |

## Getting Started

Serve the directory with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## Stack

- **[Paperline](https://github.com/vscarpenter/paperline)** — design system (CSS tokens + React components)
- **React 18** — loaded via CDN (unpkg)
- **Babel Standalone** — in-browser JSX transform

> For production use, pre-compile the JSX with a bundler and remove Babel Standalone. See the [Paperline usage guide](https://github.com/vscarpenter/paperline/blob/main/docs/USAGE.md) for details.
