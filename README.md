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

Dependabot runs weekly against every sub-project, one pull request per package, and
none of them target `main`. They are opened against `security-features-main`, a
long-lived branch that exists only to accumulate dependency bumps, and and are merged
into it automatically, but only after CI passes on the pull request. That branch is merged into `main` by hand,
whenever its accumulated state is worth taking — so `main` gains one deliberate
merge instead of a stream of bot commits.

Configuration is in [`.github/dependabot.yml`](.github/dependabot.yml)
(`target-branch`) and [`.github/workflows/dependabot-auto-merge.yml`](.github/workflows/dependabot-auto-merge.yml).

Two consequences worth knowing:

- Setting `target-branch` disables Dependabot *security* updates for these
  configurations. Security advisories still appear as alerts on `main`; they are
  acted on by hand.
- `security-features-main` drifts from `main` as `main` moves. Merge `main` into it
  before taking it back, or the eventual merge arrives with conflicts.

One dependency is held back on purpose: `react-icons` is pinned to `5.2.1` in
`advanced-frontend-labs/labs/11-react-typescript-rewrite`. From 5.3 it types its
components as returning `ReactNode`, which `@types/react` 18 rejects as a JSX
element (TS2786). TypeScript 5 accepts it, but `react-scripts@5.0.1` pins
typescript to `^4` as a peer dependency, so the icon package is what gives.
