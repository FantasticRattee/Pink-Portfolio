# Portfolio site context

## Confirmed direction

- Portfolio owner: อรรถพร อัสสะบำรุงรัตน์ / Adtaporn Assabamrungrat.
- Include 15 works after removing รายการคำอิ่ม at the user's request. The two restaurant analysis decks remain separate cards.
- Present Thai and English copy with a TH/EN switch; Thai is the initial language.
- Use the supplied SENVA Behance screenshot as a visual reference: a quiet pale canvas, image-led panels in a horizontal sequence, and a larger central panel. The direct Behance page returned 403 during inspection, so the original animation timing could not be verified.
- Support browsing in both directions with scrolling, drag or touch swipe, and left/right arrow keys. Hover enlarges a project; click or Enter opens that project's details.
- Carousel cards use source-appropriate proportions: ten wide projects are 16:9 landscape cards, while five remain portrait. The media fills each card. Jane's Story is the only card with an on-image title, centered near the top at 60% text opacity and no background; other titles, teasers, numbers, and actions stay outside the artwork. The separate caption below the carousel names the selected project and retains the detail button.

## Source and content boundaries

- `../รายละเอียดผลงาน.pdf` describes nine main works and their stated roles. Additional works were identified from the `../Portfolio  2/` and `../Portfolio  3/` folders.
- `dist/projects.mjs` holds card titles, summaries, verified roles, translations, and media paths. `dist/detail-content.mjs` holds deeper source-based sections, the Katsumidori data board, and slide manifests. An individual role is omitted when the provided documents do not identify one.
- Every project has a local cover image. `dist/assets/` also contains ten short muted-hover excerpts, nine full-duration web video copies for the seven requested video projects (three clips for the tortoise project), and 36 slide images. Jane's Story uses a rabbit photograph from its source report rather than a text fallback. The originals remain in the supplied folders.
- The five user-requested cover changes are in `dist/assets/covers/`: My Love Scene, Piew Piew, SIAM Arcade, and Katsumidori come from page 1 of their respective PDFs; the MV cover comes from its supplied `Coverpage` image. My Love Scene and Piew Piew page 1 included student identifiers, so the website JPGs have those regions covered before export. The source PDFs were not changed. The rejected generative draft was not used because it did not preserve the source exactly.
- Raw PDFs and original large video files are not included in the site; the full-duration videos are compressed web copies. Source PDFs contain student IDs and group rosters, so the Teenoi/Lucky roster page 29 and Katsumidori roster page 10 were excluded from the slide viewers.
- The full video copies make the local `dist/` output about 373 MB on disk. The 24:54 SIAM Arcade web copy was compressed to 854×480 H.264/AAC (89,327,086 bytes) so no single Git file exceeds GitHub's 100 MiB limit; the original source media remain outside this site directory.
- LightClean is presented as a proposed product concept in an advertisement, not as a tested physical device.

## Implementation

- The static site is in `dist/`: `index.html`, `styles.css`, `app.mjs`, `carousel.mjs`, `projects.mjs`, `detail-content.mjs`, and `assets/`.
- `carousel.mjs` holds wraparound, swipe, and mixed-width spacing rules so landscape and portrait cards remain separated as the carousel loops. `tests/carousel.test.mjs` covers the 15-card list, shape assignments, mixed-width spacing, and navigation.
- Ten media-only cards play a muted looping excerpt on hover or keyboard focus when reduced motion is not requested. The five projects without video previews use source images as still cards. Detail dialogs offer the full web video with controls where requested, plus source-grounded description and verified role; the tortoise project has a three-video selector.
- Every one of the 15 project details now has multiple source-grounded, bilingual bullet sections using the กาฝาก style approved by the user. Nested bullets group related facts where useful; verified individual contributions also appear as bullets. The content is designed to cover the source's material points without turning each point into a long paragraph. On desktop the text column scrolls independently while the media stays visible on the left; narrow screens stack media and text in one scrollable dialog.
- The details were expanded from the supplied reports and presentation slides. Production work separates plans from finished media and reported shoot outcomes. The PR projects separate deck-reported measurements, proposed targets, campaign ideas, and any unavailable outcome data. The Jane profile is summarized at a public-appropriate level.
- Teenoi/Lucky detail shows 28 shareable slides. Katsumidori detail shows a slide-sourced persona/offer board and eight shareable source slides. No measured campaign-outcome dashboard was present in that deck.
- Local preview: open `preview.command` or run `npm start` from this directory. Without `PORT`, the server listens on `127.0.0.1:4173`; with Railway's `PORT`, it binds `0.0.0.0` for deployment. The server supports byte-range requests for seeking in full videos; `tests/server.test.mjs` checks that behavior.

## Local, GitHub, and Railway mapping

- Current local checkout root on the author's Mac: `~/Desktop/pink/Portfolio/site`. The parent folder is not the Git repo and contains source media and private application files. Future agents must confirm the actual checkout root and working-tree state instead of relying on this path.
- GitHub source: public [FantasticRattee/Pink-Portfolio](https://github.com/FantasticRattee/Pink-Portfolio), branch `main`, remote `origin`. The initial site publication commit was `5cb43d57235823478ee8e92a81f42e2e1b9f1425`; this historical SHA is not a substitute for checking the current remote.
- Railway: project `thorough-charm` (`ee7243d6-d5c9-497d-823e-78a7d24211b1`), environment `production` (`be98ba64-eefe-423a-a18f-66930b3afe4d`), [Pink-Portfolio service](https://railway.com/project/ee7243d6-d5c9-497d-823e-78a7d24211b1/service/3009b8c9-f9ea-40a0-8b0e-b3ec852b66b2?environmentId=be98ba64-eefe-423a-a18f-66930b3afe4d) (`3009b8c9-f9ea-40a0-8b0e-b3ec852b66b2`). Source is the same GitHub repo's `main`; auto-deploy is enabled. The root directory setting is unset because the Git root is the site root. Start command: `npm start`.
- Public deployment: [pink-portfolio-production.up.railway.app](https://pink-portfolio-production.up.railway.app/), Railway domain on port 8080. On 2026-09-26, the service was Active on the initial GitHub commit, the public page returned HTTP 200, and the full SIAM Arcade video supported HTTP 206 and played. These are dated observations; check the live state again before every update.
- `AGENTS.md` is the project-only update runbook. For an annotation on Railway, first map the local checkout, GitHub `main`, and Railway Active deployment; then edit Local, test, push GitHub, and verify Railway's automatic update.

## Validation and limits

- JavaScript syntax checks and all twelve carousel/content/server tests pass, including checks for portrait/landscape assignments, loop spacing, bilingual detail bullets, visual media for all 15 cards, and Railway host/port selection. All 15 projects have unique IDs and Thai/English copy; linked media and slide files exist. The local server returned HTTP 200 for the page and HTTP 206 for a byte range from the compressed full SIAM Arcade video.
- In-app browser review checked mixed-card spacing and full artwork for Teenoi/Lucky, Seoul Milk, and Katsumidori at the annotated 884×745 viewport; the Teenoi/Lucky card also remained readable at 390×844. The five replacement covers were visually checked in the browser at 884×745, with My Love Scene and Katsumidori also checked at 390×844. The derived My Love Scene and Piew Piew cover JPGs were inspected at full size to confirm their student details are absent. Jane's 60%-opacity title and transparent background were checked in both languages; clicking a landscape card opened the correct detail. Earlier review checked preview playback, detail scrolling, bilingual content, and slide viewers. These are sampled UI checks, not exhaustive coverage of every viewport or project. The local preview and public Railway deployment are separate environments.
