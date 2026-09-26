const bilingual = (th, en) => ({ th, en });
const nested = (th, en, children) => ({ th, en, children });

export const expandedDetails = {
  kafak: {
    source: bilingual('รายละเอียดผลงาน หน้า PDF 1; กาฝาก proposal หน้า PDF 2–26 (ส่วนงานออกแบบและเพลงอธิบายตามสไลด์)', 'Portfolio overview PDF p. 1; Kafak proposal PDF pp. 2–26 (design and music described as documented in the deck)'),
    sections: [
      {
        heading: bilingual('เรื่องย่อและแนวคิด', 'Story and concept'),
        bullets: [
          nested(
            'เรื่องย่อ: หมู่บ้านยุค 1980s มีหญิงปริศนาหายตัว ผู้คนลือว่าเชื้อบางอย่างทำให้รูปลักษณ์และพฤติกรรมเปลี่ยนไป',
            'Story: A mysterious woman disappears from a 1980s village, while rumours blame an unknown infection for changes in people’s appearance and behaviour.',
            [
              bilingual('กานต์สินีพบหญิงลึกลับ แล้วเรื่องค่อยชี้ว่าเบื้องหลังอาจเป็นสิ่งเหนือธรรมชาติ ไม่ใช่โรคระบาดทั่วไป', 'Kantsinee encounters a strange woman; the story hints at a supernatural cause rather than an ordinary epidemic.'),
            ]
          ),
          bilingual('แรงบันดาลใจ: นำความเข้าใจผิดเรื่อง HIV ในอดีตมาเป็นบริบทของความกลัวและการตีตรา ผสมแนวคิดสิ่งแปลกปลอมแทรกซึมจากนิยาย “กาเหว่าที่บางเพลง” — ความเข้าใจผิดนั้นไม่ใช่ข้อเท็จจริงทางการแพทย์', 'Inspiration: Historical misconceptions about HIV shape the village’s fear and stigma, alongside the idea of an intruding presence from “กาเหว่าที่บางเพลง.” Those misconceptions are not medical facts.'),
          bilingual('ธีมและอารมณ์: “โรคระบาดปริศนาในหมู่บ้านพิศวง” ใช้ความจริงปนเหนือธรรมชาติ ความไม่แน่นอน ความตึงเครียด และสีโทนเย็น', 'Theme and mood: A “mysterious epidemic in a strange village,” mixing realism with the supernatural, uncertainty, tension, and a cool palette.'),
        ],
      },
      {
        heading: bilingual('โลกยุค 80s และตัวละคร', '1980s world and characters'),
        bullets: [
          nested(
            'ฉากและพร็อป: ห้องนอน โต๊ะเครื่องแป้ง โต๊ะทีวี และประกาศคนหายถูกออกแบบให้มีรายละเอียดแบบยุค 80s',
            'Sets and props: The bedroom, vanity, television corner, and missing-person notices are designed around 1980s details.',
            [
              bilingual('แป้งและครีมยุคนั้น ลิปสติกสีเขียว หวี ตลับแป้ง วิทยุ เทปเพลง และโปสเตอร์หนังช่วยบอกเวลาและวิถีชีวิต', 'Period cosmetics, green lipstick, combs, a compact, radio, cassette tapes, and film posters place the story in its era.'),
            ]
          ),
          nested(
            'เครื่องแต่งกายใช้สีและทรงผมแยกบุคลิกของตัวละคร',
            'Costume colours and hairstyles distinguish character ideas.',
            [
              bilingual('กานต์สินี: เหลือง–น้ำตาล แต่งหน้าธรรมชาติ; สีและต่างหูทรงเหลี่ยมโยงกับดินในแรงบันดาลใจ Prometheus', 'Kantsinee: Yellow and brown with natural makeup; the colours and square earrings refer to the clay motif in the Prometheus inspiration.'),
              bilingual('หญิงลึกลับ: ชุดขาว–แดงและเมกอัพกึ่งมนุษย์ต่างดาว; ชาวบ้านใช้เสื้อเสริมไหล่ ยีนส์ สีสด และผมลอนแบบยุค 80s', 'Mysterious woman: White-red costume and alien-like makeup; villagers use shoulder pads, denim, vivid colours, and period curls.'),
              bilingual('นักข่าวใช้สูทน้ำเงินเข้ม; ชุดทหารอ้างอิงภาพยุคสงครามเย็นและตำนาน Romulus ในขั้นออกแบบ', 'A navy suit signals the reporter; the soldier design references Cold War imagery and the Romulus story.'),
            ]
          ),
          bilingual('เมกอัพโรคสมมติวางเป็นสามระยะ: ผื่นเล็กน้อย → ลามแขนและคอ → ทั่วหน้าและตัว เป็นภาษาภาพของเรื่อง ไม่ใช่คำอธิบายอาการ HIV จริง', 'The fictional illness makeup progresses in three stages: small marks → arms and neck → face and body. This is a visual device for the story, not a description of real HIV symptoms.'),
        ],
      },
      {
        heading: bilingual('ภาษากล้องและดนตรี', 'Camera and music'),
        bullets: [
          nested(
            'ภาษากล้องในสไลด์: เส้นนำสายตา กรอบภาพ การเคลื่อนไหว เงาสะท้อน และจุดตัดเก้าช่อง',
            'Camera language in the deck: Leading lines, framing, movement, reflections, and nine-point composition.',
            [
              bilingual('สลับภาพไกลมาก ภาพไกล ภาพกลาง และภาพใกล้ รวมถึงมุมต่ำและมุมสูง', 'The examples move among extreme-long, long, medium, and close shots, with low and high angles.'),
            ]
          ),
          nested(
            'ดนตรีที่สไลด์ระบุแยกตามช่วงเรื่อง',
            'The deck maps music to different phases of the story.',
            [
              bilingual('กลอนกาเหว่าที่อัดเสียงใหม่เปรียบการฝากไข่กับสิ่งที่เติบโตอยู่ในร่างคน', 'A newly recorded cuckoo verse compares nesting in another bird’s home with something growing inside a human host.'),
              bilingual('“ห้องหุ่น” ในเฟส 1–2 ให้ความหลอนคล้ายฝันและภาพคนที่ถูกควบคุม', '“ห้องหุ่น” in phases 1–2 evokes dreamlike horror and a controlled person.'),
              bilingual('“คู่กรรม” ในเฟส 3 สื่อความผูกพันที่แยกไม่ออก; “ใจรัก” ช่วงเอเลี่ยนโยงคำสัญญากับภาพนก', '“คู่กรรม” in phase 3 suggests an inseparable bond; “ใจรัก” in the alien sequence connects a promise with bird imagery.'),
            ]
          ),
        ],
      },
      {
        heading: bilingual('สัญลักษณ์ที่เล่าเรื่อง', 'Story symbols'),
        bullets: [
          bilingual('แอปเปิลและหนอน: จากผลสด → รอยกัดและรอยช้ำ → เน่า สื่อสุขภาพและตัวตนของกานต์สินีที่ค่อยถูกบางสิ่งกลืนกิน', 'Apple and worms: Fresh fruit → bite marks and bruises → rot mirror Kantsinee’s gradual physical and personal takeover.'),
          bilingual('ประกาศคนหายที่ติดทับกัน: ใบของกานต์สินีทับใบหญิงลึกลับ สื่อเหตุการณ์ซ้ำและการถูกแทนที่', 'Overlapping missing posters: Kantsinee’s notice covers the mysterious woman’s, suggesting recurrence and replacement.'),
          bilingual('กระจก: เงาสะท้อนที่ทำไม่ตรงกับตัวละครเผยตัวตนอีกคนที่เข้ามาแทรกซึม', 'Mirror: A reflection that does not match the character’s actions hints at another identity inside her.'),
          bilingual('วัว: จากเรื่องเล่าความเมตตาที่ถูกทรยศ กลายเป็นภาพของการช่วยเหลือที่ดูจริงแต่เป็นกับดัก', 'Cow: A reference to kindness betrayed becomes an image of help that appears genuine but leads into a trap.'),
        ],
      },
      {
        heading: bilingual('โจทย์และผลการถ่ายทำ', 'Production constraints and outcome'),
        bullets: [
          bilingual('สถานที่: หาบ้านที่ให้ความรู้สึกยุค 80s ยาก จึงใช้บ้านสมาชิกทีมและตกแต่งเพิ่ม; มีเสียงสัตว์และลำโพงหมู่บ้านรบกวน', 'Location: A home that felt like the 1980s was hard to find, so the team dressed a member’s house; animals and village loudspeakers created noise.'),
          bilingual('แสงและเวลา: บางฉากต้องถ่ายก่อนพระอาทิตย์ตกเพื่อใช้แสงธรรมชาติ', 'Light and time: Some scenes had to finish before sunset to use natural light.'),
          bilingual('คนและตาราง: นักแสดงมากกว่ากำลังเมกอัพ สมาชิกฝ่ายอื่นช่วยกัน และใช้ agenda กับ breakdown จัดเวลาที่แต่ละคนไม่ตรงกัน', 'Crew and schedule: Other departments supported a small makeup team, while an agenda and breakdown coordinated mismatched availability.'),
          bilingual('รายงานหลังงานระบุว่าถ่ายทำตามแผนโดยรวม มีการปรับหน้างานเล็กน้อย', 'The retrospective says filming broadly followed the plan, with small on-set adjustments.'),
          bilingual('หนังสั้นฉบับเสร็จมีให้เล่นเต็มเรื่องในหน้ารายละเอียดนี้', 'The finished short film is available to play in full in this detail view.'),
        ],
      },
    ],
  },
  'my-love-scene': {
    source: bilingual('รายละเอียดผลงาน หน้า PDF 1–2; My Love Scene proposal หน้า PDF 1–14 (ภาพปกหน้าแรกตัดข้อมูลนักศึกษาออก); คลิปผลงาน', 'Portfolio overview PDF pp. 1–2; My Love Scene proposal PDF pp. 1–14 (student details removed from the first-page cover); finished scene video'),
    sections: [
      {
        heading: bilingual('เรื่องและแรงบันดาลใจ', 'Story and inspiration'),
        bullets: [
          bilingual('ดาวเจ็บจากความรักครั้งก่อน; ก้อยซึ่งเป็นเพื่อนสนิทเข้ามาปลอบ จนความใกล้ชิดเริ่มขยับเกินคำว่าเพื่อน', 'Dao is hurt after an earlier relationship; her close friend Koi comforts her as their closeness begins moving beyond friendship.'),
          bilingual('งานตีความความสัมพันธ์ก้อย–ดาวจาก Hormones Season 2 และรับอิทธิพลจาก MV “ห้องเธอ” กับ “คงต้องบอกให้รู้” เป็นฉาก Girl Love แบบใหม่', 'The team reinterprets Koi and Dao from Hormones Season 2, drawing on the music videos “ห้องเธอ” and “คงต้องบอกให้รู้” for a new Girl Love scene.'),
          bilingual('เพลง “กระแซะ” ใน proposal เป็นภาพเปรียบของการค่อย ๆ ขยับเข้าใกล้กัน', 'The proposal uses the song “กระแซะ” as an image of two people gradually moving closer.'),
        ],
      },
      {
        heading: bilingual('คอนเซปต์และอารมณ์', 'Concept and mood'),
        bullets: [
          bilingual('“รสชาติของความรัก” กับธีม Friend Zone ทำให้ฉากโรแมนติก เย้ายวน อ่อนโยน และยังคลุมเครือ', '“The taste of love” and the friend-zone theme make the scene romantic, sensual, tender, and still ambiguous.'),
          bilingual('แสงอบอุ่น สีแดง–เหลือง และประสาทสัมผัสทั้งภาพ สัมผัส เสียง รส และกลิ่น ถ่ายทอดความรู้สึกแทนคำอธิบายตรง ๆ', 'Warm light, red-yellow tones, and sight, touch, sound, taste, and smell convey feeling without direct exposition.'),
        ],
      },
      {
        heading: bilingual('สัญลักษณ์ในฉาก', 'Symbols in the scene'),
        bullets: [
          bilingual('พวงกุญแจสีรุ้งสื่อถึงตัวตนและการยอมรับของก้อย', 'A rainbow keychain speaks to Koi’s identity and acceptance.'),
          bilingual('เส้นแบ่งบนพื้นกับหมอนข้างแสดงระยะระหว่างเพื่อนกับคนรัก; การข้ามเส้นหรือขยับหมอนเปลี่ยนความหมายของพื้นที่', 'A floor line and bolster mark the friendship boundary; crossing the line or moving the pillow changes the space between them.'),
          bilingual('เค้กช็อกโกแลตเป็นรสขมจากความเจ็บปวดเดิม ส่วนสตรอว์เบอร์รีเป็นรสหวานอมเปรี้ยวของรักครั้งใหม่', 'Chocolate cake represents past bitterness; strawberry suggests the sweet-tart feeling of new love.'),
          bilingual('การถอดแหวนถูกวางเป็นภาพเปรียบของความใกล้ชิด ไม่ต้องอธิบายด้วยบทพูด', 'Removing a ring is planned as a metaphor for intimacy without explanatory dialogue.'),
        ],
      },
      {
        heading: bilingual('ภาษาภาพและโจทย์การสื่อสาร', 'Visual plan and challenge'),
        bullets: [
          bilingual('แผนภาพใช้ high angle, eye-level, ภาพกลาง ภาพใกล้มาก และเงาสะท้อน เพื่อสลับบริบทกับรายละเอียดของสายตา/สัมผัส', 'The visual plan mixes high-angle and eye-level views, medium and extreme close-ups, and reflections to shift between context, gaze, and touch.'),
          bilingual('ความยากคือทำให้ผู้ชมอ่านความสัมพันธ์ที่กำลังก้ำกึ่งได้ โดยไม่บอกตรง ๆ ว่าทั้งคู่เป็นเพื่อนหรือคนรัก', 'The challenge is to make an in-between relationship legible without stating whether the two remain friends or have become lovers.'),
          bilingual('proposal วางให้สัญลักษณ์ แสง สี และองค์ประกอบภาพไปในทิศทางเดียวกัน; คลิปฉบับเสร็จมีให้ดูแยกจากแผนนี้', 'The proposal aligns symbols, light, colour, and composition; the finished clip is available separately from that plan.'),
        ],
      },
    ],
  },
  'siam-arcade': {
    source: bilingual('รายละเอียดผลงาน หน้า PDF 2; Arcade.pdf หน้า PDF 1 (ภาพปก); รายงานสรุปผล SIAM Arcade หน้า PDF 15–24', 'Portfolio overview PDF p. 2; Arcade.pdf p. 1 (cover); SIAM Arcade production report PDF pp. 15–24'),
    sections: [
      {
        heading: bilingual('แนวคิดและรูปแบบ', 'Concept and format'),
        bullets: [
          bilingual('วาไรตี้เกมโชว์นำวัฒนธรรมไทยมาผสมความเร็วและภาพแบบอาเคดในบรรยากาศงานวัด', 'A variety game show mixes Thai culture with arcade pacing and a fairground atmosphere.'),
          bilingual('รายงานวางความยาวราว 25 นาที ผู้เข้าแข่งขันสองทีมสีแดง–น้ำเงิน ทีมละสองคน และสามช่วงเกม', 'The report plans roughly 25 minutes with two red/blue teams of two contestants and three game rounds.'),
        ],
      },
      {
        heading: bilingual('สามช่วงการแข่งขัน', 'Three rounds of play'),
        bullets: [
          bilingual('ช่วงวอร์มอัพให้ทีมสีแดงและสีน้ำเงินคุ้นกับเกมและพิธีกร', 'A warm-up helps the red and blue teams settle into the show.'),
          bilingual('เกมหลักใช้ภาพปริศนาและคำตอบจากชุดตัวอักษรเพื่อสะสมคะแนน', 'The main round uses image puzzles and letter clues to build scores.'),
          bilingual('เกมโบนัสปาลูกโป่งแบบงานวัดเพิ่มทั้งแต้มพิเศษและบทลงโทษที่ทำให้ผลพลิกได้', 'A fairground balloon-dart bonus adds extra points and playful penalties that can change the result.'),
        ],
      },
      {
        heading: bilingual('ภาพและเสียงของรายการ', 'Look and sound'),
        bullets: [
          bilingual('ฉาก LED ลายไทยย้อนยุคที่ปรับให้ร่วมสมัย สีแดง–เหลือง–ทอง และกราฟิก CG สร้างโลกอาเคด', 'Contemporary-retro Thai patterns on LED, red-yellow-gold colour, and CG form the arcade world.'),
          bilingual('พิธีกรและแขกรับเชิญใช้ผ้าขาวม้าหรือเสื้อผ้าลายไทย; เอฟเฟกต์เสียงทันสมัยช่วยจังหวะเกม', 'Pha khao ma and Thai-pattern clothing connect the host and guests to the theme; modern sound effects pace the games.'),
          bilingual('ฉากและพร็อปมีรายละเอียดมาก จึงต้องประสานภาพบนจอ เสียง และคิวการเล่น', 'The prop-heavy set requires coordination among screen graphics, sound, and game cues.'),
        ],
      },
      {
        heading: bilingual('สิ่งที่เกิดขึ้นระหว่างผลิต', 'Production lessons'),
        bullets: [
          bilingual('เวลาซ้อมและถ่ายทำจำกัด; งานถ่ายเกินแผนทำให้ต้องตัดช่วงที่ไม่จำเป็นในขั้นหลังผลิต', 'Rehearsal and filming time were tight; the overrun led the team to trim nonessential material in post-production.'),
          bilingual('กราฟิก LED/CG บางช่วงขึ้นไม่ตรง cue รายงานเสนอให้ทีมสื่อสารลำดับเกมและจังหวะเปลี่ยนช่วงให้ชัดขึ้น', 'Some LED/CG cues landed early or late; the report recommends clearer communication around game flow and transitions.'),
          bilingual('มีคลิปรายการฉบับเต็มและรายงานสรุปขั้นตอนผลิตเป็นหลักฐานของงานที่เสร็จแล้ว', 'A full show recording and production report document the finished work.'),
        ],
      },
    ],
  },
  'first-thing-first': {
    source: bilingual('รายละเอียดผลงาน หน้า PDF 3; First Thing First proposal หน้า PDF 2–17; สคริปต์ หน้า PDF 1–2; รายงานการผลิตหน้า PDF 8–14', 'Portfolio overview PDF p. 3; First Thing First proposal PDF pp. 2–17; script PDF pp. 1–2; production report PDF pp. 8–14'),
    sections: [
      {
        heading: bilingual('แนวคิดรายการ', 'Show concept'),
        bullets: [
          bilingual('“ครั้งแรก” เป็นแกนบทสนทนา: ก้าวแรกในอาชีพ ผลงานแรก ความรู้สึก ความผิดพลาด และบทเรียน', '“Firsts” anchor the conversation: a first career step, first work, feelings, mistakes, and lessons.'),
          bilingual('เป้าหมายคือให้ผู้ชมรู้จักคนเบื้องหลังผลงานและได้แรงบันดาลใจจากการเริ่มต้น ไม่ใช่แค่ฟังประวัติ', 'The aim is to reveal the person behind the work and inspire viewers through beginnings, not just recount a biography.'),
          bilingual('ข้อเสนอระบุแขกรับเชิญ “มัส” หรือ Marshwasow ซึ่งนำเรื่องผลงานแรกและเส้นทางในวงการมาคุยในบรรยากาศเป็นกันเอง', 'The proposal features “Mas”/Marshwasow discussing first works and an artistic path in an informal setting.'),
        ],
      },
      {
        heading: bilingual('ลำดับรายการ', 'Show flow'),
        bullets: [
          bilingual('แผนความยาว 25 นาที: เนื้อหา 22 นาทีและช่วงพักโฆษณารวม 3 นาที', 'The 25-minute plan allocates 22 minutes to content and 3 minutes to breaks.'),
          bilingual('เริ่ม interlude และ VTR แนะนำแขก → พูดคุยเรื่อง “ครั้งแรก” เป็นช่วง → เปิดให้แขกแนะนำผลงาน → พิธีกรปิดรายการ', 'Interlude and guest VTR → segmented first-experience conversation → guest work promotion → host close.'),
          bilingual('น้ำเสียงการสัมภาษณ์ตั้งใจให้อบอุ่นและจริงใจเหมือนฟังเพื่อนเล่า เพื่อเปิดมุมส่วนตัวโดยไม่กดดันแขก', 'The interview is designed to feel warm and sincere, like listening to a friend, so the guest can share without pressure.'),
        ],
      },
      {
        heading: bilingual('ภาพ ฉาก และกราฟิก', 'Set and graphic identity'),
        bullets: [
          bilingual('น้ำตาลให้ความอบอุ่น เหลืองเพิ่มพลัง และดำเสริมความน่าเชื่อถือ', 'Brown brings warmth, yellow adds energy, and black lends credibility.'),
          bilingual('ฉากจัดให้เหมือนห้องนั่งเล่น: เก้าอี้สีน้ำตาล โต๊ะโทนดิน แก้วกาแฟ ดอกไม้/ต้นไม้ ชั้นวาง และกรอบภาพสีอ่อน', 'The homelike set uses brown chairs, an earth-tone table, coffee cups, flowers/plants, a shelf, and soft framed images.'),
          bilingual('proposal มีโลโก้ lower third และผังฉากสำหรับตัวตนรายการ ไม่ใช่เพียงบทสัมภาษณ์อย่างเดียว', 'The proposal includes a logo, lower thirds, and a stage layout as part of the show identity.'),
        ],
      },
      {
        heading: bilingual('โจทย์การผลิต', 'Production constraints'),
        bullets: [
          bilingual('ทีมมีจำนวนคนพอดีกับตำแหน่ง ถ้าขาดหนึ่งคนงานจะสะดุด; เวลาซ้อมและเตรียมรายการมีจำกัด', 'Crew size closely matched the roles, so one absence could interrupt work; rehearsal and setup time were limited.'),
          bilingual('ต้องประคองกล้องตัวที่ 3 ให้ภาพนิ่งและทำงานกับฉากในจังหวะรายการจริง', 'Camera 3 needed steady framing while working within the live show rhythm.'),
          bilingual('เอกสารแยกแผนรายการออกจากคลิปการผลิตที่มีให้ชม; ไม่อ้างว่ามีรายการฉบับเต็มในโฟลเดอร์', 'The show plan is separate from the available production clip; the folder does not establish that a full episode export is available.'),
        ],
      },
    ],
  },
  'tv-seminar': {
    source: bilingual('รายละเอียดผลงาน หน้า PDF 3–4; Proposal สัมมนา หน้า PDF 2–23, 32; คลิปบรรยากาศงาน', 'Portfolio overview PDF pp. 3–4; seminar proposal PDF pp. 2–23 and 32; event footage'),
    sections: [
      {
        heading: bilingual('คำถามหลัก', 'The central question'),
        bullets: [
          bilingual('“โทรทัศน์กำลังตกยุค หรือเพียงเปลี่ยนรูปแบบ?” เป็นคำถามตั้งต้นของงาน', '“Is television becoming outdated, or merely changing form?” is the seminar’s opening question.'),
          bilingual('เปรียบการรอดูตามผังรายการกับการเลือกดูเองบน YouTube, TikTok และสตรีมมิง', 'It contrasts scheduled broadcasts with choosing content on YouTube, TikTok, and streaming services.'),
          bilingual('ชวนคิดว่าพฤติกรรมของแต่ละเจนเปลี่ยนอย่างไร สถานีโทรทัศน์ปรับตัวได้อย่างไร และโทรทัศน์อาจเป็นแบรนด์คอนเทนต์ในอนาคตหรือไม่', 'It asks how generations watch differently, how broadcasters can adapt, and whether television may become a content brand.'),
        ],
      },
      {
        heading: bilingual('รูปแบบการสนทนา', 'Discussion format'),
        bullets: [
          bilingual('แผนเวทีมีโพลเปิดวง บรรยายสั้น เสวนา การโต้ตอบกับผู้ฟัง และ Q&A', 'The planned program has an opening poll, short talk, panel, audience interaction, and Q&A.'),
          bilingual('หัวข้อย่อยครอบคลุมสถานะโทรทัศน์ เหตุที่คนรุ่นใหม่เลือกสตรีมมิง ความต่าง TV–streaming และการปรับตัวของผู้ผลิต', 'Topics cover television’s position, why younger audiences choose streaming, TV–streaming differences, and how producers adapt.'),
          bilingual('วางน้ำเสียงกระชับ สนุก และเข้าถึงง่าย ไม่เป็นเวทีวิชาการที่หนักเกินไป', 'The tone is intended to be concise, lively, and accessible rather than overly academic.'),
        ],
      },
      {
        heading: bilingual('ผู้ฟังและการออกแบบพื้นที่', 'Audience and event design'),
        bullets: [
          bilingual('กลุ่มหลักตาม proposal คือนักศึกษาสื่อ/คนเริ่มทำงานสื่ออายุราว 18–25 ปี; กลุ่มรองคือผู้ผลิตและครีเอเตอร์วัยทำงาน', 'The proposal’s primary audience is media students and early-career people around ages 18–25; producers and working creators form a secondary audience.'),
          bilingual('แนวคิดจัดฉากหยิบวัสดุเก่ากลับมาใช้เพื่อเชื่อมคำถามเรื่องสื่อเก่าที่เปลี่ยนคุณค่า และลดการใช้วัสดุใหม่', 'The set concept reuses old materials to echo the question of how older media can gain new value while reducing new material use.'),
          bilingual('คลิปที่มีเป็นบรรยากาศงาน ไม่ใช่บันทึกการเสวนาทั้งหมด', 'The available video captures event atmosphere, not the entire seminar discussion.'),
        ],
      },
      {
        heading: bilingual('การประเมินที่วางไว้', 'Planned evaluation'),
        bullets: [
          bilingual('ข้อเสนอวางการดูความพึงพอใจ จำนวน/คุณภาพคำถาม และการเปลี่ยนมุมมองของผู้เข้าร่วมหลังเสวนา', 'The proposal plans to consider satisfaction, audience questions, and whether views changed after the discussion.'),
          bilingual('โฟลเดอร์ไม่มีผลประเมินตัวเลขหลังงาน จึงแสดงสิ่งเหล่านี้เป็นแผน ไม่ใช่ผลลัพธ์ที่ยืนยันแล้ว', 'No post-event numeric results were supplied, so these are presented as a plan rather than achieved outcomes.'),
        ],
      },
    ],
  },
  'resource-wrong-place': {
    source: bilingual('รายละเอียดผลงาน หน้า PDF 4; สารคดีฉบับเต็ม', 'Portfolio overview PDF p. 4; full documentary'),
    sections: [
      {
        heading: bilingual('แก่นของสารคดี', 'Documentary focus'),
        bullets: [
          bilingual('สิ่งที่คนหนึ่งไม่ต้องการอาจยังเป็นทรัพยากรหรือสร้างมูลค่าให้คนเก็บขยะและธุรกิจจัดการขยะ', 'What one person discards may still be a resource or create value for collectors and waste-management businesses.'),
          bilingual('เป้าหมายของเรื่องคือชวนใช้ทรัพยากรให้คุ้มค่า แยกขยะ และมองผลต่อสิ่งแวดล้อมมากขึ้น ไม่ได้รายงานผลเปลี่ยนพฤติกรรมของผู้ชม', 'The film encourages thoughtful resource use, waste sorting, and environmental awareness; it does not report a measured change in viewer behaviour.'),
        ],
      },
      {
        heading: bilingual('เสียงจากพื้นที่จริง', 'Voices from the field'),
        bullets: [
          bilingual('ดร.สนธิ คชวัฒน์ให้มุมผู้เชี่ยวชาญด้านสิ่งแวดล้อม', 'Dr. Sonti Kotchawat contributes an environmental-expert perspective.'),
          bilingual('คุณทวีป ทวีสินอุดมจาก ต.คิดดี โปรดักส์ ให้มุมผู้ทำงานในบริษัทที่เกี่ยวข้องกับขยะ', 'Thaweep Thawisin of T.Kit Dee Products contributes a waste-business perspective.'),
          bilingual('“น้าอุ้ม” คนขับรถขยะ เล่ามุมของผู้ทำงานหน้างาน; ภาพยนตร์ใช้การสัมภาษณ์ภาคสนามเป็นแกน', '“Na Oom,” a garbage-truck driver, brings the field-worker view; on-location interviews anchor the film.'),
        ],
      },
    ],
  },
  'street-food': {
    source: bilingual('รายละเอียดผลงาน หน้า PDF 4–5; สารคดีฉบับเต็ม', 'Portfolio overview PDF pp. 4–5; full documentary'),
    sections: [
      {
        heading: bilingual('เมืองที่เล่าผ่านอาหาร', 'A city told through food'),
        bullets: [
          bilingual('อาหารข้างทางเป็นภาพจำของกรุงเทพฯ และส่วนหนึ่งของ soft power ไทยในมุมของสารคดี', 'The film presents street food as an image of Bangkok and part of Thai soft power.'),
          bilingual('ร้านเล็กและราคาเข้าถึงง่ายยังมีลูกค้าประจำ ความอบอุ่น และโอกาสสร้างรายได้ให้ผู้ขาย', 'Affordable small stalls also hold regular customers, warmth, and livelihood opportunities for vendors.'),
        ],
      },
      {
        heading: bilingual('เรื่องเล่าของผู้ขาย', 'The vendor’s perspective'),
        bullets: [
          bilingual('ทีมสัมภาษณ์คุณแนท เจ้าของร้านอาหารอีสานข้างทาง เพื่อให้ผู้ขายเล่าจากประสบการณ์ของตัวเอง', 'The team interviews Khun Nat, an Isan roadside-food vendor, to ground the story in a seller’s perspective.'),
          bilingual('ภาพเมืองและร้านอาหารเชื่อมกับบทสัมภาษณ์ เสียงพากย์ และคำบรรยาย; โฟลเดอร์มีสารคดีฉบับเสร็จแล้ว', 'City and stall footage join interviews, narration, and subtitles; a finished documentary is available in the folder.'),
          bilingual('เอกสารที่มีไม่ระบุตัวเลขรายได้หรือผลต่ออุตสาหกรรม จึงเล่าเป็นมุมชีวิตและโอกาส ไม่อ้างขนาดผลกระทบ', 'The supplied material gives no income or industry-impact figures, so the portfolio presents lived experience and opportunity without sizing an impact.'),
        ],
      },
    ],
  },
  'piew-piew-turtle': {
    source: bilingual('รายละเอียดผลงาน หน้า PDF 5; พิวพิวเต่าคุณหนู หน้า PDF 1–10 (ภาพปกหน้าแรกตัดข้อมูลนักศึกษาออก)', 'Portfolio overview PDF p. 5; Piew Piew strategy PDF pp. 1–10 (student details removed from the first-page cover)'),
    sections: [
      {
        heading: bilingual('ช่องที่มีตัวตนชัด', 'A distinct channel identity'),
        bullets: [
          bilingual('แนวคิดช่อง TikTok ด้าน Exotic Pet Lifestyle มี “พิวพิว” เต่าซูคาต้าเป็นตัวเอก ชื่อและบุคลิก “คุณหนู” ทำให้ช่องจำง่าย', 'An exotic-pet lifestyle TikTok concept centres on Piew Piew, a sulcata tortoise; the “princess” personality gives the channel a memorable identity.'),
          bilingual('คอนเทนต์ผสมหนึ่งวันกับเต่า วิธีดูแลเบื้องต้น การเล่าเรื่อง และ ASMR เสียงกิน/เดิน/ขยับตัว', 'Formats combine a day with the tortoise, beginner care, storytelling, and close-up eating/walking/movement ASMR.'),
          bilingual('จุดวางตำแหน่งคือมุมเจ้าของสัตว์เลี้ยงที่เป็นกันเอง ให้ทั้งความผ่อนคลายและข้อมูลที่เข้าใจง่าย', 'Positioning blends an approachable owner perspective with relaxing sound and simple information.'),
        ],
      },
      {
        heading: bilingual('หกเสาหลักคอนเทนต์', 'Six content pillars'),
        bullets: [
          bilingual('พื้นที่เลี้ยงและการดูแลในบ้าน', 'Home space and care'),
          bilingual('พืชที่ปลอดภัยสำหรับเต่า', 'Plants that are safe for tortoises'),
          bilingual('แนะนำผลิตภัณฑ์เกี่ยวกับการเลี้ยง', 'Pet-care product recommendations'),
          bilingual('กิจกรรมและการพาเต่าออกไปข้างนอก', 'Outings and activities'),
          bilingual('ข้อควรระวังในการดูแล', 'Care cautions'),
          bilingual('เรื่องเล่าและประวัติของพิวพิว', 'Piew Piew’s story and history'),
        ],
      },
      {
        heading: bilingual('วิธีคิดเรื่องเล่า', 'Story formats'),
        bullets: [
          bilingual('ตัวอย่างใช้ Hero’s Journey เล่าจากปัญหาในการดูแล ไปสู่การหาคำแนะนำและปรับวิธีเลี้ยง', 'A Hero’s Journey example moves from a care concern through seeking advice to changing the routine.'),
          bilingual('มีกรอบ Hook–Story–Offer และ Before–After–Bridge เพื่อจับความสนใจ เล่าเหตุการณ์ และชวนติดตาม', 'Hook–Story–Offer and Before–After–Bridge frame the opening, event, and follow-up.'),
          bilingual('เสียง ASMR ต้องได้ยินรายละเอียดชัด ไม่เช่นนั้นจุดต่างของช่องจะอ่อนลงตามการวิเคราะห์ในแผน', 'The strategy notes that ASMR sound must be clear for the channel’s distinctiveness to work.'),
        ],
      },
      {
        heading: bilingual('กลยุทธ์และปฏิทิน', 'Strategy and calendar'),
        bullets: [
          bilingual('SWOT และ Red–Blue Ocean มองความเฉพาะกลุ่มเป็นจุดเด่น แต่ระวังคลิปจังหวะช้า ซ้ำกัน และคู่แข่งเพิ่ม', 'SWOT and Red–Blue Ocean framing treat the niche as a strength while noting slow/repetitive pacing and more competition as risks.'),
          bilingual('แผนสำรวจโอกาสแนะนำอุปกรณ์/affiliate แต่ไม่ได้แสดงรายได้จริงของช่อง', 'The plan considers product recommendations or affiliate opportunities, without reporting actual channel revenue.'),
          bilingual('Content Calendar วางหัวข้อและเวลาโพสต์ช่วง 28 เม.ย.–12 พ.ค. เป็นตารางที่เสนอ ไม่ใช่หลักฐานว่าทุกคลิปเผยแพร่ตามนั้น', 'The content calendar schedules posts from 28 April to 12 May; it is a plan, not proof that every clip was published as scheduled.'),
        ],
      },
    ],
  },
  lightclean: {
    source: bilingual('รายละเอียดผลงาน หน้า PDF 5–6; หลอดไฟกลมดิ๊ก proposal หน้า PDF 1–8; คลิปโฆษณา', 'Portfolio overview PDF pp. 5–6; LightClean proposal PDF pp. 1–8; advertising video'),
    sections: [
      {
        heading: bilingual('แนวคิดผลิตภัณฑ์', 'Product concept'),
        bullets: [
          bilingual('เริ่มจากโจทย์คนที่ไม่อยากทำความสะอาดบ้านหรือคอยเปิด–ปิดอุปกรณ์บ่อย ๆ แล้วเสนอ LightClean หรือ “น้องกลมดิ๊ก” เป็นหลอดไฟ UV-C ในโฆษณาแนวตลก', 'The brief starts with the hassle of household cleaning and repeated switching, then presents LightClean or “Nong Klom Dik” as a UV-C lamp in a comedy ad.'),
          bilingual('เป้าหมายใน proposal คือความสะดวกและลดภาระงานบ้าน; ไม่มีผลทดสอบยืนยันว่ามีผลิตภัณฑ์ที่ทำงานได้จริง', 'The proposal aims for convenience and less household work; it does not provide evidence of a tested working product.'),
        ],
      },
      {
        heading: bilingual('การใช้งานตามข้อเสนอ', 'How the proposal imagines use'),
        bullets: [
          bilingual('ฟังก์ชันที่เสนอ: แสง UV-C สำหรับพื้นที่โดยรอบ รีโมตเปิด–ปิด ตั้งเวลา และการปรับระดับแสง', 'Proposed functions: UV-C light for the surrounding area, remote on/off control, a timer, and adjustable intensity.'),
          bilingual('สไลด์ต่อยอดเป็นเซ็นเซอร์สภาพแวดล้อม/ความชื้น การเชื่อมต่อ IoT และ AI ที่ช่วยปรับการทำงาน; ทั้งหมดยังเป็นโมดูลในแนวคิด', 'The slides extend the idea to environmental/humidity sensing, IoT connection, and AI-assisted adjustment; these remain concept modules.'),
          bilingual('proposal ระบุข้อควรระวังเรื่องการสัมผัส UV-C โดยตรง จึงไม่ควรอ่านโฆษณาเป็นหลักฐานด้านประสิทธิภาพหรือความปลอดภัย', 'The proposal cautions against direct UV-C exposure; the ad should not be read as evidence of performance or safety.'),
        ],
      },
      {
        heading: bilingual('วิธีนำเสนอเป็นโฆษณา', 'Advertising approach'),
        bullets: [
          bilingual('ชิ้นงานวิดีโอเล่าโจทย์การทำความสะอาดแบบขำ ๆ และแสดงแนวคิดผลิตภัณฑ์ ไม่ได้ถ่ายอุปกรณ์ใช้งานจริง', 'The video treats household cleaning humorously and illustrates the concept; it does not document real hardware in operation.'),
          bilingual('เอกสารบันทึกการใช้ InVideo AI ทำวิดีโอ และใช้ ChatGPT ช่วยค้นข้อมูลโมดูล/ประโยชน์สำหรับการนำเสนอ', 'The deck documents using InVideo AI for the video and ChatGPT to research modules and benefits for the presentation.'),
        ],
      },
    ],
  },
  'mv-tha-chan-khit-thueng-thoe': {
    source: bilingual('Coverpage/Screenshot 2569-09-26 at 22.59.56.png; Shotlist.pages และ Breakdown.pages (ภาพตัวอย่างในไฟล์); มิวสิกวิดีโอฉบับเต็มและคลิปเบื้องหลัง', 'Coverpage screenshot; Shotlist.pages and Breakdown.pages (embedded previews); full music video and behind-the-scenes clip'),
    sections: [
      {
        heading: bilingual('เรื่องเล่าผ่านความทรงจำ', 'A story through memory'),
        bullets: [
          bilingual('ภาพเปิดใช้รูปคู่ในกล้องเป็นทางเข้าสู่ความทรงจำ ก่อนเห็นการเก็บเสื้อผ้าและสิ่งของ', 'A couple’s photograph in a camera opens the memory sequence, followed by belongings being packed away.'),
          bilingual('อีกคนเดินเข้ามา ทั้งคู่กอดกัน แล้วเรื่องย้อนถึงช่วงที่เคยมีความสุข', 'Another person enters and the two embrace before the story revisits happier moments.'),
          bilingual('ภาพกลับสู่ตัวละครในรถที่จมกับความทรงจำเรื่องการจากลา', 'The story returns to a character in a car, absorbed in memories of a goodbye.'),
        ],
      },
      {
        heading: bilingual('แผนภาพและมุมกล้อง', 'Shot design'),
        bullets: [
          bilingual('Shotlist วาง ECU ของรูปถ่าย → ภาพกว้างของห้อง/การเก็บของ → CU ตอนกอด → ภาพระยะกลางในรถ', 'The shot list moves from an extreme close-up of the photo → a wide room/packing view → a close embrace → a medium car shot.'),
          bilingual('มุม high angle, eye level และ over-the-shoulder สลับรายละเอียดทางอารมณ์กับบริบทของตัวละคร', 'High-angle, eye-level, and over-the-shoulder views alternate intimate details with the characters’ surroundings.'),
        ],
      },
      {
        heading: bilingual('วัสดุการผลิตที่มีอยู่', 'Available production material'),
        bullets: [
          bilingual('Breakdown ที่เห็นจากภาพตัวอย่างมี storyboard, เวลา, สถานที่, อุปกรณ์ประกอบ และลำดับช็อตสำหรับวันถ่าย', 'The visible breakdown preview includes storyboard frames, timing, locations, props, and the day’s shot order.'),
          bilingual('โฟลเดอร์มีมิวสิกวิดีโอฉบับเสร็จ คลิปเบื้องหลังสั้นประมาณ 14 วินาที และภาพตัวอย่างจาก Shotlist/Breakdown', 'The folder includes the finished music video, a roughly 14-second behind-the-scenes clip, and Shotlist/Breakdown previews.'),
          bilingual('เอกสารที่อ่านได้ไม่แจกแจงหน้าที่รายบุคคล จึงไม่อ้างบทบาทเฉพาะของเจ้าของ Portfolio', 'The readable materials do not assign individual roles, so the portfolio does not claim a specific one.'),
        ],
      },
    ],
  },
  'seoul-milk-critique': {
    source: bilingual('รายงาน Soul Milk ฉบับเต็ม หน้า PDF 3–21; ประเด็นผู้ชมและคำชี้แจงเป็นข้อมูลที่รายงานรวบรวม', 'Full Seoul Milk report PDF pp. 3–21; audience reaction and brand statements are reported by that document'),
    sections: [
      {
        heading: bilingual('โฆษณาที่รายงานวิพากษ์', 'The ad under review'),
        bullets: [
          bilingual('รายงานเล่าโฆษณาราว 38 วินาที: ชายถือกล้องพบหญิงชุดขาวในธรรมชาติ ก่อนภาพเฉลยว่าเป็นวัวและโยงไปสู่นมออร์แกนิก', 'The report describes a roughly 38-second ad: a man films women in white outdoors before they are revealed as cows beside an organic-milk claim.'),
          bilingual('ทีมอ่านสีขาว/ธรรมชาติว่าเป็นความ “บริสุทธิ์” แต่การเปรียบร่างกายผู้หญิงกับวัวอาจลดคนให้เป็นทรัพยากรผลิตสินค้า', 'The group reads white and nature as “purity,” while the cow transformation risks reducing women to product resources.'),
          bilingual('มุมกล้องชายและการแอบถ่ายเป็นส่วนของภาษาภาพที่รายงานเชื่อมกับ Male Gaze และบริบท Molka', 'The male camera viewpoint and covert filming are visual choices the report connects with the male gaze and Molka context.'),
        ],
      },
      {
        heading: bilingual('กรอบวิเคราะห์ 8 มิติ', 'Eight analytical lenses'),
        bullets: [
          bilingual('Objectification — ผู้หญิงถูกทำให้เป็นวัตถุให้มองและควบคุม', 'Objectification — women become objects to watch and control.'),
          bilingual('Voyeurism — การแอบถ่ายถูกใช้เป็นกลวิธีเล่าเรื่อง ทั้งที่เชื่อมกับปัญหา Molka ในสังคมเกาหลี', 'Voyeurism — covert filming becomes a narrative device despite its link to Molka in Korean society.'),
          bilingual('Male Gaze — กล้องกำหนดสายตาผู้ชมจากมุมของชาย ขณะที่ตัวละครหญิงแทบไม่มี agency', 'Male gaze — the camera aligns viewers with a male gaze while female characters have little agency.'),
          bilingual('Stereotype — ผู้หญิงถูกผูกกับความบริสุทธิ์และธรรมชาติ ส่วนชายถูกวางเป็นผู้แอบดู', 'Stereotypes — women are linked to purity and nature while the man is framed as a watcher.'),
          bilingual('Normalization — การทำให้การละเมิดสิทธิดูเป็นภาพสนุกอาจลดทอนความร้ายแรง', 'Normalization — presenting a rights violation as playful may make its harm seem less serious.'),
          bilingual('Semiotics — ทุ่งหญ้า กล้อง และการกลายเป็นวัวส่งสารเรื่องการเก็บเกี่ยว การมอง และการบริโภค', 'Semiotics — the field, camera, and cow transformation carry meanings of harvest, looking, and consumption.'),
          bilingual('Commodification — ร่างกายผู้หญิงถูกใช้เป็นอุปลักษณ์เพิ่มมูลค่าให้สินค้า', 'Commodification — women’s bodies become a metaphor used to add value to a product.'),
          bilingual('บริบทวัฒนธรรมและความรับผิดชอบ — รายงานอ่านความไม่ไวต่อประเด็น Molka เป็นความเสี่ยงต่อความเชื่อมั่น', 'Cultural context and responsibility — the report treats insensitivity to Molka as a risk to trust.'),
        ],
      },
      {
        heading: bilingual('เสียงตอบรับและคำชี้แจง', 'Reactions and response'),
        bullets: [
          bilingual('รายงานรวบรวมเสียงไม่สบายใจต่อภาพผู้หญิงกลายเป็นวัว การแอบถ่าย และการไม่ไวต่อปัญหา Molka; มีการกล่าวถึงการคว่ำบาตร', 'The report collects discomfort over women-as-cows, covert filming, and Molka insensitivity, including calls for a boycott.'),
          bilingual('อีกมุมหนึ่งในรายงานไม่ต้องการเหมารวมผู้ชายทุกคนเป็นผู้กระทำผิด; ปฏิกิริยาที่รวบรวมไม่ได้เป็นเสียงเดียวทั้งหมด', 'Another reported view objects to generalizing all men as offenders; the collected reactions are not unanimous.'),
          bilingual('เอกสารระบุว่าแบรนด์ลบคลิปและขอโทษ พร้อมชี้แจงว่าเจตนาคือสื่อธรรมชาติสะอาด ไม่ใช่ดูถูกผู้หญิง; ส่วนนี้เป็นข้อมูลตามรายงาน ไม่ใช่การตรวจเหตุการณ์ภายนอกซ้ำ', 'The document says the brand removed the ad and apologized, explaining an intended clean-nature message rather than contempt for women; this is the report’s account, not an independent event check.'),
        ],
      },
      {
        heading: bilingual('มุมผู้รับสารและบทเรียน', 'Receiver reflection and lesson'),
        bullets: [
          bilingual('ผู้เขียนรายงานรู้สึกผิดหวังที่โฆษณาไม่คำนึงสิทธิและบริบททางเพศ/วัฒนธรรม', 'The report writer expresses disappointment over the lack of attention to rights and gender/cultural context.'),
          bilingual('รายงานเสนอว่าคำขอโทษอย่างเดียวไม่พอ ต้องทบทวนขั้นตอนอนุมัติสื่อให้คำนึงถึงเพศและผลต่อผู้ชม', 'The report argues that an apology alone is insufficient and recommends gender-aware review in the advertising process.'),
        ],
      },
      {
        heading: bilingual('ข้อเสนอสร้างสรรค์ใหม่', 'Alternative creative proposal'),
        bullets: [
          bilingual('Big Idea: “เพราะความบริสุทธิ์คือความรับผิดชอบที่ยิ่งใหญ่” เปลี่ยนสารจากอุปลักษณ์เพศไปสู่ความโปร่งใสของการผลิต', 'Big idea: “Purity is a great responsibility,” shifting from a gendered metaphor to transparent production.'),
          bilingual('ภาพโฆษณาที่เสนอเริ่มจากยอมรับความผิดพลาด แล้วพาไปดูคนทำงานฟาร์ม การดูแลวัว การตรวจคุณภาพ และเส้นทางผลิตภัณฑ์', 'The proposed ad acknowledges a past mistake, then shows farm workers, animal care, quality checks, and the product journey.'),
          bilingual('สไลด์ต่อยอดเรื่องบริจาคนม ลดพลาสติก/ใช้บรรจุภัณฑ์รีไซเคิล และเปิดเผยข้อมูลกระบวนการผลิต', 'The deck also proposes milk donation, less plastic or recyclable packaging, and published production information.'),
          bilingual('ช่องทางที่เสนอคือ TikTok, Instagram, X และ YouTube พร้อม #SeoulMilkNewStart; ทั้งหมดเป็นข้อเสนอของนักศึกษา ไม่ใช่สิ่งที่แบรนด์ทำแล้ว', 'Suggested channels are TikTok, Instagram, X, and YouTube with #SeoulMilkNewStart; these are student proposals, not verified brand actions.'),
        ],
      },
    ],
  },
  'tee-noi-vs-lucky-suki': {
    source: bilingual('PR037_Final หน้า PDF 1–28; หน้า PDF 29 ซึ่งมีรายชื่อและรหัสนักศึกษาไม่แสดงบนเว็บ', 'PR037_Final PDF pp. 1–28; p. 29 with the group roster and student IDs is not shown'),
    sections: [
      {
        heading: bilingual('โจทย์และวิธีอ่านข้อมูล', 'Question and data approach'),
        bullets: [
          bilingual('เปรียบเทียบบทสนทนาออนไลน์ของสุกี้ตี๋น้อยกับลัคกี้สุกี้ เพื่อหาช่องว่างที่แบรนด์นำไปพัฒนาการสื่อสารได้', 'The deck compares online conversations about Suki Teenoi and Lucky Suki to find communication opportunities.'),
          bilingual('สไลด์กำหนดช่วงข้อมูล 1–30 เมษายน 2569 และจัดคำค้น/คำที่ไม่นับก่อนดูช่องทางและ sentiment', 'The slides set a 1–30 April 2026 window and define included and excluded keywords before examining channels and sentiment.'),
          bilingual('ตัวเลขและความเห็นด้านล่างเป็นการรายงานของสไลด์ ไม่ใช่การตรวจข้อมูลแบรนด์ซ้ำอย่างอิสระ', 'The figures and interpretations below come from the deck and were not independently rechecked against brand data.'),
        ],
      },
      {
        heading: bilingual('สิ่งที่เปรียบเทียบได้', 'Comparative findings'),
        bullets: [
          nested('Facebook เป็นช่องทางหลักที่สไลด์นับได้ของทั้งสองแบรนด์', 'Facebook is the largest counted channel for both brands in the deck.', [
            bilingual('ตี๋น้อย 2,399 ข้อความ (77.3%); ลัคกี้ 102 ข้อความ (44.9%) ตามหน้าสรุปรายช่องทาง', 'The channel slides report 2,399 Teenoi mentions (77.3%) and 102 Lucky mentions (44.9%).'),
            bilingual('Instagram, TikTok และ X มีสัดส่วนรองลงมา; จำนวนรวมบางหน้าของตี๋น้อยไม่ตรงกับภาพแดชบอร์ด จึงไม่สรุปยอดรวมใหม่', 'Instagram, TikTok, and X follow; some Teenoi channel counts do not reconcile with the dashboard, so no revised total is calculated.'),
          ]),
          bilingual('sentiment ในสไลด์: ตี๋น้อยบวก 45.28% / กลาง 46.09% / ลบ 8.63%; ลัคกี้บวก 51.54% / กลาง 45.82% / ลบ 2.64%', 'Deck-reported sentiment: Teenoi 45.28% positive / 46.09% neutral / 8.63% negative; Lucky 51.54% positive / 45.82% neutral / 2.64% negative.'),
          bilingual('สไลด์ตีความว่าคนพูดถึงโปรโมชัน ของแถม สมาชิก น้ำซุป และบริการของตี๋น้อย ขณะเดียวกันมีคำวิจารณ์เรื่องความสะอาด การดูแลลูกค้า คิว และระบบ', 'The deck interprets Teenoi discussion around promotions, extras, membership, broth, and service, alongside complaints about cleanliness, customer care, queues, and systems.'),
        ],
      },
      {
        heading: bilingual('โอกาสของลัคกี้สุกี้', 'Lucky Suki opportunity'),
        bullets: [
          bilingual('ทีมเลือกเสียงกลางที่ยังมีมากของลัคกี้เป็นโอกาสสร้างความสนใจและเปลี่ยนเป็นความรู้สึกเชิงบวก โดยให้ Facebook เป็นพื้นที่สร้างบทสนทนาหลัก', 'The team treats Lucky’s large neutral share as an opening to build interest and positive feeling, with Facebook as the main conversation space.'),
          bilingual('กลุ่มเป้าหมายที่เสนอ: ผู้หญิง Gen Z/วัยเริ่มทำงาน 18–30 ปีเป็นหลัก และนักศึกษา/คนทำงานช่วงต้น 20–35 ปีเป็นกลุ่มรอง', 'Proposed audiences: primarily Gen Z and early-career women aged 18–30, with students and early-career people aged 20–35 as a secondary group.'),
          bilingual('เป้าหมายในแผนคือปริมาณข้อความที่กล่าวถึงแบรนด์บน Facebook จาก 102 เป็น 200+ ภายใน 3 เดือน, sentiment บวกมากกว่า 65%, ลบน้อยกว่า 1%; เป็นเป้าหมาย ไม่ใช่ผลจริง', 'The plan targets Facebook mention volume rising from 102 to 200+ within three months, positive sentiment above 65%, and negative sentiment below 1%; these are targets, not outcomes.'),
        ],
      },
      {
        heading: bilingual('กิจกรรมและลำดับแคมเปญที่เสนอ', 'Proposed activities and rollout'),
        bullets: [
          bilingual('DIY Soup Bar: จ่ายเพิ่ม 29 บาทเพื่อปรุงน้ำซุปเองภายในเวลา 2 ชั่วโมงตามกติกาที่ทีมเสนอ', 'DIY Soup Bar: a proposed ฿29 add-on for custom broth during a two-hour dining period.'),
          bilingual('Lucky Lover Table: โต๊ะ/ประสบการณ์สำหรับคนกินคนเดียวเพื่อลดความเก้อเขิน', 'Lucky Lover Table: a table and experience designed to make solo dining feel comfortable.'),
          bilingual('Lucky Coupon Challenge: ชวนโพสต์วิดีโอสาธารณะเพื่อสุ่มรับคูปองและกระตุ้นคอนเทนต์จากผู้ใช้', 'Lucky Coupon Challenge: invite public user videos for a chance at a coupon and more user-generated content.'),
          bilingual('แผนสามสัปดาห์ไล่จาก awareness → engagement → conversion ด้วย TikTok/Facebook Reels, hook สั้น และการตอบคอมเมนต์', 'The proposed three-week sequence moves from awareness → engagement → conversion using TikTok/Facebook Reels, short hooks, and comment replies.'),
          bilingual('สไลด์ 28 หน้าที่เผยแพร่ได้อยู่ในหน้ารายละเอียดนี้เพื่อดูภาพกราฟและงานออกแบบนำเสนอฉบับเต็ม', 'All 28 shareable slides are available in this detail view for the source charts and presentation design.'),
        ],
      },
    ],
  },
  katsumidori: {
    source: bilingual('PR037_ปาทังกี้_katsumidori หน้า PDF 1 (ภาพปก) และ 2–9; หน้า PDF 10 ซึ่งมีรายชื่อและรหัสนักศึกษาไม่แสดงบนเว็บ', 'Katsumidori PR deck PDF p. 1 (cover) and pp. 2–9; p. 10 with the group roster and student IDs is not shown'),
    sections: [
      {
        heading: bilingual('ปัญหาและ insight', 'Problem and insight'),
        bullets: [
          bilingual('สไลด์เก็บคำเกี่ยวกับแบรนด์ คิว และเมนู “พุดดิ้งแมว” แล้วชี้เสียงบ่นเรื่องจองคิวแล้วรอหรือพบว่าคิวเต็ม', 'The deck tracks brand, queue, and “cat pudding” terms, then highlights complaints about waiting despite booking or finding slots full.'),
          bilingual('มีเสียงเล่าว่ารอเกือบ 2–3 ชั่วโมง แต่เอกสารไม่ได้วัดเวลาเฉลี่ย จึงไม่ใช้ตัวเลขนี้แทนลูกค้าทั้งหมด', 'Some comments mention waits approaching 2–3 hours, but the deck does not measure an average, so this is not treated as typical for all customers.'),
          bilingual('insight ของทีมคือ “คนไม่ได้กลัวการรอ แต่กลัวการรอที่สูญเปล่า” และเห็นช่องว่างระหว่างกระแสรีวิวกับประสบการณ์คิวจริง', 'The team’s insight is “people do not fear waiting; they fear wasted waiting,” with a gap between viral reviews and the queue experience.'),
        ],
      },
      {
        heading: bilingual('Big Idea และข้อเสนอ', 'Big idea and offer'),
        bullets: [
          bilingual('“Every Minute Matters” เปลี่ยนบัตรคิวให้เป็นสิทธิ์รับคูปอง เพื่อให้เวลารอกลายเป็นส่วนหนึ่งของประสบการณ์', '“Every Minute Matters” turns the queue ticket into coupon eligibility so waiting adds value to the experience.'),
          nested('ขั้นส่วนลดที่เสนอ: ใช้จ่าย 500 บาทรับ 5%; 1,000 บาทรับ 12%', 'Proposed discount tiers: spend ฿500 for 5%; ฿1,000 for 12%.', [
            bilingual('แผนจำกัดหนึ่งใบเสร็จต่อหนึ่งสิทธิ์ ใช้กับเมนู After You × Katsumidori ที่ร่วมรายการ และไม่รวมใบเสร็จ', 'The plan limits use to one receipt per right and the participating After You × Katsumidori menu, with no receipt combining.'),
          ]),
          bilingual('การร่วมมือกับ After You และการลุ้นรางวัลเป็นแนวคิดในสไลด์; กลไกรางวัลไม่ได้ระบุครบ จึงไม่เติมกติกาเอง', 'An After You collaboration and prize draw are deck proposals; the prize mechanics are incomplete, so no extra rules are inferred.'),
        ],
      },
      {
        heading: bilingual('กลุ่มคนที่แผนอยากสื่อสาร', 'Proposed audience profiles'),
        bullets: [
          bilingual('Trend Reviewer: persona อายุ 18–24 ปี เน้นคนดูรีวิว/แชร์ประสบการณ์; สไลด์ระบุผู้หญิง 88.97% และ mid-tier influencer 37.9%', 'Trend Reviewer: an age-18–24 persona focused on reviews and sharing; the deck reports 88.97% women and 37.9% mid-tier influencers.'),
          bilingual('Lifestyle Spender: persona อายุ 25–34 ปี ชอบไลฟ์สไตล์และการไปห้าง; สไลด์ระบุผู้หญิง 80.15% และการไปห้าง 17.8%', 'Lifestyle Spender: an age-25–34 lifestyle and mall-going persona; the deck reports 80.15% women and 17.8% mall interest.'),
          bilingual('Organic Reviewer: อายุ 22–28 ปี รายได้ 15,000–25,000 บาท ใช้ X/Instagram และเล่าประสบการณ์เองตามภาพ persona ในสไลด์', 'Organic Reviewer: an age-22–28 persona earning ฿15,000–25,000, sharing firsthand experiences on X/Instagram as described in the deck.'),
        ],
      },
      {
        heading: bilingual('ขอบเขตของตัวเลขและผลงาน', 'Data and outcome boundary'),
        bullets: [
          bilingual('สไลด์มีสัดส่วน persona กับเงื่อนไขข้อเสนอ แต่ไม่ให้ขนาดตัวอย่าง ช่วงเก็บข้อมูล หรือวิธีคำนวณที่พอใช้ทำกราฟแนวโน้ม', 'The slides include persona percentages and proposed offer terms, but no sample size, data window, or method sufficient for a trend chart.'),
          bilingual('บอร์ดข้อมูลในหน้านี้จึงแยก “ตัวเลขตามสไลด์” ออกจาก “กลไกแคมเปญที่เสนอ”; ไม่ใช่แดชบอร์ดผลแคมเปญจริง', 'The board in this detail view separates “deck-reported figures” from “proposed campaign mechanics”; it is not an outcome dashboard.'),
          bilingual('สไลด์ต้นฉบับที่เผยแพร่ได้ 8 หน้าอยู่ถัดลงไปสำหรับอ่าน persona และแนวคิดออกแบบโดยตรง', 'Eight shareable source slides follow for direct review of the personas and design idea.'),
        ],
      },
    ],
  },
  'mv-lam-pam-symbolism': {
    source: bilingual('วิเคราะห์สัญญะใน MV หน้า PDF 3–19; ไม่แสดงรายชื่อกลุ่มจากหน้า PDF 1', 'Lam Pam analysis PDF pp. 3–19; the group roster from p. 1 is not shown'),
    sections: [
      {
        heading: bilingual('สารหลักและตัวละคร', 'Key message and character reading'),
        bullets: [
          bilingual('รายงานอ่านเรื่องเป็นความรักที่ฝ่ายหนึ่งจริงจัง แต่อีกฝ่ายยังผูกพันกับคนรักเก่า', 'The report reads the story as a sincere love for someone still attached to a former partner.'),
          bilingual('บทวิเคราะห์วาง BOWKYLION เป็นฝ่ายรักจริงและ Jeff เป็นฝ่ายยังมีอดีตค้างอยู่; นี่คือการตีความตัวละครของรายงาน', 'The analysis casts BOWKYLION as the sincere lover and Jeff as the one still tied to the past; this is the report’s character reading.'),
          bilingual('ผู้เล่าเลือกไม่ถาม ไม่รบกวน และไม่รั้ง แม้ต้องเจ็บ; คณะละครสัตว์ทำให้ความรู้สึกส่วนตัวกลายเป็นการแสดงต่อหน้าคนอื่น', 'The speaker chooses not to question, intrude, or hold on despite the hurt; the circus turns private feeling into a public performance.'),
        ],
      },
      {
        heading: bilingual('สัญญะในภาพ', 'Visual symbols'),
        bullets: [
          bilingual('อุปกรณ์วงกลมในละครสัตว์แทนความสัมพันธ์ที่วนกลับจุดเดิม', 'Circular circus props suggest a relationship returning to the same point.'),
          bilingual('การแสดงและการแกล้งไม่รู้ทำให้ความเจ็บปวดถูกซ่อนไว้หลังบทบาท', 'Performance and feigned ignorance conceal pain behind a role.'),
          bilingual('ตัวตลกกับหน้ากากซ่อนความเศร้าใต้รอยยิ้ม', 'Clowns and masks hide sadness beneath a smile.'),
          bilingual('สีแดงมีทั้งรัก ความโกรธ และเส้นแบ่งระหว่างสิ่งที่ปิดบังกับสิ่งที่เปิดเผย', 'Red carries love, anger, and the border between hidden and revealed feelings.'),
          bilingual('สปอตไลต์คือสายตาที่จ้องมอง; แสงตัดเงาแทนความจริงที่ขัดกับภาพลวง', 'The spotlight is public scrutiny; sharp light and shadow contrast truth with illusion.'),
          bilingual('เชือกหุ่นเชิดแทนการควบคุมและความไม่เท่าเทียม; การตัดเชือกคือการปล่อยตัวเอง', 'Puppet strings stand for control and imbalance; cutting them signals release.'),
          bilingual('ดอกกุหลาบจากผู้ชมแทนการยอมรับ แต่กุหลาบที่คนรักเก่าไม่โยนคือรักที่ไม่ส่งกลับมา', 'Audience roses suggest approval, while the rose withheld by the ex represents love not returned.'),
          bilingual('การเดินลงไปหยิบกุหลาบเองสื่อการต้องร้องขอความรักที่อีกฝ่ายไม่มอบให้โดยสมัครใจ', 'Stepping down to take a rose evokes having to ask for love that is not freely offered.'),
        ],
      },
      {
        heading: bilingual('การเล่าเรื่องและอุดมการณ์', 'Narrative and ideology'),
        bullets: [
          bilingual('โครงเรื่องค่อยเปิดจากการเล่นบทและภาพฝัน ไปสู่การยอมรับว่าอีกฝ่ายไม่ได้รักตอบอย่างที่หวัง', 'The narrative moves from playing a role and sustaining an illusion toward accepting that the love is not returned as hoped.'),
          bilingual('การตัดเชือกหุ่นเชิดถูกอ่านเป็นการเลิกควบคุม ปล่อยอีกฝ่ายให้เลือก และปล่อยตัวเองออกจากความสัมพันธ์ที่ไม่เท่ากัน', 'Cutting the puppet strings is read as ending control, allowing the other person to choose, and freeing oneself from an unequal bond.'),
          bilingual('อุดมการณ์ที่รายงานสรุป: ความรักควรอยู่กับความจริง สิทธิ และอิสระ มากกว่าการรอคำตอบจากภาพลวง', 'The report’s ideological reading favours truth, rights, and freedom in love over waiting within an illusion.'),
        ],
      },
      {
        heading: bilingual('มุมมองวิพากษ์ 4 ด้าน', 'Four contextual readings'),
        bullets: [
          bilingual('สังคม — ภาพการแสดงที่สมบูรณ์แบบปิดบังความเปราะบางและแรงกดดัน', 'Social — polished performance hides vulnerability and pressure.'),
          bilingual('วัฒนธรรม — ละครสัตว์สีสันจัดจ้านใช้ศิลปะการแสดงเล่าความอกหักแบบร่วมสมัย', 'Cultural — vivid circus performance expresses heartbreak through contemporary visual art.'),
          bilingual('การเมือง — ภาพการแสดงชวนถามว่าใครได้ประโยชน์จากฉากหน้าและใครเป็นผู้เจ็บ', 'Political — the staged image asks who benefits from a public performance and who bears its pain.'),
          bilingual('เศรษฐกิจ — งานผลิตที่มีรายละเอียดช่วยเพิ่มคุณค่าให้เพลง แต่สารอาจถูกมองเป็นเพลงเศร้าซ้ำเดิมหากผู้ชมไม่อ่านชั้นสัญญะ', 'Economic — detailed production adds value to the song, but its layered message can be missed if read as only another sad song.'),
        ],
      },
    ],
  },
  'jane-interview': {
    source: bilingual('Report เรื่องเจน หน้า PDF 1–8; สรุปเฉพาะประเด็นที่เหมาะกับการเผยแพร่', 'Jane interview report PDF pp. 1–8; summarized at a public-appropriate level'),
    sections: [
      {
        heading: bilingual('เส้นเรื่องของบทสัมภาษณ์', 'The profile’s story arc'),
        bullets: [
          bilingual('งานเขียนเริ่มจากความทรงจำวัยเด็กกับครอบครัว แล้วติดตามการตัดสินใจเรียนมหาวิทยาลัยและย้ายมาใช้ชีวิตในกรุงเทพฯ', 'The profile begins with childhood family memories, then follows a university decision and a move to Bangkok.'),
          bilingual('ใช้เส้นเรื่อง “การเติบโตและรับผิดชอบมากขึ้น” เชื่อมเหตุการณ์ แทนการถอดคำถาม–คำตอบเรียงตามลำดับ', 'Growing responsibility ties the episodes together instead of presenting a question-and-answer transcript.'),
          bilingual('รายงานกล่าวถึงการสูญเสียสัตว์เลี้ยงในฐานะจุดเปลี่ยนของมุมมองชีวิต โดยหน้า Portfolio สรุปไว้ระดับภาพรวม', 'The report treats the loss of a pet as a change in outlook; this portfolio keeps that episode at a high level.'),
        ],
      },
      {
        heading: bilingual('หน้าที่ต่อครอบครัวกับเป้าหมายตนเอง', 'Family duty and personal goals'),
        bullets: [
          bilingual('เจนต้องชั่งระหว่างความคาดหวังของบ้าน งานครอบครัว และเส้นทางที่ตนเองสนใจ', 'Jane weighs family expectations and work against a path of her own interest.'),
          bilingual('ความฝันโยงกับงานสร้างสรรค์ การแสดง ดนตรี และการได้อยู่ในชุมชนที่ทำงานด้านนี้', 'Her aspirations connect to creative work, performance, music, and a community in those fields.'),
          bilingual('บทความแสดงความรับผิดชอบกับความฝันอยู่พร้อมกัน ไม่ตีความว่าอย่างใดอย่างหนึ่งถูกหรือผิด', 'The profile lets duty and aspiration coexist without declaring either one right or wrong.'),
        ],
      },
      {
        heading: bilingual('บทสรุปของเรื่อง', 'Closing reflection'),
        bullets: [
          bilingual('เรื่องปิดด้วยการให้เวลากับคนที่รัก และค่อย ๆ เดินตามความฝันด้วยความอดทนและความพยายาม', 'The closing values time with loved ones and patient, persistent movement toward a dream.'),
          bilingual('เอกสารไม่ได้แยกบทบาทรายบุคคลชัดเจน จึงแสดงเฉพาะสาระของงานเขียนโดยไม่อ้างเครดิตเพิ่ม', 'The report does not clearly separate individual production roles, so the page presents the writing without adding a personal credit.'),
        ],
      },
    ],
  },
};

export const slideDecks = {
  'tee-noi-vs-lucky-suki': {
    heading: bilingual('สไลด์นำเสนอ · ตี๋น้อย × ลัคกี้สุกี้', 'Presentation slides · Teenoi × Lucky Suki'),
    pages: Array.from({ length: 28 }, (_, index) => ({
      page: index + 1,
      src: `assets/slides/teenoi-lucky/slide-${String(index + 1).padStart(2, '0')}.jpg`,
    })),
  },
  katsumidori: {
    heading: bilingual('สไลด์ต้นฉบับ · Katsumidori', 'Original slides · Katsumidori'),
    pages: Array.from({ length: 8 }, (_, index) => ({
      page: index + 2,
      src: `assets/slides/katsumidori/slide-${String(index + 2).padStart(2, '0')}.jpg`,
    })),
  },
};

export const katsumidoriBoard = {
  title: bilingual('ข้อมูลจากสไลด์ Katsumidori', 'Katsumidori deck data'),
  note: bilingual(
    'ตัวเลขด้านล่างเป็นโปรไฟล์ persona และเงื่อนไขแคมเปญที่เสนอในสไลด์ ไม่ใช่ผลลัพธ์หลังแคมเปญ สไลด์ไม่ระบุขนาดตัวอย่าง ช่วงเวลาเก็บข้อมูล หรือวิธีคำนวณเพียงพอสำหรับกราฟแนวโน้ม',
    'These are deck-reported persona profiles and proposed campaign rules, not campaign outcomes. The slides do not provide sample size, collection period, or methods sufficient for a trend chart.'
  ),
  painPoint: bilingual(
    'ตัวอย่างความคิดเห็นในสไลด์กล่าวถึงการรอเกือบ 2–3 ชั่วโมง (หน้า PDF 3) ตัวเลขนี้เป็นคำเล่ารายกรณี ไม่ใช่เวลารอเฉลี่ยที่วัดได้',
    'A quoted comment in the deck mentions a wait of nearly 2–3 hours (PDF p. 3). This is an anecdote, not a measured average waiting time.'
  ),
  personas: [
    {
      name: bilingual('The Trend Reviewer', 'The Trend Reviewer'),
      age: bilingual('18–24 ปี', 'Ages 18–24'),
      sourcePage: 7,
      stats: [
        { label: bilingual('ผู้หญิง', 'Women'), value: '88.97%' },
        { label: bilingual('Mid-tier influencer', 'Mid-tier influencers'), value: '37.9%' },
        { label: bilingual('Medium performance', 'Medium performance'), value: '73.5%' },
      ],
    },
    {
      name: bilingual('The Lifestyle Spender', 'The Lifestyle Spender'),
      age: bilingual('25–34 ปี', 'Ages 25–34'),
      sourcePage: 8,
      stats: [
        { label: bilingual('ผู้หญิง', 'Women'), value: '80.15%' },
        { label: bilingual('สนใจไลฟ์สไตล์ห้าง', 'Department-store lifestyle'), value: '17.8%' },
        { label: bilingual('Micro-influencer', 'Micro-influencers'), value: '24.2%' },
        { label: bilingual('Medium performance', 'Medium performance'), value: '73.5%' },
      ],
    },
    {
      name: bilingual('The Organic Reviewer', 'The Organic Reviewer'),
      age: bilingual('22–28 ปี', 'Ages 22–28'),
      sourcePage: 9,
      stats: [
        { label: bilingual('รายได้ใน persona', 'Persona income'), value: '฿15k–25k' },
        { label: bilingual('ช่องทางที่ระบุ', 'Named platforms'), value: 'X / Instagram' },
      ],
    },
  ],
  offers: [
    { spend: 500, discount: 5 },
    { spend: 1000, discount: 12 },
  ],
};
