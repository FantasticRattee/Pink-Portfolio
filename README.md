# Pink Portfolio

A bilingual portfolio of 15 film, show, documentary, strategy, and media-analysis projects. Browse the carousel with a pointer, swipe, wheel, or arrow keys; select a project for its video, document pages, and details. Seoul Milk offers a choice between its presentation and full report.

## Run locally

Requires Node.js 18 or newer. No package installation or build step is needed.

```sh
npm start
```

Open <http://127.0.0.1:4173/>. Run `npm test` for the carousel, content, PDF links/page assets, and media-range checks.

## Production

The [public portfolio](https://pink-portfolio-production.up.railway.app/) is deployed from this repository's `main` branch to the existing [Railway Pink-Portfolio service](https://railway.com/project/ee7243d6-d5c9-497d-823e-78a7d24211b1/service/3009b8c9-f9ea-40a0-8b0e-b3ec852b66b2?environmentId=be98ba64-eefe-423a-a18f-66930b3afe4d). Railway auto-deploys pushes to `main`. The service uses the repository root and `npm start`; the server listens on Railway's `PORT` on all interfaces. Locally it uses port 4173 on the loopback interface.

For the required Local → GitHub → Railway update procedure, read [AGENTS.md](AGENTS.md). [project-context.md](project-context.md) records the site's content and deployment mapping.

The `dist/` directory contains the site and web-ready media. Original source PDFs, raw video, and private application files are not part of this repository. Public PDF copies in `dist/assets/pdfs/` omit student-ID roster pages or redact an ID on a report cover while retaining work content. Covers derived from source slides also omit student identifiers.

## Document reader

PDF works display every original page in a continuous, touch-friendly reader with responsive page images, zoom/fit controls, and reduced-motion support. Jane and Seoul Milk show PDF pages only; the other PDF projects retain their information after the document. The optional PDF link opens the searchable original public copy.

To regenerate page images after updating a public PDF, install Poppler (`pdftoppm`) and Python packages `Pillow` and `pypdf`, then run `python3 scripts/render-pdf-pages.py` from this repository. Run the tests afterwards to check source hashes and complete page coverage.

Behind-the-scenes galleries are available through the original media-tab style for Kafak, My Love Scene, SIAM Arcade, First Thing First, and Resource Wrong Place. SIAM includes a production-report tab, and First Thing First includes a script tab. Galleries preserve full image proportions and clip durations/audio, using one continuous scroll with sticky tabs.
