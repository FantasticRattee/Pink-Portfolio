const bilingual = (th, en) => ({ th, en });
const nested = (th, en, children) => ({ th, en, children });

export const expandedDetails = {
  kafak: {
    source: bilingual('รายละเอียดผลงาน หน้า PDF 1, กาฝาก proposal หน้า PDF 2–26', 'Portfolio overview PDF p. 1, Kafak proposal PDF pp. 2–26'),
    sections: [
      {
        heading: bilingual('Concept', 'Concept'),
        bullets: [
          nested(
            'เรื่องย่อ: หมู่บ้านยุค 1980s มีหญิงปริศนาหายตัว ผู้คนลือว่าเชื้อบางอย่างทำให้รูปลักษณ์และพฤติกรรมเปลี่ยนไป',
            'Story: A mysterious woman disappears from a 1980s village, while rumours blame an unknown infection for changes in people’s appearance and behaviour.',
            [
              bilingual('กานต์สินีพบหญิงลึกลับ แล้วเรื่องค่อยชี้ว่าเบื้องหลังอาจเป็นสิ่งเหนือธรรมชาติ ไม่ใช่โรคระบาดทั่วไป', 'Kantsinee encounters a strange woman. The story hints at a supernatural cause rather than an ordinary epidemic.'),
            ]
          ),
          nested('แนวคิด “THAI ANALOG HORROR WITH OLD BELIEFS IN THE 1980S” ผสมความเชื่อเก่ากับความสยองขวัญแบบภาพและเสียงยุคแอนะล็อก', '“THAI ANALOG HORROR WITH OLD BELIEFS IN THE 1980S” blends period beliefs with analogue horror.', [
            bilingual('หยิบความเข้าใจผิดในยุค 1980s ที่กลัวว่า HIV ติดต่อผ่านการสัมผัสหรือการหายใจร่วมกันมาเป็นบริบทของการตีตรา ความเชื่อนี้ผิด ไม่ใช่ข้อเท็จจริงทางการแพทย์', 'The story uses the historical, false belief that HIV spreads through touch or shared air to portray fear and stigma. That belief is medically incorrect.'),
            bilingual('อีกแรงบันดาลใจคือ “กาเหว่าที่บางเพลง” ของ ม.ร.ว. คึกฤทธิ์ ปราโมช ซึ่งเล่าหมู่บ้านที่ถูกอำนาจนอกโลกครอบงำและหญิงในหมู่บ้านตั้งครรภ์พร้อมกันอย่างอธิบายไม่ได้ ทีมจึงนำความคิดเรื่องสิ่งแปลกปลอมแทรกซึมมาตีความใหม่', 'Another inspiration is M.R. Kukrit Pramoj’s “กาเหว่าที่บางเพลง,” in which an extraterrestrial force affects a village and its women become pregnant inexplicably. The team reinterprets the idea of an intruding presence.'),
          ]),
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
              bilingual('ฝ่ายศิลป์ประสานการออกแบบฉากและพร็อปกับทีม Costume & Makeup พร้อมคุมโทนสีของฉากและของใช้ให้ไปในทิศทางเดียวกัน', 'Art direction coordinates sets and props with Costume & Makeup, keeping the colours of spaces and objects consistent.'),
              bilingual('แป้งโยคี ครีมกวนอิม และแป้งเภสัชเป็นของใช้สำหรับดูแลผดผื่นในยุคนั้น ส่วนลิปสติกสีเขียว หวี ตลับแป้ง และแจกันบอกชีวิตประจำวันของตัวละคร', 'Yoki powder, Guan Im cream, and Phesat powder evoke period skin care. Green lipstick, a comb, compact, and vase place the character in daily life.'),
              bilingual('โทรทัศน์ วิทยุ เทปเพลง และโปสเตอร์หนังสื่อวิธีดูละคร ฟังข่าว และสะสมสิ่งที่ชอบในยุค 80s ป้ายคนหายใช้ฟอนต์ ข้อมูล ภาพถ่าย และสีให้เข้าช่วงเวลา', 'A television, radio, cassette tapes, and film posters evoke period viewing and listening. The missing-person poster uses era-specific type, details, photographs, and colour.'),
            ]
          ),
          nested(
            'เครื่องแต่งกายใช้สีและทรงผมแยกบุคลิกของตัวละคร',
            'Costume colours and hairstyles distinguish character ideas.',
            [
              bilingual('กานต์สินีสวมเสื้อเหลืองเพื่อบุคลิกร่าเริง กางเกงน้ำตาลและต่างหูสี่เหลี่ยมสื่อธาตุดินตามแรงบันดาลใจ Prometheus แต่งหน้าธรรมชาติและถักเปียบนผมตรงให้ดูเรียบร้อย', 'Kantsinee wears yellow for her bright personality. Brown trousers and square earrings refer to earth and the Prometheus motif. Natural makeup and a braid over straight hair complete her look.'),
              bilingual('หญิงลึกลับได้แรงบันดาลใจจาก Prometheus ในฐานะเทพเจ้าเล่ห์ผู้ปั้นมนุษย์จากดิน และภาพวาดโบราณที่ใช้ประกอบแนวคิด Ancient Astronaut ชุดขาวสื่อความบริสุทธิ์หรือความเป็นมนุษย์ต่างดาว สีแดงสื่อพลัง ส่วนเมกอัพระยะท้ายใช้โหนกแก้มสูง หน้าตอบ และหนอนเพื่อบอกการแปรสภาพ', 'The mysterious woman draws on Prometheus as a trickster and creator of humans from clay, alongside ancient paintings used to illustrate the Ancient Astronaut idea. White suggests purity or an alien presence, red suggests power, and the final makeup uses high cheekbones, a hollow face, and worms to signal transformation.'),
              bilingual('ทหารอ้างอิงชุดอเมริกันช่วงสงครามเย็นที่โคราช และเรื่อง Romulus กับ Remus เพื่อเชื่อมความเจริญกับความรุนแรง ส่วนนักข่าวใส่สูทน้ำเงินเข้มและเปิดหน้าผากให้ดูน่าเชื่อถือ', 'The soldier references Cold War American uniforms in Korat and the Romulus and Remus story to connect progress with violence. The reporter wears a navy suit and swept-back hair for credibility.'),
              bilingual('ชาวบ้านคนแรกใช้เสื้อชมพูลายทางเสริมไหล่เพื่อสื่อความมั่นใจและกระแสผลักดันสิทธิเท่าเทียมของผู้หญิง จับคู่เอี๊ยมยีนส์ เมกอัพชมพู และผมลอนมาม่าแบบยุค 80s', 'The first villager’s pink striped top has padded shoulders, suggesting women’s confidence and the push for equal rights. Denim overalls, pink makeup, and crimped hair complete the 1980s look.'),
              bilingual('ชาวบ้านคนที่สองใช้เสื้อดอกกุหลาบสีส้มกับยีนส์ทรงสบาย แต่งตาฟ้า ปากแดงแบบพังก์ และผมลอนใหญ่ คนที่สามใช้ชุดม่วงลายดอก ยีนส์เอวสูง ตาและแก้มสีชมพู ปากแดง และผมตรง', 'The second villager pairs an orange rose-print shirt with relaxed jeans, blue eyeshadow, punk-red lips, and large curls. The third wears purple florals, high-waisted jeans, pink eyes and cheeks, red lips, and straight hair.'),
            ]
          ),
          bilingual('เมกอัพโรคสมมติวางเป็นสามระยะ เริ่มจากรอยผื่นเล็กน้อยหลังหูและแขน ขยายไปทั้งสองแขนกับคอ แล้วปรากฏทั่วหน้าและตัว นี่เป็นภาษาภาพในหนัง ไม่ใช่คำอธิบายอาการของ HIV จริง', 'The fictional illness makeup has three stages: small marks behind the ears and on the arms, wider marks on both arms and neck, and finally marks across face and body. This is film imagery, not a description of real HIV symptoms.'),
        ],
      },
      {
        heading: bilingual('ภาษากล้องและดนตรี', 'Camera and music'),
        bullets: [
          nested(
            'ภาษากล้อง: เส้นนำสายตา กรอบภาพ การเคลื่อนไหว เงาสะท้อน และจุดตัดเก้าช่อง',
            'Camera language: Leading lines, framing, movement, reflections, and nine-point composition.',
            [
              bilingual('สลับภาพไกลมาก ภาพไกล ภาพกลาง และภาพใกล้ รวมถึงมุมต่ำและมุมสูง', 'The examples move among extreme-long, long, medium, and close shots, with low and high angles.'),
            ]
          ),
          nested(
            'ดนตรีแยกตามช่วงเรื่อง',
            'Music accompanies different phases of the story.',
            [
              bilingual('กลอนกาเหว่าที่อัดเสียงใหม่เปรียบการฝากไข่กับสิ่งที่เติบโตอยู่ในร่างคน', 'A newly recorded cuckoo verse compares nesting in another bird’s home with something growing inside a human host.'),
              bilingual('“ห้องหุ่น” ในเฟส 1–2 ให้ความหลอนคล้ายฝันและภาพคนที่ถูกควบคุม', '“ห้องหุ่น” in phases 1–2 evokes dreamlike horror and a controlled person.'),
              bilingual('“คู่กรรม” ในเฟส 3 สื่อความผูกพันระหว่างตัวละครกับปรสิตที่แยกไม่ออก ส่วน “ใจรัก” ในช่วงเอเลี่ยนโยงคำสัญญาเข้ากับภาพนกที่มารับตัว', '“คู่กรรม” in phase 3 suggests the inseparable bond between character and parasite. “ใจรัก” links a promise with bird imagery in the alien sequence.'),
            ]
          ),
        ],
      },
      {
        heading: bilingual('สัญลักษณ์ที่เล่าเรื่อง', 'Story symbols'),
        bullets: [
          bilingual('ฝ่ายศิลป์เลือกแอปเปิลเพราะภาพจำผลไม้อาบยาพิษใน Snow White จากผลสด มันค่อยมีรอยกัดและช้ำจนหนอนชอนไชและเน่า สภาพนี้สะท้อนสุขภาพกับตัวตนของกานต์สินีที่ถูกครอบงำ หนอนยังสื่อการเน่าเสีย', 'Art direction chose the apple for its poisoned-fruit association in Snow White. Fresh at first, it bruises, is bitten, and decays as worms burrow through it. Its condition mirrors Kantsinee’s gradual takeover, while the worms evoke decay.'),
          bilingual('ประกาศคนหายที่ติดทับกัน: ใบของกานต์สินีทับใบหญิงลึกลับ สื่อเหตุการณ์ซ้ำและการถูกแทนที่', 'Overlapping missing posters: Kantsinee’s notice covers the mysterious woman’s, suggesting recurrence and replacement.'),
          bilingual('กระจก: เงาสะท้อนที่ทำไม่ตรงกับตัวละครเผยตัวตนอีกคนที่เข้ามาแทรกซึม', 'Mirror: A reflection that does not match the character’s actions hints at another identity inside her.'),
          nested('วัวเป็นสัญลักษณ์ของความเมตตาที่ถูกหลอกใช้และการช่วยเหลือที่แท้จริงเป็นกับดัก', 'The cow represents kindness that is exploited and help that turns out to be a trap.', [
            bilingual('ที่มาคือนิทานวัวให้หนูที่เหนื่อยล้าขี่หลัง แต่หนูกระโดดข้ามเส้นชัยก่อนจนวัวถูกทรยศ', 'In the fable behind the design, a cow carries a tired rat, only for the rat to leap across the finish line first and betray it.'),
            bilingual('ในเรื่อง หญิงสาวเห็นแสงจากเบื้องบนและคิดว่ามีคนยื่นมือช่วยด้วยความเมตตา แต่แสงนั้นกลับล่อให้เธอไปยังสถานที่ลึกลับ', 'In the film, a woman sees a light above and mistakes it for a compassionate offer of help. It instead lures her into a mysterious place.'),
          ]),
        ],
      },
      {
        heading: bilingual('ปัญหาและอุปสรรคในการถ่ายทำ', 'Filming challenges'),
        bullets: [
          bilingual('สถานที่: หาบ้านที่ให้ความรู้สึกยุค 80s ยาก จึงใช้บ้านสมาชิกทีมและตกแต่งเพิ่ม ระหว่างถ่ายมีเสียงสัตว์กับลำโพงหมู่บ้านรบกวน', 'Location: A home with a 1980s feel was hard to find, so the team dressed a member’s house. Animals and village loudspeakers created noise during filming.'),
          bilingual('แสงและเวลา: บางฉากต้องถ่ายก่อนพระอาทิตย์ตกเพื่อใช้แสงธรรมชาติ', 'Light and time: Some scenes had to finish before sunset to use natural light.'),
          bilingual('คนและตาราง: นักแสดงมากกว่ากำลังเมกอัพ สมาชิกฝ่ายอื่นช่วยกัน และใช้ agenda กับ breakdown จัดเวลาที่แต่ละคนไม่ตรงกัน', 'Crew and schedule: Other departments supported a small makeup team, while an agenda and breakdown coordinated mismatched availability.'),
          bilingual('รายงานหลังงานระบุว่าถ่ายทำตามแผนโดยรวม มีการปรับหน้างานเล็กน้อย', 'The retrospective says filming broadly followed the plan, with small on-set adjustments.'),
          bilingual('หนังสั้นฉบับเสร็จมีให้เล่นเต็มเรื่องในหน้ารายละเอียดนี้', 'The finished short film is available to play in full in this detail view.'),
        ],
      },
    ],
  },
  'my-love-scene': {
    source: bilingual('รายละเอียดผลงาน หน้า PDF 1–2, My Love Scene proposal หน้า PDF 1–14 (ภาพปกหน้าแรกตัดข้อมูลนักศึกษาออก), คลิปผลงาน', 'Portfolio overview PDF pp. 1–2, My Love Scene proposal PDF pp. 1–14 (student details removed from the first-page cover), finished scene video'),
    sections: [
      {
        heading: bilingual('ทำไมบทประพันธ์นี้ตรงกับเพลงที่จะทำ', 'Why the source story fits the chosen song'),
        bullets: [
          bilingual('ทีมเลือกความสัมพันธ์ก้อยกับดาวจาก Hormones Season 2 เพราะบทประพันธ์เล่าความรักวัยรุ่นทั้งชายหญิง ชายชาย และหญิงหญิง โดยความสัมพันธ์ของทั้งคู่ยังอยู่ระหว่างเพื่อนกับคนรัก', 'The team chose Koi and Dao from Hormones Season 2 because its teenage stories include heterosexual, male-male, and female-female relationships. Koi and Dao are still between friendship and romance.'),
          bilingual('ดาวผิดหวังจากความรักครั้งก่อน ส่วนก้อยคอยอยู่ข้าง ๆ และปลอบเธอ ฉากนวดคอตอนอาบน้ำและฉากจูบบนเตียงทำให้ความรู้สึกที่ซ่อนอยู่ชัดขึ้น', 'Dao is hurt by a former relationship, while Koi stays beside her. A neck massage while bathing and a kiss on the bed make their unspoken feelings clearer.'),
          bilingual('เพลง “กระแซะ” สื่อการค่อย ๆ ขยับเข้าหากัน การสัมผัสจึงเริ่มอย่างลังเลเพราะกลัวเสียความเป็นเพื่อน แล้วค่อยชัดขึ้นเมื่อทั้งคู่รับรู้ว่ารู้สึกตรงกัน', 'The song “กระแซะ” evokes moving closer little by little. Their touch begins hesitantly for fear of losing the friendship, then grows more certain when the feeling is shared.'),
          bilingual('งานยังอ้างอิง MV “ห้องเธอ” และ “คงต้องบอกให้รู้” เพื่อออกแบบ Girl Love ใหม่ โดยใช้คอนเซปต์ “รสชาติของความรัก” ธีม Friend Zone และอารมณ์โรแมนติก เย้ายวน อ่อนโยน แต่ยังคลุมเครือ', 'The work also draws on “ห้องเธอ” and “คงต้องบอกให้รู้” to develop its Girl Love scene around “the taste of love,” a friend-zone theme, and a romantic, sensual, tender yet ambiguous mood.'),
        ],
      },
      {
        heading: bilingual('สัญลักษณ์ในฉาก', 'Symbols in the scene'),
        bullets: [
          bilingual('พวงกุญแจสีรุ้งที่ก้อยห้อยกับกางเกงสื่อความภูมิใจและการยอมรับตัวตนของเธอ แม้ยังไม่ได้บอกรักดาวตรง ๆ', 'The rainbow keychain on Koi’s trousers signals pride and acceptance of her identity, even before she tells Dao how she feels.'),
          bilingual('เส้นแบ่งบนพื้นสื่อขอบเขตระหว่างเพื่อนกับคนรัก หมอนข้างที่วางระหว่างทั้งคู่ให้ความใกล้ชิดยังมีระยะ เมื่อดาวยกหมอนออกจึงเป็นการตัดสินใจก้าวข้ามขอบเขต', 'The line on the floor marks the boundary between friends and lovers. A bolster keeps them close but apart. Dao moving it away signals a decision to cross that boundary.'),
          bilingual('เค้กช็อกโกแลตใช้รสขมแทนความเจ็บปวดและความทรงจำรักเก่า ส่วนเค้กสตรอเบอร์รีใช้หวานอมเปรี้ยวแทนรักใหม่ของวัยรุ่น ซอสที่ไหลลงกลางเค้กเป็นภาพเปรียบของความรู้สึกที่ล้นออกมาในฉากรัก', 'Chocolate cake stands for past pain and bitter memories. Strawberry cake suggests the sweet-tart novelty of teenage love, while its flowing sauce becomes a metaphor for feelings overflowing in the love scene.'),
          bilingual('ก้อยสวมแหวนเป็นส่วนหนึ่งของตัวตน การถอดแหวนในฉากรักจึงเปรียบกับการปลดเสื้อผ้าและยอมให้ความสัมพันธ์ใกล้ชิดขึ้น', 'Koi’s ring is part of her outward identity. Removing it in the love scene stands in for undressing and allowing greater intimacy.'),
        ],
      },
      {
        heading: bilingual('ภาษาภาพและโจทย์การสื่อสาร', 'Visual plan and challenge'),
        bullets: [
          bilingual('ได้วาง high-angle และ eye-level ร่วมกับ medium-long shot, medium shot, medium close-up, close-up และ extreme close-up เพื่อพาผู้ชมจากพื้นที่ร่วมไปสู่สายตาและสัมผัสเล็ก ๆ', 'The scene combines high-angle and eye-level views with medium-long, medium, medium close-up, close-up, and extreme close-up shots to move from shared space into small glances and touches.'),
          bilingual('ภาพสะท้อนในกระจกสร้างพื้นที่กำกวมให้ผู้ชมมองความสัมพันธ์ได้มากกว่าหนึ่งแบบ การมอง สัมผัสแผล นวดคอ ปาดครีมจากริมฝีปาก จับมือ เสียงพูดเรื่องเค้ก รสเค้ก และกลิ่นสตรอเบอร์รีทำให้ความรักผ่านประสาทสัมผัสทั้งห้า', 'Mirror reflections create an ambiguous space. Gaze, tending a wound, a neck massage, wiping cream from a lip, hand holding, dialogue about cake, its taste, and strawberry scent carry the relationship through all five senses.'),
          bilingual('แสง warm light และสีแดงกับเหลืองสื่อความอบอุ่น ความรัก และความเย้ายวน โจทย์คือทำให้ผู้ชมอ่านความสัมพันธ์ที่กำลังก้ำกึ่งได้โดยไม่ต้องพูดตรง ๆ ว่าทั้งคู่เป็นเพื่อนหรือคนรัก', 'Warm light with red and yellow conveys comfort, romance, and desire. The visual challenge is to make their uncertain relationship legible without having either character label it.'),
        ],
      },
    ],
  },
  'siam-arcade': {
    source: bilingual('รายละเอียดผลงาน หน้า PDF 2, Arcade.pdf หน้า PDF 1 (ภาพปก), รายงานสรุปผล SIAM Arcade หน้า PDF 15–24', 'Portfolio overview PDF p. 2, Arcade.pdf p. 1 (cover), SIAM Arcade production report PDF pp. 15–24'),
    sections: [
      {
        heading: bilingual('แนวคิดและรูปแบบ', 'Concept and format'),
        bullets: [
          bilingual('SIAM Arcade เป็นวาไรตี้เกมโชว์ที่นำวัฒนธรรมไทยมาผสมความสนุกแบบอาเคด ให้ผู้เข้าแข่งขันและผู้ชมได้เล่นกับสุภาษิตไทย ขนมไทย และเกมงานวัดในบรรยากาศร่วมสมัย', 'SIAM Arcade is a variety game show that blends Thai culture with arcade-style fun. Contestants and viewers encounter Thai proverbs, desserts, and fairground games in a contemporary setting.'),
          bilingual('แผนรายการยาวประมาณ 25 นาที มีผู้เข้าแข่งขันสองทีมสีแดงกับสีน้ำเงิน ทีมละสองคน เริ่มจากช่วงทำความคุ้นเคย แล้วเล่นเกมทายภาพและคำจากตัวอักษร ก่อนปาลูกโป่งในเกมโบนัส', 'The planned 25-minute show features two teams of two, red and blue. It begins with a warm-up, moves to visual and letter puzzles, and ends with a balloon-dart bonus.'),
        ],
      },
      {
        heading: bilingual('Mood & Tone', 'Mood & Tone'),
        bullets: [
          bilingual('ภาพรวมตั้งใจให้สนุก สดใส มีมุกตลก และคึกคักเหมือนเดินอยู่ในงานวัดไทย ผู้ชมได้ลุ้นไปพร้อมแขกรับเชิญ และรายการเป็นกันเองกับทั้งแขกและผู้ชม ขณะที่จังหวะเกม กราฟิก และเอฟเฟกต์เสียงเป็นแบบอาเคดร่วมสมัย', 'The mood is lively, colourful, and comic like a Thai fairground. Viewers share the suspense with the guests, and the show aims to feel welcoming to both guests and viewers. Game pacing, graphics, and sound effects feel contemporary and arcade-like.'),
          bilingual('โทนแดง เหลือง และทองเชื่อมความเป็นไทยกับพลังของเกม ฉาก LED ใช้ลวดลายไทยย้อนยุคที่ออกแบบใหม่ ส่วนเสื้อผ้าพิธีกรกับแขกรับเชิญใช้สีสด ผ้าขาวม้า ลายไทยหรือลายดอกไม้', 'Red, yellow, and gold connect Thai visual identity with the energy of the games. The LED set reworks retro Thai patterns, while hosts and guests wear bright colours, pha khao ma, and Thai or floral patterns.'),
          bilingual('ภาพขนมไทย สุภาษิตไทย ปาลูกโป่ง และพร็อปงานวัดทำให้วัฒนธรรมเป็นส่วนหนึ่งของการเล่นจริง ไม่ได้อยู่เพียงในฉากหลัง', 'Thai desserts, proverb puzzles, balloon darts, and fairground props make culture part of the play itself rather than only the backdrop.'),
        ],
      },
      {
        heading: bilingual('ความท้าทายของงานนี้', 'Production challenges'),
        bullets: [
          bilingual('เวลาซ้อมและถ่ายทำมีจำกัด เมื่อการถ่ายทำเกินเวลาที่วางไว้ ทีมจึงต้องตัดบางช่วงที่ไม่จำเป็นในขั้นหลังผลิต', 'Rehearsal and filming time were limited. When the shoot ran over schedule, the team trimmed less essential material in post-production.'),
          bilingual('ฉากมีพร็อปจำนวนมาก จึงต้องประสานพิธีกร ผู้เข้าแข่งขัน เสียง ภาพบนจอ และลำดับเกมให้ตรงกัน บางช่วง LED และ CG ขึ้นเร็วหรือช้ากว่าคิว', 'The prop-heavy set required coordination among host, contestants, sound, screen graphics, and game order. Some LED and CG cues appeared too early or too late.'),
          bilingual('ควรสื่อสารคิวและช่วงเปลี่ยนเกมให้ชัดขึ้น เพื่อให้ทุกฝ่ายทำงานทันจังหวะเดียวกัน', 'Clearer communication of cues and game transitions is needed so each team works to the same rhythm.'),
        ],
      },
    ],
  },
  'first-thing-first': {
    source: bilingual('รายละเอียดผลงาน หน้า PDF 3, First Thing First proposal หน้า PDF 2–17, สคริปต์ หน้า PDF 1–2, รายงานการผลิตหน้า PDF 8–14', 'Portfolio overview PDF p. 3, First Thing First proposal PDF pp. 2–17, script PDF pp. 1–2, production report PDF pp. 8–14'),
    sections: [
      {
        heading: bilingual('ความท้าทายของงานนี้', 'Production challenges'),
        bullets: [
          bilingual('จำนวนคนในทีมพอดีกับตำแหน่งงาน หากขาดคนใดคนหนึ่ง งานส่วนนั้นอาจสะดุด เพราะแทบไม่มีคนสำรอง', 'The crew size matched the required roles closely. If someone was absent, that part of production could stall because there was little backup.'),
          bilingual('เวลาซ้อมและจัดเตรียมรายการจำกัด จึงต้องแบ่งเวลาให้การเตรียมฉาก อุปกรณ์ และคิวพูดคุยอย่างรอบคอบ', 'Rehearsal and setup time were limited, requiring careful scheduling of the set, equipment, and interview cues.'),
          bilingual('ต้องประคองกล้องตัวที่ 3 ให้ภาพนิ่ง', 'Camera 3 needed steady framing.'),
        ],
      },
    ],
  },
  'tv-seminar': {
    source: bilingual('รายละเอียดผลงาน หน้า PDF 3–4, Proposal สัมมนา หน้า PDF 2–23, 32, คลิปบรรยากาศงาน', 'Portfolio overview PDF pp. 3–4, seminar proposal PDF pp. 2–23 and 32, event footage'),
    sections: [],
  },
  'resource-wrong-place': {
    source: bilingual('รายละเอียดผลงาน หน้า PDF 4, สารคดีฉบับเต็ม, ข้อมูลเบื้องหลังการผลิตจากผู้จัดทำ', 'Portfolio overview PDF p. 4, full documentary, production account supplied by the creator'),
    sections: [
      {
        heading: bilingual('เสียงจากพื้นที่จริง', 'Voices from the field'),
        bullets: [
          bilingual('ดร.สนธิ คชวัฒน์ให้มุมผู้เชี่ยวชาญด้านสิ่งแวดล้อม', 'Dr. Sonti Kotchawat contributes an environmental-expert perspective.'),
          bilingual('คุณทวีป ทวีสินอุดมจาก ต.คิดดี โปรดักส์ ให้มุมผู้ทำงานในบริษัทที่เกี่ยวข้องกับขยะ', 'Khun Thaweep of T. Kit Dee Products contributes a waste-business perspective.'),
          bilingual('น้าอุ้ม คนขับรถขยะเล่ามุมมองผู้ทำงานหน้างาน', 'Na Oom, a garbage-truck driver, shares a frontline worker’s perspective.'),
        ],
      },
      {
        heading: bilingual('ความท้าทายของงานนี้', 'Production challenges'),
        bullets: [
          bilingual('เวลาทำงานของน้าอุ้มกับตารางทีมไม่ตรงกัน ติดต่อประสานงานได้ยาก แม้ทีมมีเบอร์โทรศัพท์ จึงไปพบที่บริษัทเพื่อสอบถามช่วงเวลาที่สะดวกก่อนนัดถ่ายทำ', 'Na Oom’s work hours did not align with the team’s schedule. Even with a phone number, coordination was difficult, so the team visited the company to arrange a suitable filming time.'),
          bilingual('สถานที่ถ่ายทำในบริเวณโรงงานขยะมีกลิ่นแรงและอากาศร้อน เพราะหลายพื้นที่เป็นกลางแจ้ง ทีมต้องทำงานภาคสนามให้ทันภายใต้สภาพแวดล้อมนี้', 'The waste-facility location was hot and had a strong smell, with much of the work outdoors. The crew had to complete the field shoot under those conditions.'),
          bilingual('การแบ่งงานไม่เป็นไปตามแผน สมาชิกบางส่วนไม่ได้ส่งงานที่รับผิดชอบและมาถึงเมื่อการถ่ายทำใกล้เสร็จ ส่งผลให้สมาชิกประมาณสี่คนต้องรับหลายหน้าที่', 'The division of work did not go to plan. Some assigned work was not delivered, and some members arrived when filming was nearly finished. Multiple duties therefore fell to roughly four crew members.'),
          bilingual('เวลาตัดต่อจำกัด ทำให้ผลลัพธ์บางส่วนไม่เป็นไปตามที่ทีมคาดหวัง จึงต้องคัดประเด็นและจัดลำดับเนื้อหาให้ชัดที่สุด', 'Editing time was limited, so some parts did not turn out as the team had hoped. They had to prioritise and sequence the material carefully.'),
        ],
      },
    ],
  },
  'street-food': {
    source: bilingual('รายละเอียดผลงาน หน้า PDF 4–5, สารคดีฉบับเต็ม', 'Portfolio overview PDF pp. 4–5, full documentary'),
    sections: [],
  },
  'piew-piew-turtle': {
    source: bilingual('รายละเอียดผลงาน หน้า PDF 5, พิวพิวเต่าคุณหนู หน้า PDF 1–10 (ภาพปกหน้าแรกตัดข้อมูลนักศึกษาออก)', 'Portfolio overview PDF p. 5, Piew Piew strategy PDF pp. 1–10 (student details removed from the first-page cover)'),
    sections: [
      {
        heading: bilingual('สารหลักและบุคลิกของช่อง', 'Channel message and personality'),
        bullets: [
          bilingual('พิวพิวเป็นเต่าซูคาต้าที่เลี้ยงอยู่จริง ชื่อ “เต่าคุณหนู” มาจากนิสัยที่ชอบให้ป้อนอาหาร พาไปเดิน และดูแลใกล้ชิด ความมึน ๆ และพฤติกรรมแปลกชวนขำทำให้ช่องมีบุคลิกน่ารักและจำง่าย', 'Piew Piew is the owner’s sulcata tortoise. The “princess tortoise” name reflects her preference for being fed, taken on walks, and cared for closely. Her quirky, slightly dazed behaviour adds humour and makes the channel memorable.'),
          bilingual('เลือกแพลทฟอร์ม TikTok เพราะคลิปสั้นและคลิปสัตว์เลี้ยงเหมาะกับการค้นพบคอนเทนต์เฉพาะกลุ่มและการรับชมเพื่อผ่อนคลาย นี่เป็นเหตุผลเชิงกลยุทธ์ ไม่ใช่ผลยอดเข้าชมที่วัดแล้ว', 'TikTok is the chosen platform because short pet clips may reach niche audiences and offer relaxing viewing. This is a strategic rationale, not a measured reach result.'),
          bilingual('คาดว่าการที่ผู้ชมบันทึกคลิปไว้ดูซ้ำอาจช่วยให้ระบบแนะนำคลิปต่อบนหน้า For You และพาคอนเทนต์จากกลุ่มเฉพาะไปถึงผู้ชมใหม่ ข้อนี้เป็นสมมติฐานด้านการเผยแพร่ของแผน ไม่ใช่ผลที่วัดจากช่องแล้ว', 'Saved clips might help TikTok recommend them again on For You and bring niche content to new viewers. This is a distribution hypothesis, not a measured channel result.'),
          bilingual('Key Message คือ “โลกช้า ๆ ของเต่าที่ทำให้คุณหยุดพัก ผ่านคอนเทนต์อบอุ่นที่สร้างความผูกพัน” สโลแกนคือ “คลิปผ่อนคลายทำให้ใจคุณช้าลง” และ 3 คำประจำแบรนด์คือ “น่ารัก คุณหนู มีเอกลักษณ์”', 'The key message presents a slow tortoise world that invites a pause and builds connection through warm content. The slogan says relaxing clips slow the viewer’s mind, and the three brand words are “cute, princess-like, distinctive.”'),
          nested('รูปแบบที่วางไว้มี 1 Day with Sulcata, How-to สำหรับผู้เลี้ยงมือใหม่ เรื่องเล่าพฤติกรรมพิวพิว และ ASMR เสียงกิน เดิน ขูดพื้น หรือเล่นน้ำ', 'Planned formats include 1 Day with Sulcata, beginner how-to clips, stories about Piew Piew’s behaviour, and ASMR of eating, walking, scratching, or playing in water.', [
            bilingual('ตัวอย่าง How-to ถามว่าเต่าซูคาต้ากินอะไรได้หรือห้ามกินอะไร ผู้เลี้ยงมือใหม่มักพลาดเรื่องใดบ้าง และจะจัดบ้านเต่าในอาคารอย่างไร', 'The how-to examples ask what sulcata tortoises can or cannot eat, which mistakes beginners make, and how to set up an indoor habitat.'),
            bilingual('ตัวอย่างอุปกรณ์ที่แผนอยากแนะนำมีบ้านเต่า อาหารเม็ด ผลิตภัณฑ์อาบน้ำ และไฟกกอุณหภูมิ โดยยังเป็นหัวข้อคอนเทนต์ ไม่ใช่การรับรองว่าสินค้าแต่ละชนิดเหมาะกับเต่าทุกตัว', 'Suggested equipment topics include a tortoise house, feed pellets, bathing products, and a warming lamp. These are content ideas, not endorsements for every animal.'),
          ]),
        ],
      },
      {
        heading: bilingual('ตำแหน่งแบรนด์และมุมตลาด', 'Positioning and market view'),
        bullets: [
          bilingual('Brand Positioning Statement มุ่งคนรักสัตว์ Exotic ที่อยากดูความน่ารัก พฤติกรรม และฟังเสียงเต่าซูคาต้าชัด ๆ โดยผสม Storytelling, ASMR และ How-to เพื่อให้ทั้งความสนุกและการผ่อนคลาย', 'The positioning statement targets Exotic pet lovers who want to see the tortoise’s behaviour and hear her clearly. It combines storytelling, ASMR, and how-to content for both enjoyment and relaxation.'),
          nested('SWOT', 'SWOT', [
            bilingual('S — จุดแข็ง: ASMR ของสัตว์ Exotic ยังมีผู้ทำไม่มาก เจ้าของรู้จักพิวพิวจริง และทำคอนเทนต์ที่บ้านได้สม่ำเสมอ', 'S — Strengths: Few creators focus on Exotic pet ASMR, the owner knows Piew Piew firsthand, and content can be made regularly at home.'),
            bilingual('W — จุดอ่อน: จังหวะของเต่าอาจช้าหรือน่าเบื่อ เนื้อหาอาจซ้ำ จึงต้องเพิ่ม pillars และความคิดสร้างสรรค์ อีกทั้งเสียงต้องชัดเพื่อรักษาจุดขาย ASMR', 'W — Weaknesses: The tortoise’s slow pace can feel dull or repetitive, calling for more pillars and creative ideas. Clear audio is essential to the ASMR appeal.'),
            bilingual('O — โอกาส: สร้างรายได้ผ่านตะกร้าสินค้า ทดลองสินค้าแล้วแท็กร้าน และทำ affiliate อุปกรณ์ดูแลเต่า โดยมีช่องว่างในตลาด Exotic pet ASMR', 'O — Opportunities: Product baskets, product trials with shop tags, and affiliate links for tortoise-care equipment, alongside an opening in Exotic pet ASMR.'),
            bilingual('T — ความเสี่ยง: กระแสสัตว์เลี้ยงเปลี่ยนเร็ว และเมื่อมีผู้เลี้ยงสัตว์มากขึ้น คู่แข่งด้านคอนเทนต์ก็เพิ่มขึ้น', 'T — Threats: Pet trends change quickly, and as pet ownership grows, more creators may enter the space.'),
          ]),
          bilingual('Red Ocean: คลิปเต่าตลกหรือไวรัล ความรู้ทั่วไปที่ไม่ลงลึก เนื้อหาวิชาการเกี่ยวกับสัตว์ ร้านขายอาหารและอุปกรณ์สัตว์ Exotic และคลิปสัตว์เลี้ยงผ่อนคลายแบบกว้าง ๆ', 'Red Ocean: Viral tortoise clips, shallow general tips, academic pet education, Exotic pet food and equipment sellers, and broad relaxing animal videos.'),
          bilingual('Blue Ocean: ASMR เต่าซูคาต้าที่เสียงชัดใกล้ตัว การเลี้ยงจริง ความอบอุ่นและความผูกพัน โดยเน้นประสบการณ์มากกว่าคลิปไวรัล', 'Blue Ocean: Close, clear sulcata ASMR, real care, warmth, and connection, centred on experience rather than virality.'),
          bilingual('Positioning Map เปรียบเทียบช่องเต่าตลกหรือไวรัล @taotechnic08 ช่องให้ความรู้ Moomoo Moonoi และช่องผ่อนคลาย ข้าวเหนียว&หมูปิ้ง ก่อนวางพิวพิวให้ผู้ชมรู้สึกผูกพัน ได้ยินเสียงชัด และเหมือนได้อยู่กับเต่าจริง ๆ', 'The positioning map compares viral tortoise account @taotechnic08, educational account Moomoo Moonoi, and relaxing account ข้าวเหนียว&หมูปิ้ง. It positions Piew Piew around connection, clear sound, and the feeling of spending time with a real tortoise.'),
        ],
      },
      {
        heading: bilingual('6 pillars', '6 pillars'),
        bullets: [
          bilingual('การเลี้ยงเต่าในคอนโดที่มีพื้นที่จำกัด และการเตรียมพื้นที่เมื่อเต่าโตขึ้น', 'Keeping a tortoise in a small condominium and planning space as it grows.'),
          bilingual('ต้นไม้หรือดอกไม้ที่ปลูกง่ายและเป็นอาหารเต่าได้ โดยข้อมูลการให้อาหารต้องตรวจจากผู้เชี่ยวชาญก่อนนำไปใช้จริง', 'Easy-to-grow plants or flowers proposed as tortoise food, with feeding advice to be checked by a specialist before practical use.'),
          bilingual('การแนะนำสินค้าและอุปกรณ์สำหรับเต่าบก', 'Product and equipment recommendations for land tortoises.'),
          bilingual('กิจกรรมและการพาเต่าไปเที่ยวสถานที่ต่าง ๆ', 'Activities and visits to different places with the tortoise.'),
          bilingual('ข้อควรระวังและสิ่งที่คนเริ่มเลี้ยงเต่าบกต้องเตรียมรับมือ', 'Care cautions and what first-time land tortoise owners should prepare for.'),
          bilingual('ประวัติและวิวัฒนาการของเต่าบก ตั้งแต่ชื่อวิทยาศาสตร์ ประเภทและสายพันธุ์ของซูคาต้า ซากฟอสซิล ไปจนถึงคำถามว่าเต่าน้ำกับเต่าบกกลุ่มใดเกิดก่อนและพัฒนามาอย่างไร', 'Land tortoise history and evolution, including scientific names, the sulcata’s type and related species, fossils, and the question of whether land or aquatic turtles arose first and how they developed.'),
        ],
      },
      {
        heading: bilingual('ตัวอย่างโครงเรื่อง', 'Story frameworks'),
        bullets: [
          nested('Hero’s Journey ใช้เรื่องกระดองพิวพิวที่ดูผิดปกติเป็นตัวอย่างโครงเรื่อง ไม่ใช่คำวินิจฉัยจากผลงาน', 'The Hero’s Journey example follows concern about Piew Piew’s shell. It is a story outline, not a diagnosis made by the portfolio.', [
            bilingual('เรื่องเริ่มจากเลี้ยงพิวพิวในร่มจนสังเกตว่ากระดองนูนคล้ายพีระมิด การพาไปรับแดดยังไม่ทำให้เปลี่ยนแปลง เจ้าของจึงปรึกษาสัตวแพทย์เฉพาะทาง', 'The example begins with indoor care and a shell raised like a pyramid. Taking Piew Piew into the sun does not change it, so the owner consults a specialist veterinarian.'),
            bilingual('ในเรื่อง สัตวแพทย์อธิบายว่าการได้รับแดดและอาหารเกี่ยวข้องกัน รวมถึงผลไม้ที่มีน้ำตาลสูงหรืออาหารเม็ดที่มีโปรตีนมากเกินไป หลังปรับวิธีเลี้ยง ตัวอย่างปิดด้วยสุขภาพและกระดองที่ดีขึ้น นี่เป็นตัวอย่างโครงเรื่อง ไม่ใช่คำแนะนำรักษาเต่าจริง', 'In the example story, the veterinarian explains that sunlight and diet both matter, including too much high-sugar fruit or protein-rich feed. After care changes, the example ends with better health and shell appearance. This is an example story, not veterinary advice.'),
          ]),
          nested('Hook–Story–Offer ยกตัวอย่างโฆษณาเครื่องดูดฝุ่น ไม่ใช่คลิปเกี่ยวกับพิวพิว', 'Hook–Story–Offer is demonstrated with a vacuum advertisement, not a Piew Piew clip.', [
            bilingual('Hook เริ่มจากผมร่วงเต็มห้อง ฝุ่นฟุ้งและผมติดไม้กวาด Story เล่าความลำบากที่ต้องกวาดทุกวัน', 'The hook is hair shed around a room, rising dust, and strands caught in a broom. The story describes having to sweep every day.'),
            bilingual('Offer ในบทเสนอเครื่องดูดฝุ่นไร้สาย Han River ราคา “สามแบงก์แดงนิด ๆ” พร้อมสายชาร์จ และกล่าวว่าใช้ได้นานหลายชั่วโมง ดูดฝุ่นไม่ฟุ้ง ก่อนชวนคอมเมนต์เพื่อรับโค้ดส่วนลด ทั้งหมดเป็นคำกล่าวในตัวอย่างสคริปต์ ไม่ใช่ผลทดสอบสินค้าหรือยอดขาย', 'The scripted offer names a Han River cordless vacuum at a little over three red banknotes, with a charging cable. It claims hours of use and less airborne dust, then invites comments for a discount code. These are example-script claims, not verified product tests or sales.'),
          ]),
          nested('Before–After–Bridge มีทั้งตัวอย่างสินค้าสัตว์เลี้ยงและเรื่องความผูกพัน', 'There are two Before–After–Bridge examples, one about a pet product and one about attachment.', [
            bilingual('ตัวอย่างแรกเริ่มจากพิวพิวมีกลิ่นหลังเหยียบเศษอาหารหรือของเสีย แล้วเสนอเจลอาบน้ำสัตว์ Exotic ชื่อ Babe พร้อมคำกล่าวเรื่องสารสกัดธรรมชาติ ไม่แสบตา ขจัดคราบและลดกลิ่น คำกล่าวเหล่านี้เป็นเนื้อหาเสนอขายในตัวอย่าง ยังไม่ใช่ผลทดสอบ', 'The first starts with odour after Piew Piew steps in food or waste. It offers Babe Exotic pet wash with scripted claims about natural extracts, avoiding eye irritation, cleaning stains, and reducing odour. These are sales-copy claims, not test results.'),
            bilingual('ตัวอย่างที่สองเล่าว่าพิวพิวเคยตาอักเสบ ซึมและไม่กินอาหาร จนเจ้าของกลัวการสูญเสีย จากนั้นเชื่อมไปสู่การดูแล ให้ความรัก และใช้เวลาที่มีร่วมกันให้ดีที่สุด โดยปิดด้วยการยอมให้ตัวเองเสียใจและค่อยระลึกถึงความทรงจำดี ๆ', 'The second recalls Piew Piew’s eye inflammation, low energy, and loss of appetite, which brought fear of losing a pet. It then turns to care, affection, and making the most of shared time, ending with permission to grieve and remember good moments.'),
          ]),
          bilingual('ตัวอย่างสินค้าหรือคำแนะนำด้านสุขภาพในตัวอย่างเป็นแนวทางเขียนคอนเทนต์ ไม่ใช่การรับรองประสิทธิภาพหรือคำแนะนำสัตวแพทย์', 'Product and animal-health references in these examples are writing concepts, not validated product claims or veterinary advice.'),
        ],
      },
      {
        heading: bilingual('Content Calendar ที่เสนอ', 'Proposed content calendar'),
        bullets: [
          bilingual('28 เม.ย. 20:00 น. แนะนำสินค้าเต่าบก ความยาวที่วางไว้ 1:30 นาที', '28 April at 20:00, land tortoise product recommendations, planned duration 1:30.'),
          bilingual('1 พ.ค. 20:00 น. พาเต่าไปเที่ยว ความยาวที่วางไว้ 2:00 นาที', '1 May at 20:00, an outing with the tortoise, planned duration 2:00.'),
          bilingual('4 พ.ค. 21:00 น. ประวัติเต่าบกตอนที่ 1 ความยาวที่วางไว้ 2:00 นาที', '4 May at 21:00, land tortoise history part 1, planned duration 2:00.'),
          bilingual('6 พ.ค. 20:00 น. สิ่งที่ต้องรับมือก่อนเลี้ยงเต่า ความยาวที่วางไว้ 1:30 นาที', '6 May at 20:00, what to prepare for before keeping a tortoise, planned duration 1:30.'),
          bilingual('8 พ.ค. 21:00 น. ประวัติเต่าบกตอนที่ 2 ความยาวที่วางไว้ 2:00 นาที', '8 May at 21:00, land tortoise history part 2, planned duration 2:00.'),
          bilingual('11 พ.ค. 20:00 น. ต้นไม้และดอกไม้ที่เต่ากินได้และปลูกง่าย ความยาวที่วางไว้ 1:30 นาที', '11 May at 20:00, easy-to-grow plants and flowers proposed as tortoise food, planned duration 1:30.'),
          bilingual('12 พ.ค. 21:00 น. ประวัติเต่าบกตอนที่ 3 ความยาวที่วางไว้ 2:00 นาที', '12 May at 21:00, land tortoise history part 3, planned duration 2:00.'),
          bilingual('ตั้งใจจะหยุด 2 วัน เพื่อพัก ตัดคลิป และคิดแนวทางการถ่ายทำ แต่จะลงประวัติเต่าบกถี่ขึ้นเพราะคาดว่าผู้ชมรอติดตาม และคั่นด้วยคอนเทนต์อื่น นี่เป็นแผนเผยแพร่ ไม่ยืนยันว่าทุกคลิปถูกโพสต์ตามกำหนด', 'The plan allows a two-day pause for rest, editing, and shoot planning, while posting tortoise-history episodes more often for viewers expected to follow the series, with other content between episodes. This is a publishing plan, not confirmation that every clip went live.'),
        ],
      },
    ],
  },
  lightclean: {
    source: bilingual('รายละเอียดผลงาน หน้า PDF 5–6, หลอดไฟกลมดิ๊ก proposal หน้า PDF 1–8, คลิปโฆษณา', 'Portfolio overview PDF pp. 5–6, LightClean proposal PDF pp. 1–8, advertising video'),
    sections: [
      {
        heading: bilingual('การทำงานและระบบที่วางแผน', 'Planned functions and systems'),
        bullets: [
          bilingual('ออกแบบให้หลอดไฟฉายรังสี UV-C ไปยังพื้นที่โดยรอบเพื่อจัดการเชื้อบนพื้นผิวหรือในอากาศ โดยยังไม่มีผลการวัดประสิทธิภาพในผลงาน', 'The lamp concept proposes UV-C exposure for surrounding surfaces and air, but the project provides no measured disinfection results.'),
          bilingual('ออกแบบให้ใช้รีโมตเปิดปิด ปรับระดับแสง และตั้งเวลา เพื่อลดการเดินไปกดสวิตช์ ยังไม่ได้แสดงอุปกรณ์ที่ทดสอบการทำงานแล้ว', 'The concept includes remote power and brightness controls and a timer to reduce trips to the switch. A tested working device has not been demonstrated.'),
          bilingual('โมดูล IoT ที่เสนอจะเก็บข้อมูลสภาพแวดล้อม เช่น ความชื้นและปริมาณเชื้อโรคในอากาศ แล้วส่งต่อให้อุปกรณ์อื่นวิเคราะห์ ยังไม่มีผลการวัดจริงจากเซ็นเซอร์', 'The proposed IoT module would gather environmental data such as humidity and airborne pathogen levels, then pass it to other devices for analysis. No actual sensor measurements are available.'),
          bilingual('โมดูล AI ที่เสนอจะใช้ข้อมูลจากเซ็นเซอร์เพื่อปรับแสงตามสภาพพื้นที่และค่าที่เกี่ยวกับเชื้อโรค ส่วนแนวคิด Big Data จะใช้รูปแบบการใช้พลังงานเพื่อแนะนำการประหยัด ทั้งสองอย่างยังเป็นแนวคิดผลิตภัณฑ์', 'The proposed AI module would use sensor data about the environment and pathogen levels to adjust lighting. The Big Data idea would analyse energy use and suggest savings. Both remain product concepts.'),
          bilingual('ออกแบบให้ลดแสงเมื่อมีคนอยู่ในพื้นที่ แต่ไม่ได้แสดงระบบตรวจคนหรือการทดสอบความปลอดภัยที่ทำงานจริง', 'The concept includes dimming light when someone is present, without showing a working occupancy safeguard or safety test.'),
        ],
      },
      {
        heading: bilingual('ข้อจำกัดและความปลอดภัย', 'Limits and safety'),
        bullets: [
          bilingual('มุ่งเพิ่มความสะดวก ลดการใช้สารเคมี และลดการแพร่กระจายเชื้อ แต่ไม่มีการทดลองที่ยืนยันประสิทธิภาพ การประหยัดพลังงาน หรือความปลอดภัยของต้นแบบ', 'The intended benefits are convenience, less chemical use, and reduced germ spread. No tests confirm effectiveness, energy savings, or prototype safety.'),
          bilingual('UV-C ที่สัมผัสโดยตรงอาจเป็นอันตรายต่อผิวหนังและดวงตา และต้องคุมระยะเวลาใช้งานตามคำแนะนำ', 'Direct UV-C exposure may harm skin and eyes and exposure time must be controlled according to guidance.'),
          bilingual('วิดีโอคือการสื่อสารแนวคิดผลิตภัณฑ์ จึงไม่ควรใช้เป็นหลักฐานว่าหลอดไฟนี้ฆ่าเชื้อได้จริงหรือใช้ในห้องที่มีคนอยู่ได้อย่างปลอดภัย', 'The video communicates a product idea. It should not be treated as evidence that this lamp disinfects effectively or can safely operate around people.'),
        ],
      },
      {
        heading: bilingual('การผลิตคลิปโฆษณา', 'Making the advertisement'),
        bullets: [
          bilingual('ใช้ InVideo AI ช่วยสร้างภาพวิดีโอโฆษณาแทนการถ่ายอุปกรณ์จริงในสถานที่จริง และต้องปรับข้อความสั่งงานจนได้ภาพที่ต้องการ', 'InVideo AI generated the advertising visuals instead of filming a real device on location. Prompts were adjusted until the desired images were obtained.'),
          bilingual('ทีมใช้ ChatGPT ช่วยหาข้อมูลสำหรับทำ Infographic', 'The team used ChatGPT to help research information for an infographic.'),
        ],
      },
    ],
  },
  'mv-tha-chan-khit-thueng-thoe': {
    source: bilingual('Shotlist.pages (2 หน้า), Breakdown.pages (3 หน้าเนื้อหา), มิวสิกวิดีโอฉบับเต็ม และเบื้องหลัง.mov', 'Shotlist.pages (2 pages), Breakdown.pages (3 content pages), full music video, and behind-the-scenes video'),
    sections: [
      {
        heading: bilingual('Shotlist', 'Shotlist'),
        images: [1, 2].map((page) => ({
          src: `assets/production/mv-tha-chan/shotlist-${String(page).padStart(2, '0')}.jpg`,
          alt: bilingual(`Shotlist หน้า ${page}`, `Shotlist page ${page}`),
          width: 1988,
          height: 1406,
        })),
      },
      {
        heading: bilingual('Breakdown', 'Breakdown'),
        images: [1, 2, 3].map((page) => ({
          src: `assets/production/mv-tha-chan/breakdown-${String(page).padStart(2, '0')}.jpg`,
          alt: bilingual(`Breakdown หน้า ${page}`, `Breakdown page ${page}`),
          width: 1988,
          height: 1406,
        })),
      },
    ],
  },
  'seoul-milk-critique': {
    source: bilingual('รายงาน Soul Milk ฉบับเต็ม หน้า PDF 3–21, ประเด็นผู้ชมและคำชี้แจงเป็นข้อมูลที่รายงานรวบรวม', 'Full Seoul Milk report PDF pp. 3–21, audience reaction and brand statements are reported by that document'),
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
          bilingual('รายงานรวบรวมเสียงไม่สบายใจต่อภาพผู้หญิงกลายเป็นวัว การแอบถ่าย และการไม่ไวต่อปัญหา Molka รวมถึงการเรียกร้องให้คว่ำบาตร', 'The report collects discomfort over women-as-cows, covert filming, and Molka insensitivity, including calls for a boycott.'),
          bilingual('อีกมุมหนึ่งในรายงานไม่ต้องการเหมารวมผู้ชายทุกคนเป็นผู้กระทำผิด ปฏิกิริยาที่รวบรวมจึงไม่ได้เป็นเสียงเดียวทั้งหมด', 'Another reported view objects to generalizing all men as offenders. The collected reactions are not unanimous.'),
          bilingual('เอกสารระบุว่าแบรนด์ลบคลิปและขอโทษ โดยชี้แจงว่าเจตนาคือสื่อธรรมชาติสะอาด ไม่ใช่ดูถูกผู้หญิง ส่วนนี้เป็นข้อมูลตามรายงาน ยังไม่ได้ตรวจเหตุการณ์ภายนอกซ้ำ', 'The document says the brand removed the ad and apologised, explaining that it intended a clean-nature message rather than contempt for women. This is the report’s account and was not independently verified.'),
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
          bilingual('ต่อยอดเรื่องบริจาคนม ลดพลาสติก/ใช้บรรจุภัณฑ์รีไซเคิล และเปิดเผยข้อมูลกระบวนการผลิต', 'Other ideas include milk donation, less plastic or recyclable packaging, and published production information.'),
          bilingual('ช่องทางที่เสนอคือ TikTok, Instagram, X และ YouTube พร้อม #SeoulMilkNewStart ทั้งหมดเป็นข้อเสนอของนักศึกษา ไม่ใช่สิ่งที่แบรนด์ทำแล้ว', 'Suggested channels are TikTok, Instagram, X, and YouTube with #SeoulMilkNewStart. These are student proposals, not verified brand actions.'),
        ],
      },
    ],
  },
  'tee-noi-vs-lucky-suki': {
    source: bilingual('PR037_Final หน้า PDF 1–28, หน้า PDF 29 ซึ่งมีรายชื่อและรหัสนักศึกษาไม่แสดงบนเว็บ', 'PR037_Final PDF pp. 1–28, p. 29 with the group roster and student IDs is not shown'),
    sections: [
      {
        heading: bilingual('โจทย์และวิธีอ่านข้อมูล', 'Question and data approach'),
        bullets: [
          bilingual('เปรียบเทียบบทสนทนาออนไลน์ของสุกี้ตี๋น้อยกับลัคกี้สุกี้ เพื่อหาช่องว่างที่แบรนด์นำไปพัฒนาการสื่อสารได้', 'The analysis compares online conversations about Suki Teenoi and Lucky Suki to find communication opportunities.'),
          bilingual('กำหนดช่วงข้อมูล 1–30 เมษายน 2569 และจัดคำค้น/คำที่ไม่นับก่อนดูช่องทางและ sentiment', 'The analysis uses a 1–30 April 2026 window and define included and excluded keywords before examining channels and sentiment.'),
          bilingual('ตัวเลขและความเห็นด้านล่างมาจากข้อมูลที่ใช้ทำงานวิเคราะห์นี้ ยังไม่ได้ตรวจซ้ำกับข้อมูลแบรนด์อย่างอิสระ', 'The figures and interpretations below come from this project’s dataset and were not independently rechecked against brand data.'),
        ],
      },
      {
        heading: bilingual('สิ่งที่เปรียบเทียบได้', 'Comparative findings'),
        bullets: [
          nested('Facebook เป็นช่องทางหลักที่นับได้ของทั้งสองแบรนด์', 'Facebook is the largest counted channel for both brands in this dataset.', [
            bilingual('หน้าสรุปรายช่องทางระบุตี๋น้อย 2,399 ข้อความ คิดเป็น 77.3% และลัคกี้ 102 ข้อความ คิดเป็น 44.9%', 'The channel breakdown records 2,399 Teenoi mentions at 77.3% and 102 Lucky mentions at 44.9%.'),
            bilingual('Instagram, TikTok และ X มีสัดส่วนรองลงมา จำนวนรวมบางหน้าของตี๋น้อยไม่ตรงกับภาพแดชบอร์ด จึงไม่คำนวณยอดรวมใหม่', 'Instagram, TikTok, and X follow. Some Teenoi channel counts do not reconcile with the dashboard, so no revised total is calculated.'),
          ]),
          bilingual('ค่า sentiment ของตี๋น้อยเป็นบวก 45.28% กลาง 46.09% และลบ 8.63% ส่วนลัคกี้เป็นบวก 51.54% กลาง 45.82% และลบ 2.64%', 'Teenoi sentiment is recorded at 45.28% positive, 46.09% neutral, and 8.63% negative. Lucky is 51.54% positive, 45.82% neutral, and 2.64% negative.'),
          bilingual('บทวิเคราะห์พบว่าคนพูดถึงโปรโมชัน ของแถม สมาชิก น้ำซุป และบริการของตี๋น้อย ขณะเดียวกันมีคำวิจารณ์เรื่องความสะอาด การดูแลลูกค้า คิว และระบบ', 'The analysis identifies Teenoi discussion around promotions, extras, membership, broth, and service, alongside complaints about cleanliness, customer care, queues, and systems.'),
        ],
      },
      {
        heading: bilingual('โอกาสของลัคกี้สุกี้', 'Lucky Suki opportunity'),
        bullets: [
          bilingual('ทีมเลือกเสียงกลางที่ยังมีมากของลัคกี้เป็นโอกาสสร้างความสนใจและเปลี่ยนเป็นความรู้สึกเชิงบวก โดยให้ Facebook เป็นพื้นที่สร้างบทสนทนาหลัก', 'The team treats Lucky’s large neutral share as an opening to build interest and positive feeling, with Facebook as the main conversation space.'),
          bilingual('กลุ่มเป้าหมายที่เสนอ: ผู้หญิง Gen Z/วัยเริ่มทำงาน 18–30 ปีเป็นหลัก และนักศึกษา/คนทำงานช่วงต้น 20–35 ปีเป็นกลุ่มรอง', 'Proposed audiences: primarily Gen Z and early-career women aged 18–30, with students and early-career people aged 20–35 as a secondary group.'),
          bilingual('แผนตั้งเป้าให้ข้อความที่กล่าวถึงแบรนด์บน Facebook เพิ่มจาก 102 เป็นมากกว่า 200 ภายในสามเดือน พร้อม sentiment บวกเกิน 65% และลบน้อยกว่า 1% ตัวเลขนี้เป็นเป้าหมาย ไม่ใช่ผลจริง', 'The plan targets Facebook mentions rising from 102 to more than 200 within three months, positive sentiment above 65%, and negative sentiment below 1%. These are targets, not outcomes.'),
        ],
      },
      {
        heading: bilingual('กิจกรรมและลำดับแคมเปญที่เสนอ', 'Proposed activities and rollout'),
        bullets: [
          bilingual('DIY Soup Bar: จ่ายเพิ่ม 29 บาทเพื่อปรุงน้ำซุปเองภายในเวลา 2 ชั่วโมงตามกติกาที่ทีมเสนอ', 'DIY Soup Bar: a proposed ฿29 add-on for custom broth during a two-hour dining period.'),
          bilingual('Lucky Lover Table: โต๊ะ/ประสบการณ์สำหรับคนกินคนเดียวเพื่อลดความเก้อเขิน', 'Lucky Lover Table: a table and experience designed to make solo dining feel comfortable.'),
          bilingual('Lucky Coupon Challenge: ชวนโพสต์วิดีโอสาธารณะเพื่อสุ่มรับคูปองและกระตุ้นคอนเทนต์จากผู้ใช้', 'Lucky Coupon Challenge: invite public user videos for a chance at a coupon and more user-generated content.'),
          bilingual('แผนสามสัปดาห์เริ่มสร้างการรับรู้ ต่อด้วยการมีส่วนร่วม แล้วจึงชวนให้ตัดสินใจ ผ่าน TikTok และ Facebook Reels ใช้คำเปิดสั้น ๆ พร้อมตอบคอมเมนต์', 'The proposed three-week plan begins with awareness, builds engagement, then encourages conversion through TikTok and Facebook Reels, short hooks, and comment replies.'),
          bilingual('สไลด์ 28 หน้าที่เผยแพร่ได้อยู่ในหน้ารายละเอียดนี้เพื่อดูภาพกราฟและงานออกแบบนำเสนอฉบับเต็ม', 'All 28 shareable slides are available in this detail view for the source charts and presentation design.'),
        ],
      },
    ],
  },
  katsumidori: {
    source: bilingual('PR037_ปาทังกี้_katsumidori หน้า PDF 1 (ภาพปก) และ 2–9, หน้า PDF 10 ซึ่งมีรายชื่อและรหัสนักศึกษาไม่แสดงบนเว็บ', 'Katsumidori PR deck PDF p. 1 (cover) and pp. 2–9, p. 10 with the group roster and student IDs is not shown'),
    sections: [
      {
        heading: bilingual('ปัญหาและ insight', 'Problem and insight'),
        bullets: [
          bilingual('เก็บคำเกี่ยวกับแบรนด์ คิว และเมนู “พุดดิ้งแมว” แล้วชี้เสียงบ่นเรื่องจองคิวแล้วรอหรือพบว่าคิวเต็ม', 'The analysis tracks brand, queue, and “cat pudding” terms, then highlights complaints about waiting despite booking or finding slots full.'),
          bilingual('มีเสียงเล่าว่ารอเกือบ 2–3 ชั่วโมง แต่เอกสารไม่ได้วัดเวลาเฉลี่ย จึงไม่ใช้ตัวเลขนี้แทนลูกค้าทั้งหมด', 'Some comments mention waits approaching 2–3 hours, but no average is measured, so this is not treated as typical for all customers.'),
          bilingual('insight ของทีมคือ “คนไม่ได้กลัวการรอ แต่กลัวการรอที่สูญเปล่า” และเห็นช่องว่างระหว่างกระแสรีวิวกับประสบการณ์คิวจริง', 'The team’s insight is that people fear wasted waiting time. They identify a gap between viral reviews and the actual queue experience.'),
        ],
      },
      {
        heading: bilingual('Big Idea และข้อเสนอ', 'Big idea and offer'),
        bullets: [
          bilingual('“Every Minute Matters” เปลี่ยนบัตรคิวให้เป็นสิทธิ์รับคูปอง เพื่อให้เวลารอกลายเป็นส่วนหนึ่งของประสบการณ์', '“Every Minute Matters” turns the queue ticket into coupon eligibility so waiting adds value to the experience.'),
          nested('ขั้นส่วนลดที่เสนอคือใช้จ่าย 500 บาทรับ 5% และใช้จ่าย 1,000 บาทรับ 12%', 'The proposal offers 5% off a ฿500 spend and 12% off a ฿1,000 spend.', [
            bilingual('แผนจำกัดหนึ่งใบเสร็จต่อหนึ่งสิทธิ์ ใช้กับเมนู After You × Katsumidori ที่ร่วมรายการ และไม่รวมใบเสร็จ', 'The plan limits use to one receipt per right and the participating After You × Katsumidori menu, with no receipt combining.'),
          ]),
          bilingual('การร่วมมือกับ After You และการลุ้นรางวัลเป็นแนวคิดแคมเปญ กลไกรางวัลไม่ได้ระบุครบ จึงไม่เติมกติกาเอง', 'An After You collaboration and prize draw are campaign proposals. The prize mechanics are incomplete, so no extra rules are inferred.'),
        ],
      },
      {
        heading: bilingual('กลุ่มคนที่แผนอยากสื่อสาร', 'Proposed audience profiles'),
        bullets: [
          bilingual('Trend Reviewer เป็น persona อายุ 18–24 ปี เน้นดูรีวิวและแชร์ประสบการณ์ มีสัดส่วนผู้หญิง 88.97% และ mid-tier influencer 37.9%', 'Trend Reviewer is an age-18–24 persona focused on reviews and sharing. The profile lists 88.97% women and 37.9% mid-tier influencers.'),
          bilingual('Lifestyle Spender เป็น persona อายุ 25–34 ปี ชอบไลฟ์สไตล์และการไปห้าง มีสัดส่วนผู้หญิง 80.15% และความสนใจไปห้าง 17.8%', 'Lifestyle Spender is an age-25–34 lifestyle and mall-going persona. The profile lists 80.15% women and 17.8% mall interest.'),
          bilingual('Organic Reviewer: อายุ 22–28 ปี รายได้ 15,000–25,000 บาท ใช้ X/Instagram และเล่าประสบการณ์เองตามโปรไฟล์ persona', 'Organic Reviewer: an age-22–28 persona earning ฿15,000–25,000, sharing firsthand experiences on X/Instagram in the persona profile.'),
        ],
      },
      {
        heading: bilingual('ขอบเขตของตัวเลขและผลงาน', 'Data and outcome boundary'),
        bullets: [
          bilingual('ข้อมูลมีสัดส่วน persona กับเงื่อนไขข้อเสนอ แต่ไม่ให้ขนาดตัวอย่าง ช่วงเก็บข้อมูล หรือวิธีคำนวณที่พอใช้ทำกราฟแนวโน้ม', 'The available data include persona percentages and proposed offer terms, but no sample size, data window, or method sufficient for a trend chart.'),
          bilingual('บอร์ดข้อมูลในหน้านี้แยก “ข้อมูลโปรไฟล์ persona” ออกจาก “กลไกแคมเปญที่เสนอ” จึงไม่ใช่แดชบอร์ดผลแคมเปญจริง', 'The board in this detail view separates persona profile figures from proposed campaign mechanics. It is not an outcome dashboard.'),
          bilingual('อ่าน persona และแนวคิดออกแบบฉบับเต็มได้จากไฟล์ PDF ในหน้ารายละเอียดนี้', 'The PDF in this detail view contains the full persona profiles and design idea.'),
        ],
      },
    ],
  },
  'mv-lam-pam-symbolism': {
    source: bilingual('วิเคราะห์สัญญะใน MV หน้า PDF 3–19, ไม่แสดงรายชื่อกลุ่มจากหน้า PDF 1', 'Lam Pam analysis PDF pp. 3–19, the group roster from p. 1 is not shown'),
    sections: [
      {
        heading: bilingual('สารหลักและตัวละคร', 'Key message and character reading'),
        bullets: [
          bilingual('รายงานอ่านเรื่องเป็นความรักที่ฝ่ายหนึ่งจริงจัง แต่อีกฝ่ายยังผูกพันกับคนรักเก่า', 'The report reads the story as a sincere love for someone still attached to a former partner.'),
          bilingual('บทวิเคราะห์วาง BOWKYLION เป็นฝ่ายรักจริงและ Jeff เป็นฝ่ายยังมีอดีตค้างอยู่ นี่คือการตีความตัวละครของรายงาน', 'The analysis casts BOWKYLION as the sincere lover and Jeff as the one still tied to the past. This is the report’s character reading.'),
          bilingual('ผู้เล่าเลือกไม่ถาม ไม่รบกวน และไม่รั้ง แม้ต้องเจ็บ คณะละครสัตว์ทำให้ความรู้สึกส่วนตัวกลายเป็นการแสดงต่อหน้าคนอื่น', 'The speaker chooses not to question, intrude, or hold on despite the hurt. The circus turns private feeling into a public performance.'),
        ],
      },
      {
        heading: bilingual('สัญญะในภาพ', 'Visual symbols'),
        bullets: [
          bilingual('อุปกรณ์วงกลมในละครสัตว์แทนความสัมพันธ์ที่วนกลับจุดเดิม', 'Circular circus props suggest a relationship returning to the same point.'),
          bilingual('การแสดงและการแกล้งไม่รู้ทำให้ความเจ็บปวดถูกซ่อนไว้หลังบทบาท', 'Performance and feigned ignorance conceal pain behind a role.'),
          bilingual('ตัวตลกกับหน้ากากซ่อนความเศร้าใต้รอยยิ้ม', 'Clowns and masks hide sadness beneath a smile.'),
          bilingual('สีแดงมีทั้งรัก ความโกรธ และเส้นแบ่งระหว่างสิ่งที่ปิดบังกับสิ่งที่เปิดเผย', 'Red carries love, anger, and the border between hidden and revealed feelings.'),
          bilingual('สปอตไลต์คือสายตาที่จ้องมอง แสงตัดเงาแทนความจริงที่ขัดกับภาพลวง', 'The spotlight is public scrutiny. Sharp light and shadow contrast truth with illusion.'),
          bilingual('เชือกหุ่นเชิดแทนการควบคุมและความไม่เท่าเทียม การตัดเชือกคือการปล่อยตัวเอง', 'Puppet strings stand for control and imbalance. Cutting them signals release.'),
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
    source: bilingual('Report เรื่องเจน หน้า PDF 1–8, สรุปเฉพาะประเด็นที่เหมาะกับการเผยแพร่', 'Jane interview report PDF pp. 1–8, summarized at a public-appropriate level'),
    sections: [
      {
        heading: bilingual('เส้นเรื่องของบทสัมภาษณ์', 'The profile’s story arc'),
        bullets: [
          bilingual('งานเขียนเริ่มจากความทรงจำวัยเด็กกับครอบครัว แล้วติดตามการตัดสินใจเรียนมหาวิทยาลัยและย้ายมาใช้ชีวิตในกรุงเทพฯ', 'The profile begins with childhood family memories, then follows a university decision and a move to Bangkok.'),
          bilingual('ใช้เส้นเรื่อง “การเติบโตและรับผิดชอบมากขึ้น” เชื่อมเหตุการณ์ แทนการถอดคำถาม–คำตอบเรียงตามลำดับ', 'Growing responsibility ties the episodes together instead of presenting a question-and-answer transcript.'),
          bilingual('รายงานกล่าวถึงการสูญเสียสัตว์เลี้ยงในฐานะจุดเปลี่ยนของมุมมองชีวิต โดยหน้า Portfolio สรุปไว้ระดับภาพรวม', 'The report treats the loss of a pet as a change in outlook. This portfolio keeps that episode at a high level.'),
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
  title: bilingual('ข้อมูลประกอบแคมเปญ Katsumidori', 'Katsumidori campaign data'),
  note: bilingual(
    'ตัวเลขด้านล่างเป็นโปรไฟล์ persona และเงื่อนไขแคมเปญที่เสนอ ไม่ใช่ผลลัพธ์หลังแคมเปญ ข้อมูลไม่ระบุขนาดตัวอย่าง ช่วงเวลาเก็บข้อมูล หรือวิธีคำนวณเพียงพอสำหรับกราฟแนวโน้ม',
    'These are persona profiles and proposed campaign rules, not campaign outcomes. The data do not provide sample size, collection period, or methods sufficient for a trend chart.'
  ),
  painPoint: bilingual(
    'ตัวอย่างความคิดเห็นกล่าวถึงการรอเกือบ 2–3 ชั่วโมง (หน้า PDF 3) ตัวเลขนี้เป็นคำเล่ารายกรณี ไม่ใช่เวลารอเฉลี่ยที่วัดได้',
    'A quoted comment mentions a wait of nearly 2–3 hours (PDF p. 3). This is an anecdote, not a measured average waiting time.'
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
