# JavaScript / React Web Development

Merged repository of archived web-development coursework: vanilla HTML/CSS/JS, a
JavaScript → TypeScript → React progression, and a small full-stack storefront
built at the end of the course. Nothing here is maintained as a product; it is
kept as a record of the coursework. Each sub-project keeps its own git history
intact — see the merge commits in the root log for where each history was grafted in.

## Sub-projects

### [`small-fullstack-store-app/`](small-fullstack-store-app)
> ⏹️ **Archived Coursework** — React + TypeScript storefront with a small Node/SQLite backend

The final piece of the course: a React + TypeScript + Tailwind storefront with its
own small Express backend (`gpt-backend/`) handling registration and login against
SQLite. A cohesive standalone app rather than discrete lab exercises, but coursework
all the same.

> The `gpt-backend/` folder is named that way for historical reasons — it was
> scaffolded with ChatGPT's help. It integrates no AI service.

**Tech stack:** TypeScript, React, Tailwind CSS, Node.js (Express-style backend), SQLite

### [`advanced-frontend-labs/`](advanced-frontend-labs)
> ⏹️ **Archived Coursework** — JS → TypeScript → React progression

A progression of to-do-list implementations across the JS/TS/React stack, organized as one folder per lab under `labs/` — see [`advanced-frontend-labs/README.md`](advanced-frontend-labs/README.md) for the full lab-by-lab index.

**Tech stack:** JavaScript, TypeScript, React

### [`elementary-frontend-labs/`](elementary-frontend-labs)
> ⏹️ **Archived Coursework** — plain HTML/CSS/JS

Introductory front-end coursework: pure HTML5, CSS3, and vanilla JavaScript — no build tools, no frameworks. 10 lessons, 22 practices, a final to-do list app, and full screenshot documentation of every page. See [`elementary-frontend-labs/README.md`](elementary-frontend-labs/README.md) for the full lesson-by-lesson index.

**Tech stack:** HTML5, CSS3, JavaScript (vanilla)

## Dependency updates

Dependabot runs monthly against every sub-project and never targets `main`. Its
pull requests go to `deps`, a bot-only branch, and merge there automatically once
CI passes on that exact commit. What collects on `deps` reaches `main` through one
promotion pull request merged by hand, so `main` gains one deliberate commit
instead of a stream of bot commits. `deps` is then re-cut from `main` rather than
merged into, so it never drifts or conflicts.

Configuration is in [`.github/dependabot.yml`](.github/dependabot.yml) and the
workflows under [`.github/workflows/`](.github/workflows); the design is written
up in [`docs/dependency-updates.md`](docs/dependency-updates.md). Dependabot
*security* updates are switched off, because they always target `main`; advisories
show in the Security tab and in the weekly `security-audit.yml` run summary.

One dependency is held back on purpose: `react-icons` is pinned to `5.2.1` in
`advanced-frontend-labs/labs/11-react-typescript-rewrite`. From 5.3 it types its
components as returning `ReactNode`, which `@types/react` 18 rejects as a JSX
element (TS2786). TypeScript 5 accepts it, but `react-scripts@5.0.1` pins
typescript to `^4` as a peer dependency, so the icon package is what gives.
