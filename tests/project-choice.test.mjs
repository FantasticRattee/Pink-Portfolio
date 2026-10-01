import test from 'node:test';
import assert from 'node:assert/strict';
import { stat } from 'node:fs/promises';
import { projects } from '../dist/projects.mjs';
import { getProjectChoices, needsProjectChoice } from '../dist/project-choice.mjs';
import { getProjectMediaTabs } from '../dist/media-tabs.mjs';

test('collection chooser and existing document chooser select their own media IDs', () => {
 const certificates=projects.find(p=>p.id==='certificates');
 const choices=getProjectChoices(certificates);
 assert.deepEqual(choices.map(c=>c.id),['certificates','activities']);
 assert.deepEqual(choices.map(c=>c.label.th),['ใบเซอร์','กิจกรรมที่เข้าร่วม']);
 assert.equal(needsProjectChoice(certificates),true);
 const seoul=projects.find(p=>p.id==='seoul-milk-critique');
 assert.deepEqual(getProjectChoices(seoul).map(c=>[c.kind,c.index]),[['pdf',0],['pdf',1]]);
 assert.equal(needsProjectChoice(seoul),true);
 assert.equal(needsProjectChoice(projects.find(p=>p.id==='jane-interview')),false);
});

test('Certificates contains six authentic sources per category in the requested order',async()=>{
 const tabs=getProjectMediaTabs(projects.find(p=>p.id==='certificates'));
 const certificateItems=tabs[0].groups.flatMap(g=>g.items);
 const activityItems=tabs[1].groups.flatMap(g=>g.items);
 assert.equal(certificateItems.length,6,'the complete certificate collection has six source images');
 assert.deepEqual(certificateItems.map(i=>i.label.th),['FutureSkill','HACKa THAILAND 2023','BU x Future trends','Coursera','SET หมดหนี้มีออม','SET การเงินส่วนบุคคล']);
 assert.deepEqual(activityItems.map(i=>i.label.th),['เข้าร่วมฟังบรีฟ ThaiPBS 1','เข้าร่วมฟังบรีฟ ThaiPBS 2','เข้าร่วมกิจกรรม ThaiPBS 1','เข้าร่วมกิจกรรม ThaiPBS 2','เข้าร่วมฟังบรีฟ ปตท. รูปเดี่ยว','เข้าร่วมฟังบรีฟ ปตท.']);
 assert.deepEqual(activityItems.slice(0,2).map(i=>i.sourceName),['เข้าร่วมฟังบรีฟ ThaiPBS.jpg','เข้าร่วมฟังบรีฟ ThaiPBS(1).jpg']);
 for(const item of [...certificateItems,...activityItems])assert.ok((await stat(new URL('../dist/'+item.src,import.meta.url))).size>0);
});
