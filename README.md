# Pink Portfolio

A bilingual portfolio of 15 film, show, documentary, strategy, and media-analysis projects. Browse the carousel with a pointer, swipe, wheel, or arrow keys; select a project for its video, slides, and details.

## Run locally

Requires Node.js 18 or newer. No package installation or build step is needed.

```sh
npm start
```

Open <http://127.0.0.1:4173/>. Run `npm test` for the carousel, content, and video-range checks.

## Deploy on Railway

Create a service from this repository and leave its root directory at `/`. Railway can run the `npm start` script. The server listens on Railway's `PORT` on all interfaces; locally it uses port 4173 on the loopback interface. Generate a public domain in the service's Networking settings after deployment.

The `dist/` directory contains the site and web-ready media. Original source PDFs, raw video, and private application files are not part of this repository. Covers derived from source slides omit student identifiers.
