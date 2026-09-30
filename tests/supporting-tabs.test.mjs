import test from 'node:test';
import assert from 'node:assert/strict';
import {stat} from 'node:fs/promises';
import {projects} from '../dist/projects.mjs';
import {getProjectMediaTabs,getActiveMediaTab} from '../dist/media-tabs.mjs';

const ids=['kafak','my-love-scene','siam-arcade','first-thing-first','resource-wrong-place'];
test('supporting tabs keep the original media as the default and add the requested gallery/documents',()=>{
 for(const id of ids){
  const project=projects.find(p=>p.id===id),tabs=getProjectMediaTabs(project);
  assert.equal(tabs[0].kind,'video');assert.equal(getActiveMediaTab(project,null).id,tabs[0].id);
  assert.ok(tabs.some(t=>t.label.th==='เบื้องหลัง'&&t.kind==='gallery'));
  if(id==='siam-arcade')assert.equal(tabs.at(-1).label.th,'รายงานสรุปผล');
  if(id==='first-thing-first')assert.equal(tabs.at(-1).label.th,'สคริปต์รายการ');
  assert.equal(new Set(tabs.map(t=>t.id)).size,tabs.length);
  for(const tab of tabs){assert.ok(tab.label.th&&tab.label.en);assert.deepEqual(getActiveMediaTab(project,tab.id),tab);}
  assert.equal(getActiveMediaTab(project,'stale-project-tab').id,tabs[0].id);
 }
});
test('requested group order and source media are complete',async()=>{
 const expected={kafak:[['solo',2],['onset',6],['group',3],['other',5]],'my-love-scene':[['sequence',7]],'first-thing-first':[['group',1],['camera',1],['solo',2]],'resource-wrong-place':[['group',1],['sequence',2]]};
 for(const [id,groups] of Object.entries(expected)){
  const gallery=getProjectMediaTabs(projects.find(p=>p.id===id)).find(t=>t.kind==='gallery');
  assert.deepEqual(gallery.groups.map(g=>[g.id,g.items.length]),groups);
  if(id==='my-love-scene')assert.deepEqual(gallery.groups[0].items.map(i=>i.sourceName),Array.from({length:7},(_,i)=>`เบื้องหลัง ${i+1}.jpg`));
  for(const group of gallery.groups)for(const item of group.items){
   assert.ok((await stat(new URL('../dist/'+item.src,import.meta.url))).size>0,item.src);
   assert.ok(item.width>0&&item.height>0);if(item.type==='video'){assert.ok(item.duration>0);assert.ok((await stat(new URL('../dist/'+item.poster,import.meta.url))).size>0);}
  }
 }
});
test('SIAM gallery includes group photo, two guest VTRs, then selected CG sources',()=>{
 const gallery=getProjectMediaTabs(projects.find(p=>p.id==='siam-arcade')).find(t=>t.kind==='gallery');
 assert.deepEqual(gallery.groups.map(g=>g.id),['group','vtr','cg']);
 assert.equal(gallery.groups[0].items.length,1);assert.equal(gallery.groups[1].items.length,2);
 assert.equal(gallery.groups[2].items.length,3);
});
