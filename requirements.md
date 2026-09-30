# Portfolio content revision requirements

Status: Active project requirements

## Goal

Revise the public portfolio so each project explains the work accurately and fully enough to understand its concept, source material, production, and the portfolio owner's verified contribution. Keep the writing easy to scan. Use the supplied presentations, reports, scripts, and finished media as evidence rather than expanding brief copy by invention.

These requirements come from four conversation screenshots in the private `../Fix - Requirements/1/` folder, dated 28 September 2026. The source PDFs and original media stay outside this public Git repository. The separate `AGENTS.md` governs the Local → GitHub → Railway update and verification sequence.

## Scope and sources

- Applies to the bilingual card copy, project detail text, cover/media presentation, and video labels in `dist/`. Update Thai and English together while preserving the Thai meaning and any requested exact Thai wording.
- The screenshot source key is: `S1` = `Screenshot 2569-09-28 at 18.08.15.png`, `S2` = `...18.08.33.png`, `S3` = `...18.08.48.png`, and `S4` = `...18.08.57.png`.
- Primary content sources include `รายละเอียดผลงาน.pdf`, `กาฝาก proposal.pdf`, `My love scene proposal.pdf`, `Arcade.pdf`, `รายงานสรุปผล.pdf` for SIAM Arcade, `First thing first proposal.pdf`, `สคริปต์ First thing first.pdf`, `Proposal สัมนา.pdf`, `พิวพิวเต่าคุณหนู.pdf`, `หลอดไฟกลมดิ๊ก proposal.pdf`, and the MV `Shotlist.pages` and `Breakdown.pages`. Source footage is available in the matching project folders.
- The replacement television seminar cover is the image named **Cover page** in the [user-identified Google Drive folder](https://drive.google.com/drive/folders/13_GAE4R0a9UMY8PPnGAjOSJiZ7wHA1oJ). The user identified this image after the initial screenshot request, so `IMG_7783.JPG` is not the selected replacement.

## Functional requirements

### FR-001 — Content quality across projects

- Cover every distinct, relevant fact requested in the screenshots and supported by the source material. A short bullet with a nested bullet is acceptable when it makes a complete point clearer. Avoid long paragraphs that hide separate facts, and avoid repeating the same point in multiple sections.
- Explain plans as plans, proposed product functions as proposals, and completed work as completed work. Attribute a personal role only where supplied documents or the user's explicit correction support it.
- Do not use a semicolon (`;`) or an arrow glyph (`→`, `←`, `↗`, etc.) to connect explanatory copy for any project. Write the relationship in words. Navigation icons and controls are outside this prose rule.
- Make the detail view readable at the annotated desktop size and on narrow screens. The user must be able to scroll to all expanded content without a cover image or video obscuring text.

Source: S1, S2, S3, S4 and the existing detail-view request recorded in `project-context.md`.

### FR-002 — กาฝาก

- Rename **เรื่องย่อและแนวคิด** to **Concept**. Explain the deck's “THAI ANALOG HORROR WITH OLD BELIEFS IN THE 1980S” framing, the mysterious woman and infection, the cuckoo/alien-parasite idea, and how the story uses period beliefs. Describe 1980s HIV rumors or stigma as incorrect beliefs of the characters or time, never as medical facts.
- Expand **โลกยุค 80s และตัวละคร** with the source's costume, hair, makeup, color, and character rationales, including coordination between art direction and Costume & Makeup and a consistent set/prop palette.
- Expand **สัญลักษณ์ที่เล่าเรื่อง** using the presentation's art-direction and Symbols material, including the Snow White poison-apple association, without claiming an unverified personal Art Director credit.
- Rename **โจทย์และผลการถ่ายทำ** to **ปัญหาและอุปสรรคในการถ่ายทำ** and cover all source-reported production obstacles.

Source: S1 and `กาฝาก proposal.pdf`, especially PDF pages 2–5, 7–16, and 21–26.

### FR-003 — My Love Scene

- Expand **เกี่ยวกับผลงาน** to introduce the Love Scene of ดาว and ก้อย as friends becoming lovers, its *Hormones Season 2* inspiration, the MVs **ห้องเธอ** and **คงต้องบอกให้รู้**, Girl Love and Friend Zone framing, **รสชาติของความรัก**, the song **กระแซะ**, romantic and tender tension, and the warm red/yellow visual treatment. Separate source inspirations from the finished scene.
- After **บทบาท**, **add** the heading **ทำไมบทประพันธ์นี้ตรงกับเพลงที่จะทำ**. Use all relevant slide evidence about why the chosen song matches the characters' gradual closeness and risk of crossing the friendship boundary. The screenshot explicitly says to add this heading.
- Remove the old headings **เรื่องและแรงบันดาลใจ** and **Concept และอารมณ์**, moving any useful source facts into the revised structure.
- Expand **สัญลักษณ์ในฉาก** and **ภาษาภาพและโจทย์การสื่อสาร** from the deck's Symbol Metaphor and The Picture Compositions/shot-type slides, including the five-senses example of wiping cream from a lip.

Source: S1–S2 and `My love scene proposal.pdf`, especially PDF pages 2–14.

### FR-004 — SIAM Arcade

- Change the Thai card teaser to **เกมโชว์สุดมันส์ในบรรยากาศงานวัดไทยร่วมสมัย**. Express the same meaning in English.
- Change the Thai contribution wording to **ดูแลไมค์ของพิธีกรและผู้ร่วมรายการ** wherever that contribution appears.
- Remove **สามช่วงการแข่งขัน** as a detail heading and replace it with **Mood & Tone**, covering the source's atmosphere and visual design without repeating those same facts in another section.
- Expand **แนวคิดและรูปแบบ** using the deck and report: Thai culture presented with modern game-show energy, proverb and Thai dessert games, balloon play, temple-fair influences, lively red/yellow/gold palette, retro Thai visuals, and patterned costume/set choices where documented.
- Rename **สิ่งที่เกิดขึ้นระหว่างผลิต** to **ความท้าทายของงานนี้**. Include source-reported short rehearsal/shoot time, overruns and edit cuts, and prop-heavy production. Remove the sentence treating the full recording and report as proof the work was completed.

Source: S2, `Arcade.pdf`, and the SIAM Arcade `รายงานสรุปผล.pdf`.

### FR-005 — First Thing First

- Change the preview/media label to **คลิปเบื้องหลังการผลิตรายการ**.
- Expand **เกี่ยวกับผลงาน** around guests' meaningful first experiences, personal and career beginnings, lessons and inspiration, the friendly/warm set, the brown/yellow/black palette, and the documented guest and music affiliations. The proposal names the guest คุณมัส (Marchwasow).
- Remove **แนวคิดรายการ**, **ลำดับรายการ**, and **ภาพ ฉาก และกราฟิก** as detail headings. Preserve relevant facts in the revised description or remaining sections without repetition.
- Rename **โจทย์การผลิต** to **ความท้าทายของงานนี้**. Explain the small crew, dependence on each assigned role, limited rehearsal/setup time, and the need to keep camera 3 steady, to the extent documented.

Source: S2, `First thing first proposal.pdf`, and `สคริปต์ First thing first.pdf`.

### FR-006 — รายการโทรทัศน์ตกยุคแล้วหรือยัง?

- Replace the Thai card teaser with **ชวนมองพฤติกรรมผู้ชมและรายการโทรทัศน์ในอนาคต** and update English accordingly.
- Rewrite **เกี่ยวกับผลงาน** to explain the seminar question, viewing habits across age groups, online/streaming competition, how television producers or stations might adapt, and the discussion's accessible tone. Distinguish questions and possibilities from measured findings.
- Change the contribution wording to **ช่วยแผนกต้อนรับและฝ่ายลงทะเบียน**.
- Remove the detail headings **คำถามหลัก**, **รูปแบบการสนทนา**, **ผู้ฟังและการออกแบบพื้นที่**, and **การประเมินที่วางไว้**. Retain useful, verified context in the revised description without preserving those headings.
- Label the available event video **คลิปเบื้องหลังการสัมมนา**. Do not suggest that an atmosphere clip is a complete recording of the discussion.
- Replace the project's cover with **Cover page** from the user-identified Drive folder above. Use a local, web-ready copy in the site and verify that it loads on both card and detail views. Keep unrelated Drive files and source PDFs out of the public repository.

Source: S2, `Proposal สัมนา.pdf`, the supplied seminar footage, and the user's later annotation selecting the Drive **Cover page** image.

### FR-007 — ทรัพยากรผิดที่ผิดเวลา

- Replace the Thai card teaser with **คุณใช้ทรัพยากรที่มีอย่างคุ้มค่าแล้วหรือยัง?**.
- Expand **เกี่ยวกับผลงาน** to describe discarded material's possible value, waste sorting, resource conservation, environmental impact, and the documented interviews with the environmental expert, the factory representative, and น้าอุ้ม. Check personal names and affiliations against the source before publishing.
- Remove **แก่นของสารคดี** as a heading. In **เสียงจากพื้นที่จริง**, describe น้าอุ้ม concisely as a garbage-truck driver speaking from firsthand work, without the extra claim that interviews form the film's core.
- Add **ความท้าทายของงานนี้** with the user's account in S3 of scheduling and communication difficulties, smell and heat on the factory visit, assigned work not delivered and late attendance, and four people covering multiple production duties. Present these as the user's production account, without implying that every detail was independently documented in the report.

Source: S3, `รายละเอียดผลงาน.pdf`, and the supplied documentary footage.

### FR-008 — Street Food

- Replace the Thai card teaser with **ร้านเล็กๆ แต่เลี้ยงชีพทั้งเมือง**.
- Expand **เกี่ยวกับผลงาน** to cover Bangkok street food as part of the city's identity and Thai soft power, affordable small stalls, the warmth and relationships with regular customers that cannot be measured only in money, vendors' livelihoods, and the source interview with คุณแนท, the Isan-food vendor.
- Remove the old detail headings **เมืองที่เล่าผ่านอาหาร** and **เรื่องเล่าของผู้ขาย**. Keep any unique verified facts in readable remaining copy.

Source: S3, `รายละเอียดผลงาน.pdf`, and the supplied Street Food documentary.

### FR-009 — พิวพิวเต่าคุณหนู

- Rewrite the card teaser as the user's TikTok Exotic Pet Lifestyle influencer concept with a sulcata tortoise. Normalize dictated spelling for publication while preserving the requested meaning.
- Remove both the generic **เกี่ยวกับผลงาน** and personal **บทบาท** sections for this project, as the S3–S4 request specifies. Keep the slide-backed content below in its own scannable sections.
- Remove the current detail headings **ช่องที่มีตัวตนชัด**, **หกเสาหลักคอนเทนต์**, **วิธีคิดเรื่องเล่า**, and **กลยุทธ์และปฏิทิน**. Reorganize the full strategy into scannable sections or nested bullets covering Key Message, Slogan, Brand Positioning Statement, SWOT, Red–Blue Ocean, Hero’s Journey, Hook–Story–Offer, Before–After–Bridge, all six content pillars, and the Content Calendar with planned posting dates. Include the deck's concrete beginner How-to ideas, its proposed saved-clip/For You distribution logic, and the ending of the Hero’s Journey example. Do not imply planned posts or revenue were achieved unless a source confirms that.
- Rename the three full-video selectors from **คลิป 1**, **คลิป 2**, **คลิป 3** to **คอนเทนต์ 1**, **คอนเทนต์ 2**, **คอนเทนต์เพิ่มเติม** and equivalent English labels.

Source: S3–S4 and `พิวพิวเต่าคุณหนู.pdf`, PDF pages 1–10.

### FR-010 — กลมดิ๊ก (LightClean)

- Describe the work as a **คลิปโฆษณาหลอดไฟ** rather than a comedy-tagged card teaser. Expand **เกี่ยวกับผลงาน** with the **น้องกลมดิ๊ก** UV-C lamp concept and its proposed convenience, remote operation, humidity and pathogen-level sensor inputs, and other functions actually in the proposal.
- Change the contribution to **เขียนบทและซัพพอร์ตการถ่ายทำ**, as the user specified.
- Remove the existing detail headings **แนวคิดผลิตภัณฑ์** and **วิธีนำเสนอเป็นโฆษณา**. Move any unique, relevant facts into the revised description or other readable sections.
- Offer the complete advertising video in the detail view rather than only a short hover preview.
- Preserve the proposal's distinction between an imagined product and a tested device. Do not claim proven disinfection, safety, or a physically built product. Include the source's UV-C exposure caution where product functions are described.

Source: S4 and `หลอดไฟกลมดิ๊ก proposal.pdf`, PDF pages 1–8.

### FR-011 — ถ้าฉันคิดถึงเธอขึ้นมา

- Offer the completed music video in the detail view, separate from any short hover preview or behind-the-scenes clip.
- Change the Thai card teaser to **มิวสิกวิดีโอที่ถ่ายตาม Camera Angle**, with a natural equivalent in English.
- Add the user's specified personal contribution: **เป็นนักแสดงหลักใน MV และมีส่วนร่วมในการทำ Breakdown**.
- Remove the existing detail headings **เรื่องเล่าผ่านความทรงจำ**, **แผนภาพและมุมกล้อง**, and **วัสดุการผลิตที่มีอยู่**. The 30 September follow-up replaces explanatory summaries with two sections: **Shotlist**, showing its two original document pages in order, then **Breakdown**, showing its three content pages in order. No explanatory bullets accompany these images. Offer the supplied **เบื้องหลัง.mov** separately from the completed MV.

Source: S4, `Breakdown.pages`, `Shotlist.pages`, and the supplied finished MV.

### FR-012 — White project information panel

- Use a white background for the information side of every project detail, with dark readable headings and body text. Keep secondary labels dark enough to remain legible on white, use quiet light dividers, and limit blue to small accents and interactive states for a clean, restrained look.
- Apply the light treatment to About and Role text, expanded bullets and nested bullets, source notes, navigation, the Katsumidori data board, and slide-viewer controls. The image and video side may retain a dark surround so varied source media remains clear.
- Preserve keyboard focus visibility, scrolling, video controls, slide navigation, and readable layouts at the annotated 626×735 viewport as well as desktop and narrow mobile sizes.

Source: User's Railway browser annotation on the project information panel, 29 September 2026.

### FR-013 — Source PDF works in project details

- When opening **Seoul Milk**, present a document-choice popup for `Soul milk.pdf` (presentation) and `รายงาน Soul milk ฉบับเต็ม.pdf` (full report). Let the viewer choose and switch between the two. The chooser must support Escape, a close button, keyboard focus, and Thai/English labels.
- Make the source PDF the primary readable media for **ตี๋น้อย × ลัคกี้สุกี้** (`PR037_Final.pdf`), **Every Minute Matters / Katsumidori** (`PR037_ปาทังกี้_katsumidori.pdf`), **MV ลามปาม** (`วิเคราะห์สัญญะใน MV.pdf`), and **เรื่องราวของเจน** (`Report เรื่องเจน.pdf`). Keep the existing text details below the PDF and provide a direct open-in-new-tab link when the embedded viewer is unavailable or too small.
- Publish searchable PDF copies derived from the supplied files. Remove roster pages consisting of student names and IDs from the Seoul presentation, Teenoi/Lucky deck, Katsumidori deck, and MV analysis. Redact the student ID on the Seoul full report cover without leaving extractable text. Keep the remaining work pages and do not change the private originals. Clearly label these as public copies.
- Serve the files with `application/pdf` and byte ranges, and make the PDF reader usable on desktop and narrow screens without hiding the close or document-switch controls.

Source: User's Railway request naming the six source PDFs, 29 September 2026, and the existing public-repository privacy boundary.

### FR-014 — Direct project copy and production documents

- กาฝาก: remove “สไลด์” from “สไลด์หยิบความเข้าใจผิด…”. My Love Scene: change “สไลด์วาง” to “ได้วาง”.
- SIAM Arcade: spell every instance of “เกมส์” as “เกม”. In the challenges, use “ควรสื่อสารคิวและช่วงเปลี่ยนเกมให้ชัดขึ้น…”. First Thing First: retain steady Camera 3 framing, remove the live-show/set phrase from that challenge.
- พิวพิว: use “เลือกแพลทฟอร์ม TikTok เพราะคลิปสั้น…” and “คาดว่าการที่ผู้ชมบันทึกคลิป…”. Write **SWOT** with separate, source-complete S/W/O/T. Start **Blue Ocean** on a separate bullet from **Red Ocean**. Use headings **6 pillars** and **ตัวอย่างโครงเรื่อง**. Replace the long list of rest dates with “ตั้งใจจะหยุด 2 วัน เพื่อพัก…” and the source's editing, shoot-planning, history-series cadence, and alternating-content intent.
- กลมดิ๊ก: title **กลมดิ๊ก (LightClean)**, remove **โจทย์และคำตอบที่เสนอ**, and make the final ChatGPT point simply that the team used it for research and an infographic. Retain the distinction between a product concept and tested performance.
- Write explanatory prose directly from the supplied information. Do not narrate “สไลด์เลือก”, “ในสไลด์มีข้อมูล”, “ข้อเสนออ้างว่า”, or equivalent English source-attribution filler. Document names, source notes, and actual media labels may still identify the original files.
- MV: offer the full behind-the-scenes clip, then show only the ordered original pages under **Shotlist** and **Breakdown**, without cropping or explanatory prose. Page images may open at full size for reading. The supplied sources are native Pages documents, so render their two and three content pages rather than inventing replacement tables.

Source: User's project-by-project revision request, 30 September 2026, and the matching source documents/media.

## Non-functional requirements and constraints

### NFR-001 — Bilingual and readable

All changed visible copy, accessibility text, and relevant video labels have Thai and English versions. The detail view groups facts into short bullets or small paragraphs, allows scrolling through the full content, and remains legible without media covering text.

### NFR-002 — Public evidence boundary

Use web-ready derivatives for source images and videos. Do not publish raw PDFs, source workbooks, student identifiers, private profiles, or unrelated original media. Do not describe proposed outcomes or speculative product claims as proven results.

### NFR-003 — Existing deployment path

Implement and verify changes in the local `site` checkout, review the staged public commit, push to the existing GitHub `main`, and verify the existing Railway service deploys that exact commit. See `AGENTS.md` for the authoritative sequence.

## Acceptance criteria

- **AC-001:** Every requested project has the specified heading changes, card teaser or media label changes, and source-backed expanded details in Thai and English. The My Love Scene song-fit heading is added, while the specified old headings are absent.
- **AC-002:** No explanatory project copy in either language contains semicolon or arrow glyph sentence connectors. The text reads naturally after their removal.
- **AC-003:** The selected TV seminar cover visibly comes from the Drive **Cover page** file. Card and detail media load. The seminar footage is identified as behind-the-scenes or event footage, not a full discussion recording.
- **AC-004:** The complete LightClean ad and completed **ถ้าฉันคิดถึงเธอขึ้นมา** MV can be opened and seeked from their project details. Hover excerpts remain separate. If the supplied material has no distinct complete LightClean ad, report that specific source gap rather than presenting an excerpt as the complete work.
- **AC-005:** The three พิวพิวเต่าคุณหนู video selectors have the requested content labels, its generic About and personal Role sections are absent, and its full slide-backed strategy remains available in readable form.
- **AC-006:** On desktop and narrow viewports, every revised project detail can scroll to its final section without overlap, and the revised video and image assets load.
- **AC-007:** Local tests pass, staged public files pass the pre-push review, GitHub `main` matches the committed local revision, Railway's Active deployment matches that GitHub commit, and the public page and changed media are checked after deployment.
- **AC-008:** All 15 detail information panels use white with readable dark text in Thai and English. Analytical boards and slide controls remain legible, each dialog scrolls to its final content without media/text overlap, and focused controls stay visible at the annotated, desktop, and mobile viewports.
- **AC-009:** The five named projects open their requested PDF works. Seoul Milk offers two choices before opening a PDF. All six public PDF links return `application/pdf`, support byte ranges, render first and last pages, and retain searchable work text while the exact source student IDs and identifying PDF metadata are absent. Popup selection, Escape, focus return, document switching, external links, Thai/English, and mobile reading are checked in a browser.

## Source verification during implementation

- Confirm the exact Drive **Cover page** image identity and retrieve it from the user-identified folder before replacing the seminar cover. The user has identified the folder and filename, so this is an asset verification task rather than an open design choice.
- Check the LightClean source footage for a complete ad that is distinct from the short preview. If no longer source exists, do not present the preview as a complete video and report the missing source precisely.
- The MV Breakdown and Shotlist appear to contain differing shot counts or timings. Use the individual documented shots and avoid a single total or timeline until reconciled.
