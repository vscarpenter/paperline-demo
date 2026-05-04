# Copilot Instructions

## Project overview

Static HTML demo showcasing the [Paperline](https://github.com/vscarpenter/paperline) design system, built around a fictional SaaS product called **Fieldnotes**. No bundler — all pages use React 18 + Babel Standalone loaded from CDN with `type="text/babel"` script tags.

## Running locally

```bash
npx serve .
# or
python3 -m http.server 8080
```

No build step. No tests. No lint. Serve and open in a browser.

## Browser testing with Playwright MCP

The Playwright MCP server is configured at `~/.copilot/mcp-config.json`. With a local server running, you can ask Copilot to navigate pages, check for console errors, and verify rendering:

```
Start a server on port 8080, then use Playwright to open index.html and check for JS errors
```

```
Use Playwright to verify the dark mode toggle works on dashboard.html
```

## Architecture

Each page is a self-contained HTML file that:
1. Loads Google Fonts, then `node_modules/paperline/dist/paperline.css`
2. Loads React + ReactDOM + Babel Standalone from CDN
3. Loads `node_modules/paperline/dist/paperline-icons.global.jsx` — exposes `window.I`
4. Loads `node_modules/paperline/dist/paperline-components.global.jsx` — exposes all `PL*` components globally
5. Contains a single `<script type="text/babel">` block with the full page as a React app

All pages share the same sidebar nav pattern and link to each other.

## Paperline API — critical gotchas

These have caused bugs; use the exact APIs below.

### Icons (`I.*`)
Only these icon names exist — use no others:
`Alert` `Archive` `Book` `Briefcase` `Calendar` `Check` `ChevDown` `ChevLeft` `ChevRight` `ChevUp` `Clock` `Download` `Edit` `Filter` `Flag` `GripDots` `Help` `Home` `Inbox` `Info` `Layers` `Logo` `Megaphone` `Moon` `More` `Move` `Plus` `Rocket` `Search` `Settings` `Share` `Shield` `Shrink` `Sparkles` `Sprout` `Sun` `Tag` `Trash` `Upload` `X`

❌ `I.Close` → ✅ `I.X`  
❌ `I.ChevronRight` → ✅ `I.ChevRight`  
❌ `I.Play` — does not exist

### `PLAvatarGroup`
Takes `people` (array of `{name, color, src?}`) and `max` — **not** a `names` array or `size` prop:
```jsx
<PLAvatarGroup people={[{ name: "MT", color: "var(--pl-cat-plum)" }]} max={5} />
```

### `PLTabs`
Takes `items` (array of `{value, label}`) — **not** a `tabs` array of strings:
```jsx
<PLTabs
  items={[{ value: "7d", label: "7d" }, { value: "30d", label: "30d" }]}
  value={period}
  onChange={setPeriod}
/>
```

### React list keys
Day-of-week labels like `["M","T","W","T","F","S","S"]` have duplicates — always use index as key:
```jsx
{labels.map((l, i) => <span key={i}>{l}</span>)}
```

## Design tokens (Paperline CSS variables)

Key tokens used throughout:
- **Surfaces**: `--pl-paper-0`, `--pl-paper-1`, `--pl-paper-2`, `--pl-paper-card`
- **Ink**: `--pl-ink-1` (dark) → `--pl-ink-5` (lightest)
- **Accent**: `--pl-accent-50` through `--pl-accent-700`, `--pl-accent-ink`
- **Status**: `--pl-ok-*`, `--pl-warn-*`, `--pl-danger-*`, `--pl-info-*`
- **Category colors**: `--pl-cat-plum`, `--pl-cat-blue`, `--pl-cat-rose`, `--pl-cat-moss`
- **Type**: `--pl-font-sans`, `--pl-font-serif`, `--pl-font-mono`
- **Misc**: `--pl-hairline`, `--pl-hairline-strong`, `--pl-shadow-xs`, `--pl-shadow-sm`, `--pl-shadow-md`

Apply `pl-root` to `<body>` and `pl-dark` or `data-theme="dark"` to any element for dark mode.

## Shared page structure

All app pages (dashboard, analytics, team) follow this layout:
- `.sidebar` (224px, sticky, `pl-paper-card`) — brand, nav groups, user footer
- `.main` — `.topbar` (56px sticky) + `.content` (28px padding, flex column, 24px gap)
- Dark mode toggled with `document.body.classList.toggle("pl-dark", theme === "dark")`
