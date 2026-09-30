import test from 'node:test';
import assert from 'node:assert/strict';
import * as carousel from '../dist/carousel.mjs';
import { projects } from '../dist/projects.mjs';
import { expandedDetails } from '../dist/detail-content.mjs';

const { offsetFromActive, stepIndex, swipeStep } = carousel;

test('portfolio contains 15 numbered works after removing Kham Im', () => {
  assert.equal(projects.length, 15);
  assert.equal(new Set(projects.map((project) => project.id)).size, 15);
  assert.equal(projects.some((project) => project.id === 'kham-im'), false);
});

test('every media-only carousel card has a visual source', () => {
  for (const project of projects) {
    assert.ok(project.image || project.previewVideo, `${project.id} needs a card image or preview video`);
  }
});

test('wide source artwork gets a landscape card while portrait work stays portrait', () => {
  const landscape = [
    'siam-arcade', 'first-thing-first', 'tv-seminar', 'resource-wrong-place',
    'street-food', 'lightclean', 'mv-tha-chan-khit-thueng-thoe',
    'seoul-milk-critique', 'tee-noi-vs-lucky-suki', 'katsumidori',
  ];
  assert.deepEqual(projects.filter((project) => project.cardShape === 'landscape').map((project) => project.id), landscape);
  assert.equal(projects.find((project) => project.id === 'jane-interview')?.cardTitleOverlay, true);
});

test('mixed card widths leave room for their neighbors across the loop', () => {
  const { cardCenterOffset } = carousel;
  assert.equal(typeof cardCenterOffset, 'function');
  const widths = [180, 360, 200];
  const scale = (distance) => distance === 0 ? 1.18 : distance === 1 ? .74 : .64;
  const gap = 20;
  assert.equal(cardCenterOffset(1, 0, widths, scale, gap), (180 * 1.18 + 360 * .74) / 2 + gap);
  assert.equal(cardCenterOffset(2, 0, widths, scale, gap), -((180 * 1.18 + 200 * .74) / 2 + gap));
  assert.equal(cardCenterOffset(0, 2, widths, scale, gap), (200 * 1.18 + 180 * .74) / 2 + gap);
});

test('every project has more than a short summary in its detail view', () => {
  for (const project of projects) {
    const sections = expandedDetails[project.id]?.sections || [];
    assert.ok(sections.length >= 2 || project.description.th.length >= 250,
      `${project.id} needs source-backed detail in its description or sections`);
  }
});

test('project details use bilingual bullets or ordered production pages', () => {
  for (const project of projects) {
    const detail = expandedDetails[project.id];
    for (const section of detail.sections) {
      assert.ok(section.bullets?.length || section.images?.length, `${project.id}: ${section.heading.th} needs bullets or source pages`);
      for (const page of section.images || []) {
        assert.ok(page.src && page.alt.th && page.alt.en, `${project.id}: missing page source or translation`);
        assert.ok(page.width > 0 && page.height > 0, `${project.id}: missing page dimensions`);
      }
      for (const bullet of section.bullets || []) {
        assert.ok(bullet.th && bullet.en, `${project.id}: missing bullet translation`);
        for (const child of bullet.children || []) {
          assert.ok(child.th && child.en, `${project.id}: missing sub-bullet translation`);
        }
      }
    }
    if (project.contribution?.th) {
      assert.ok(project.contributionBullets?.th?.length, `${project.id}: role needs bullets`);
      assert.equal(project.contributionBullets.th.length, project.contributionBullets.en.length);
    }
  }
});

test('arrow navigation wraps in both directions', () => {
  assert.equal(stepIndex(0, -1, 15), 14);
  assert.equal(stepIndex(14, 1, 15), 0);
  assert.equal(stepIndex(4, 1, 15), 5);
});

test('a swipe changes one project only after a deliberate drag', () => {
  assert.equal(swipeStep(12, 40), 0);
  assert.equal(swipeStep(80, 40), -1);
  assert.equal(swipeStep(-80, 40), 1);
});

test('the loop keeps the first and last projects beside each other', () => {
  assert.equal(offsetFromActive(14, 0, 15), -1);
  assert.equal(offsetFromActive(0, 14, 15), 1);
  assert.equal(offsetFromActive(3, 0, 15), 3);
});
