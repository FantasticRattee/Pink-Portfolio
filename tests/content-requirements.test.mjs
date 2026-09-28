import test from 'node:test';
import assert from 'node:assert/strict';
import { projects } from '../dist/projects.mjs';
import { expandedDetails } from '../dist/detail-content.mjs';

function allPublicCopy(value, result = []) {
  if (typeof value === 'string') result.push(value);
  else if (Array.isArray(value)) value.forEach((item) => allPublicCopy(item, result));
  else if (value && typeof value === 'object') Object.entries(value)
    .filter(([key]) => !['source', 'image', 'src', 'previewVideo', 'alt'].includes(key))
    .forEach(([, item]) => allPublicCopy(item, result));
  return result;
}

test('project explanations use sentences and bullets without semicolons or arrow glyphs', () => {
  const copy = allPublicCopy(projects).concat(allPublicCopy(expandedDetails));
  for (const line of copy) assert.doesNotMatch(line, /[;→←↗]/u, line);
});

test('requested content sections replace the retired headings', () => {
  const retired = {
    kafak: ['เรื่องย่อและแนวคิด', 'โจทย์และผลการถ่ายทำ'],
    'my-love-scene': ['เรื่องและแรงบันดาลใจ', 'คอนเซปต์และอารมณ์'],
    'siam-arcade': ['สามช่วงการแข่งขัน', 'สิ่งที่เกิดขึ้นระหว่างผลิต'],
    'first-thing-first': ['แนวคิดรายการ', 'ลำดับรายการ', 'ภาพ ฉาก และกราฟิก', 'โจทย์การผลิต'],
    'tv-seminar': ['คำถามหลัก', 'รูปแบบการสนทนา', 'ผู้ฟังและการออกแบบพื้นที่', 'การประเมินที่วางไว้'],
    'resource-wrong-place': ['แก่นของสารคดี'],
    'street-food': ['เมืองที่เล่าผ่านอาหาร', 'เรื่องเล่าของผู้ขาย'],
    'piew-piew-turtle': ['ช่องที่มีตัวตนชัด', 'หกเสาหลักคอนเทนต์', 'วิธีคิดเรื่องเล่า', 'กลยุทธ์และปฏิทิน'],
    lightclean: ['แนวคิดผลิตภัณฑ์', 'วิธีนำเสนอเป็นโฆษณา'],
    'mv-tha-chan-khit-thueng-thoe': ['เรื่องเล่าผ่านความทรงจำ', 'แผนภาพและมุมกล้อง', 'วัสดุการผลิตที่มีอยู่'],
  };
  for (const [id, headings] of Object.entries(retired)) {
    const actual = expandedDetails[id].sections.map((section) => section.heading.th);
    for (const heading of headings) assert.ok(!actual.includes(heading), `${id}: ${heading}`);
  }
  assert.ok(expandedDetails['my-love-scene'].sections.some((section) => section.heading.th === 'ทำไมบทประพันธ์นี้ตรงกับเพลงที่จะทำ'));
});

test('complete LightClean ad and music video are selected in project details', () => {
  for (const id of ['lightclean', 'mv-tha-chan-khit-thueng-thoe']) {
    assert.ok(projects.find((project) => project.id === id)?.fullVideos?.length, `${id} needs full-length media`);
  }
});
