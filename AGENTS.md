# Pink Portfolio — project agent instructions

This file is the workflow for this repository, not a reusable Codex skill. Read [project-context.md](project-context.md) for the current site structure and [README.md](README.md) for local commands.

## Before changing a Railway annotation

Annotations on the public Railway site describe changes to the deployed portfolio. Make the change in the local Git checkout, then push it to GitHub and verify the Railway deployment. Do not edit production files directly in Railway or create another service for an ordinary update.

First map all three states **before editing**:

1. Confirm the checkout root with `git rev-parse --show-toplevel`. On the author's current Mac it is `~/Desktop/pink/Portfolio/site`. The parent `Portfolio` folder contains raw media and private application material and is **not** the Git repository to push.
2. Check `git status --short --branch`, `git remote get-url origin`, `git branch --show-current`, `git fetch origin`, `git rev-parse HEAD`, and `git rev-parse origin/main`. Preserve any uncommitted work. If local `main` differs from `origin/main`, inspect and reconcile that difference before editing.
3. Open the Railway service linked below. Check its Source repository and branch, current Active deployment's GitHub commit, service status, and public domain. Compare the Active commit with `origin/main`. A deployment may briefly lag a new push; wait for it to settle. If the service points to another repo/branch or an unexplained commit, resolve the mismatch before editing.

## Project mapping to verify each time

| Layer | Current mapping |
| --- | --- |
| Local checkout | `~/Desktop/pink/Portfolio/site` (verify rather than assuming the path) |
| GitHub | [FantasticRattee/Pink-Portfolio](https://github.com/FantasticRattee/Pink-Portfolio), public repository, `main` |
| Railway project | `thorough-charm`, environment `production`, [project](https://railway.com/project/ee7243d6-d5c9-497d-823e-78a7d24211b1?environmentId=be98ba64-eefe-423a-a18f-66930b3afe4d) |
| Railway service | [Pink-Portfolio](https://railway.com/project/ee7243d6-d5c9-497d-823e-78a7d24211b1/service/3009b8c9-f9ea-40a0-8b0e-b3ec852b66b2?environmentId=be98ba64-eefe-423a-a18f-66930b3afe4d), sourced from the GitHub `main` branch |
| Public site | [pink-portfolio-production.up.railway.app](https://pink-portfolio-production.up.railway.app/) |

Railway currently auto-deploys pushes to `main`. Its repository root directory is unset because the site files are already at the Git root. The service starts with `npm start`; `server.mjs` listens on Railway's `PORT` at `0.0.0.0`. The public domain targets port 8080. These are observed settings, not permanent assumptions: recheck them when starting a later task.

## Update sequence

1. **Edit locally.** Apply the annotation in `dist/` and update Thai/English copy together where applicable. `dist/projects.mjs` contains card data/media, `dist/detail-content.mjs` contains expanded details, and `dist/app.mjs`/`dist/styles.css` contain behavior and layout. Keep `project-context.md` in sync when facts or behavior change.
2. **Verify locally.** Run `npm test`, then use `npm start` for a preview at <http://127.0.0.1:4173/>. Inspect the affected project in a browser at the annotated viewport. Confirm related images/slides/videos load and full videos can seek.
3. **Audit the public commit.** Stage only this repository's intended files. Run the pre-push scrub if available and inspect `git diff --cached --name-only` plus staged content for secrets, student IDs, private profiles, absolute machine paths, raw PDFs, and unrelated source media. Do not include files from the parent folder. GitHub rejects ordinary Git files over 100 MB; preserve a working media version rather than silently dropping it.
4. **Commit and push to GitHub.** Push the reviewed commit to `origin/main` unless the user requests a different branch/workflow. Verify `git rev-parse HEAD` matches `git ls-remote origin refs/heads/main`.
5. **Verify Railway's update.** The existing service should auto-deploy the pushed commit. Inspect its deployment logs/status and confirm the Active deployment links to that exact GitHub commit. Use manual redeploy only when auto-deploy failed or did not trigger; do not create a second service or domain.
6. **Test production.** Check the public site returns HTTP 200, inspect the changed UI at the annotated viewport, and check changed assets. For video changes, verify HTTP 206 byte-range responses and actual playback. Report the GitHub commit, Railway status, public link, tests, and any remaining limitation.

## Final signoff loop

Before reporting that an update is finished, review **every applicable item** in the current request and `requirements.md` against the actual implementation and the relevant source slides, reports, and media. Automated tests alone do not prove the content is complete. Check Thai and English copy, requested headings and removals, project media, scrolling, and the affected desktop and narrow layouts. Verify the published files and Railway commit after deployment.

If the final review finds an omission, wrong fact, broken interaction, or mismatch with the source, fix it locally and repeat the affected content review, tests, browser checks, pre-push audit, GitHub push, Railway verification, and public check. Repeat this cycle until no known applicable requirement or defect remains unresolved. Do not call the work complete while a check is failing or a deployment is still unverified. In the final report, state the checks performed and any specific limitation that could not be verified.

If a requirement affects scope, design, or behavior and is unclear, ask the user before editing. For small details, state an assumption and proceed. An explicit request to stop at Local or GitHub overrides the full deployment sequence above.
