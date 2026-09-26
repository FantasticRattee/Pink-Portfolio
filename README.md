# Pink Portfolio

A bilingual portfolio of 15 film, show, documentary, strategy, and media-analysis projects. Browse the carousel with a pointer, swipe, wheel, or arrow keys; select a project for its video, slides, and details.

## Run locally

Requires Node.js 18 or newer. No package installation or build step is needed.

```sh
npm start
```

Open <http://127.0.0.1:4173/>. Run `npm test` for the carousel, content, and video-range checks.

## Production

The [public portfolio](https://pink-portfolio-production.up.railway.app/) is deployed from this repository's `main` branch to the existing [Railway Pink-Portfolio service](https://railway.com/project/ee7243d6-d5c9-497d-823e-78a7d24211b1/service/3009b8c9-f9ea-40a0-8b0e-b3ec852b66b2?environmentId=be98ba64-eefe-423a-a18f-66930b3afe4d). Railway auto-deploys pushes to `main`. The service uses the repository root and `npm start`; the server listens on Railway's `PORT` on all interfaces. Locally it uses port 4173 on the loopback interface.

For the required Local → GitHub → Railway update procedure, read [AGENTS.md](AGENTS.md). [project-context.md](project-context.md) records the site's content and deployment mapping.

The `dist/` directory contains the site and web-ready media. Original source PDFs, raw video, and private application files are not part of this repository. Covers derived from source slides omit student identifiers.
