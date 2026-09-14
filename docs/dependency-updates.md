# Dependency updates

Updates land on `deps` without a human and reach `main` through one reviewed
pull request. Built for a repository nobody is watching: the design optimises
for "keeps working unattended" over "clever".

```
Dependabot ─▶ PR ─▶ CI ──green on this exact commit──▶ squash-merged into deps
                                                              │
                                          promotion PR (CI runs on the result)
                                                              │
                                                       ◀ human merges ▶
                                                              ▼
                                                             main
                                                              │
                                        deps re-cut from main ┘
```

The two automation workflows are byte for byte the ones running in
`QA-web-labprojects-python`, where they were measured end to end against real
updates. That repository's `docs/dependency-updates.md` carries the design
rationale and the timings, and `docs/porting-the-dependency-pipeline.md` the
checklist this repository was installed from. Only what is specific to this
repository is written below.

## Branch contract

| Branch | Who writes | History |
|---|---|---|
| `main` | humans only | |
| `deps` | bots only (Dependabot, Actions) | **disposable**, re-cut from `main` after every promotion |

`deps` is never merged into — it is reset. It exists to change lockfiles, `main`
changes lockfiles too, and lockfiles conflict on nearly every line; a merge-based
sync leaves a human resolving a generated file by hand on a branch nobody
watches. Reset costs nothing instead, because every commit on `deps` is a bot
commit and every bot commit is regenerable: reset the branch and Dependabot
re-reads the manifest and raises the same bumps again.

The guard in `deps-promote.yml` keeps that true: one non-bot commit on `deps`
and the workflow resets nothing and turns the run red.

## Where `deps` came from

It was **not** cut from `main`. It was cut from `security-features-main`, which
held eleven Dependabot merges with no route into `main` — Dependabot was pointed
at it, updates landed there, and nothing carried them further. Those eleven are
the first thing the promotion will offer.

`security-features-main` is now dead. Nothing targets it and nothing reads it.

## Why CI needs no change

`ci.yml` runs on `push: [main]` and on `pull_request:` with no branch filter, so
a pull request into `deps` is built and a push to `deps` is not. That is exactly
what the pipeline needs and one run fewer than adding `deps` to the push filter:
the gate reads the `pull_request` run of each Dependabot pull request, and the
promotion gets its own `pull_request` run on the combined result.

## Why there is no scheduled vulnerability audit here

The other repositories on this pipeline run a weekly `npm audit` / `pip-audit`
that turns red when a new advisory appears. It is not installed here, on purpose.

This repository starts at 414 open advisories — 12 critical, 214 high — across
eleven lab projects, several of which were last touched in 2024. A workflow that
is red from its first run and stays red is not a signal; it is something everyone
learns to ignore, and it would make a green run mean nothing, which is the one
property the rest of this design depends on. Dependabot alerts already report
the same information without pretending to be a gate.

Install the audit here once the count is low enough that red means "something
new", not "still the same 414".

## Not everything is covered

Dependabot watches six npm directories. Three more have a lockfile and are not
watched at all:

- `advanced-frontend-labs/labs/04-nodejs-and-npm/npm`
- `advanced-frontend-labs/labs/06-typescript/exercises`
- `advanced-frontend-labs/labs/10-react-routing-and-queries/cloned-backend/mini-chat-server`

Two more have neither lockfile nor coverage (`elementary-frontend-labs/labs/09/practice-a`,
`elementary-frontend-labs/sandbox`). They are exercise scratch directories; the
decision to leave them out is deliberate, not an oversight.

## Repository settings this depends on

Not in the repository, so listed here:

1. **Secrets and variables → Actions**: `DEPS_PAT`. Without it both automation
   workflows fail immediately with 401.
2. **Actions → General → Workflow permissions**: *Allow GitHub Actions to create
   and approve pull requests* — ticked.
3. **General → Pull Requests**: squash merging enabled.
4. **Advanced Security → Dependabot alerts**: enabled.
5. **Branch protection on `main`**: require a pull request, and tick *Do not
   allow bypassing the above settings* — the second half is what actually stops
   a direct push by an administrator.

## Running it by hand

```
Actions → Dependency promotion → Run workflow   # realigns deps, opens the promotion PR
Actions → Dependency auto-merge → Run workflow  # sweeps; one log line per open update
```
