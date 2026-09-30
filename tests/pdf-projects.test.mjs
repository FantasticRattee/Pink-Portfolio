import test from 'node:test';
import assert from 'node:assert/strict';
import { open, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { projects } from '../dist/projects.mjs';
import { pdfPages } from '../dist/pdf-pages.mjs';

const expected = {
  'seoul-milk-critique': ['seoul-milk-presentation.pdf', 'seoul-milk-full-report.pdf'],
  'tee-noi-vs-lucky-suki': ['tee-noi-lucky-suki.pdf'],
  katsumidori: ['katsumidori.pdf'],
  'mv-lam-pam-symbolism': ['mv-lam-pam-analysis.pdf'],
  'jane-interview': ['jane-story.pdf'],
};

test('requested works open real PDF documents, with two choices for Seoul Milk', async () => {
  for (const [id, filenames] of Object.entries(expected)) {
    const project = projects.find((item) => item.id === id);
    assert.ok(project, `${id} project is missing`);
    assert.deepEqual(project.pdfDocuments?.map(({ src }) => src), filenames.map((name) => `assets/pdfs/${name}`));
    for (const document of project.pdfDocuments) {
      assert.ok(document.label?.th && document.label?.en, `${id} needs bilingual document labels`);
      const file = await open(new URL(`../dist/${document.src}`, import.meta.url));
      try {
        const header = Buffer.alloc(5);
        await file.read(header, 0, 5, 0);
        assert.equal(header.toString(), '%PDF-', `${document.src} must be a PDF`);
      } finally {
        await file.close();
      }
    }
  }
});

test('document page assets cover the exact public PDFs without stale or missing pages', async () => {
  const counts = {
    'jane-story.pdf': 8,
    'katsumidori.pdf': 9,
    'mv-lam-pam-analysis.pdf': 19,
    'seoul-milk-full-report.pdf': 23,
    'seoul-milk-presentation.pdf': 16,
    'tee-noi-lucky-suki.pdf': 28,
  };
  assert.deepEqual(Object.keys(pdfPages).sort(), Object.keys(counts).map((name) => `assets/pdfs/${name}`).sort());
  for (const [name, count] of Object.entries(counts)) {
    const src = `assets/pdfs/${name}`;
    const source = await readFile(new URL(`../dist/${src}`, import.meta.url));
    const rendered = pdfPages[src];
    assert.equal(rendered.sha256, createHash('sha256').update(source).digest('hex'), `${name}: regenerate pages after changing the source PDF`);
    assert.equal(rendered.pages.length, count, `${name}: every original page must be included`);
    for (const page of rendered.pages) {
      assert.ok(page.width > 0 && page.height > 0);
      for (const image of [page.src, page.smallSrc]) {
        const bytes = await readFile(new URL(`../dist/${image}`, import.meta.url));
        assert.equal(bytes.subarray(0, 4).toString(), 'RIFF', image);
        assert.equal(bytes.subarray(8, 12).toString(), 'WEBP', image);
      }
    }
  }
});
