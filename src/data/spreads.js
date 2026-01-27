// Ideally this should be in translations.js or similar, but for now we put it here or modify logic.
// Actually, spreads.js is a static data file. 
// A better way is to move spread titles/descriptions to translations.js or make spreads.js export a function that takes 'language'.
// Let's modify spreads.js to include both EN and TH.

export const spreads = [
    {
        id: 'four-noble-truths',
        title: { en: 'The Four Noble Truths', th: 'อริยสัจ 4' },
        description: {
            en: 'Signature Spread: Solve life problems using the core teaching of Buddha.',
            th: 'ผังพยากรณ์หลัก: แก้ปัญหาชีวิตด้วยหลักอริยสัจ 4 (ทุกข์ สมุทัย นิโรธ มรรค)'
        },
        cardCount: 4,
        layout: 'cross',
        positions: [
            { id: 1, name: { en: 'Dukkha (The Problem)', th: 'ทุกข์ (ปัญหา)' }, description: { en: 'Current situation, the suffering you are facing.', th: 'สถานการณ์ปัจจุบันหรือปัญหาที่เผชิญอยู่' } },
            { id: 2, name: { en: 'Samudaya (The Cause)', th: 'สมุทัย (สาเหตุ)' }, description: { en: 'Root cause, attachment, or hidden factor.', th: 'สาเหตุที่แท้จริง หรือสิ่งที่กำลังยึดติด' } },
            { id: 3, name: { en: 'Nirodha (The Solution)', th: 'นิโรธ (ทางออก)' }, description: { en: 'The goal, the best possible outcome.', th: 'เป้าหมายที่ควรไปถึง หรือความเป็นไปได้ที่ดีที่สุด' } },
            { id: 4, name: { en: 'Magga (The Path)', th: 'มรรค (วิธีแก้)' }, description: { en: 'Action plan, what you must do to achieve the goal.', th: 'สิ่งที่ต้องทำ หรือการปรับเปลี่ยนพฤติกรรม' } },
        ]
    },
    {
        id: 'three-marks',
        title: { en: 'The Three Marks (Quick Scan)', th: 'ไตรลักษณ์ (Quick Scan)' },
        description: { en: 'Understand the nature of a situation: Impermanence, Suffering, and Non-self.', th: 'ดูแนวโน้มสถานการณ์ด่วน: อนิจจัง ทุกขัง อนัตตา' },
        cardCount: 3,
        layout: 'linear',
        positions: [
            { id: 1, name: { en: 'Anicca (Impermanence)', th: 'อนิจจัง (ความไม่เที่ยง)' }, description: { en: 'What is changing or passing away?', th: 'อะไรที่กำลังเปลี่ยนแปลง หรือกำลังจะผ่านไป' } },
            { id: 2, name: { en: 'Dukkha (Unsatisfactoriness)', th: 'ทุกขัง (ความบีบคั้น)' }, description: { en: 'Where is the pressure or conflict?', th: 'จุดกดดันหรือความขัดแย้งในขณะนี้' } },
            { id: 3, name: { en: 'Anatta (Non-Self)', th: 'อนัตตา (ความไม่มีตัวตน)' }, description: { en: 'What is beyond your control? What to let go of?', th: 'อะไรที่ควบคุมไม่ได้ และควรปล่อยวาง' } },
        ]
    },
    {
        id: 'moon-phase',
        title: { en: 'Moon Phase Cycle', th: 'วัฏจักรพระจันทร์' },
        description: { en: 'Analyze the cycle of change or plan for the month ahead.', th: 'วางแผนชีวิตตามรอบเวลา หรือดูแนวโน้มระยะเดือน' },
        cardCount: 4,
        layout: 'circle',
        positions: [
            { id: 1, name: { en: 'New Moon', th: 'เดือนดับ (เตรียมตัว)' }, description: { en: 'Beginnings, preparation, what is hidden.', th: 'ช่วงเวลาสะสมพลัง สิ่งที่ยังมองไม่เห็น' } },
            { id: 2, name: { en: 'Waxing Moon', th: 'ข้างขึ้น (ลงมือทำ)' }, description: { en: 'Growth, what to act upon.', th: 'โอกาสที่กำลังเข้ามา สิ่งที่ควรลุย' } },
            { id: 3, name: { en: 'Full Moon', th: 'วันเพ็ญ (ความสำเร็จ)' }, description: { en: 'Peak, fruition, revelation.', th: 'จุดพีคสุด ผลลัพธ์ที่จะปรากฏชัดเจน' } },
            { id: 4, name: { en: 'Waning Moon', th: 'ข้างแรม (ประเมินผล)' }, description: { en: 'Release, what to let go of.', th: 'สิ่งที่ควรลดละเลิก หรือปล่อยวาง' } },
        ]
    },
    {
        id: 'dependent-origination',
        title: { en: 'Dependent Origination (Samsara)', th: 'ปฏิจจสมุปบาท (วงล้อแห่งกรรม)' },
        description: { en: 'Advanced: Analyze the Karmic Wheel and root causes of repeating life patterns.', th: 'วิเคราะห์รากเหง้าของปัญหาชีวิตที่วนเวียนซ้ำซาก (12 อาการ)' },
        cardCount: 12,
        layout: 'circle',
        positions: [
            { id: 1, name: { en: 'Ignorance', th: 'อวิชชา' }, description: { en: 'Root error', th: 'จุดบอดหรือความไม่รู้' } },
            { id: 2, name: { en: 'Karma', th: 'สังขาร' }, description: { en: 'Habits', th: 'นิสัยหรือการปรุงแต่ง' } },
            { id: 3, name: { en: 'Consciousness', th: 'วิญญาณ' }, description: { en: 'Mind State', th: 'สภาวะจิตปัจจุบัน' } },
            { id: 4, name: { en: 'Mind & Body', th: 'นามรูป' }, description: { en: 'Identity', th: 'ตัวตนหรือบุคลิกภาพ' } },
            { id: 5, name: { en: 'Six Senses', th: 'สฬายตนะ' }, description: { en: 'Inputs', th: 'สิ่งแวดล้อมที่เข้ามากระทบ' } },
            { id: 6, name: { en: 'Contact', th: 'ผัสสะ' }, description: { en: 'Trigger', th: 'เหตุการณ์ที่เป็นจุดปะทะ' } },
            { id: 7, name: { en: 'Feeling', th: 'เวทนา' }, description: { en: 'Emotion', th: 'ความรู้สึกชอบ/ชัง' } },
            { id: 8, name: { en: 'Craving', th: 'ตัณหา' }, description: { en: 'Desire', th: 'ความอยากที่ผลักดัน' } },
            { id: 9, name: { en: 'Clinging', th: 'อุปาทาน' }, description: { en: 'Attachment', th: 'สิ่งที่ยึดติดแน่น' } },
            { id: 10, name: { en: 'Becoming', th: 'ภพ' }, description: { en: 'Formation', th: 'สถานการณ์ที่ก่อตัวขึ้น' } },
            { id: 11, name: { en: 'Birth', th: 'ชาติ' }, description: { en: 'Manifestation', th: 'ผลลัพธ์ที่เป็นรูปธรรม' } },
            { id: 12, name: { en: 'Suffering', th: 'ชรามรณะ' }, description: { en: 'Lesson', th: 'บทเรียนความทุกข์ที่ได้รับ' } },
        ]
    },
    {
        id: 'four-sublime-states',
        title: { en: 'Four Sublime States', th: 'พรหมวิหาร 4' },
        description: { en: 'Relationship Healing.', th: 'เยียวยาความสัมพันธ์ด้วยธรรมะ' },
        cardCount: 4,
        layout: 'linear',
        positions: [
            { id: 1, name: { en: 'Metta', th: 'เมตตา' }, description: { en: 'Loving-kindness', th: 'ปรารถนาดีต่อเขา' } },
            { id: 2, name: { en: 'Karuna', th: 'กรุณา' }, description: { en: 'Compassion', th: 'สงสารและเข้าใจความทุกข์เขา' } },
            { id: 3, name: { en: 'Mudita', th: 'มุทิตา' }, description: { en: 'Sympathetic Joy', th: 'ยินดีในสิ่งที่เขาดี' } },
            { id: 4, name: { en: 'Upekkha', th: 'อุเบกขา' }, description: { en: 'Equanimity', th: 'วางใจเป็นกลาง/ปล่อยวาง' } },
        ]
    },
    {
        id: 'five-aggregates',
        title: { en: 'The Five Aggregates', th: 'เบญจขันธ์ 5' },
        description: { en: 'Self-Analysis / Ego Check.', th: 'ถอดรหัสตัวตน (Ego) เมื่อสับสน' },
        cardCount: 5,
        layout: 'linear',
        positions: [
            { id: 1, name: { en: 'Form', th: 'รูป' }, description: { en: 'Body', th: 'ร่างกาย/วัตถุ' } },
            { id: 2, name: { en: 'Feeling', th: 'เวทนา' }, description: { en: 'Raw Emotion', th: 'ความรู้สึกสุข/ทุกข์' } },
            { id: 3, name: { en: 'Perception', th: 'สัญญา' }, description: { en: 'Memory', th: 'ความจำ/การให้ค่า' } },
            { id: 4, name: { en: 'Mental Formations', th: 'สังขาร' }, description: { en: 'Thoughts', th: 'ความคิดปรุงแต่ง' } },
            { id: 5, name: { en: 'Consciousness', th: 'วิญญาณ' }, description: { en: 'Awareness', th: 'การรับรู้ในปัจจุบัน' } },
        ]
    },
    {
        id: 'noble-eightfold-path',
        title: { en: 'Noble Eightfold Path', th: 'อริยมรรค 8' },
        description: { en: 'The Practical Guide to solution.', th: 'ทางสายเอก แผนที่แก้ปัญหาชีวิต' },
        cardCount: 8,
        layout: 'circle',
        positions: [
            { id: 1, name: { en: 'Right View', th: 'สัมมาทิฏฐิ' }, description: { en: 'Understanding', th: 'เห็นชอบ (เข้าใจถูก)' } },
            { id: 2, name: { en: 'Right Intention', th: 'สัมมาสังกัปปะ' }, description: { en: 'Intention', th: 'ดำริชอบ (คิดถูก)' } },
            { id: 3, name: { en: 'Right Speech', th: 'สัมมาวาจา' }, description: { en: 'Speech', th: 'เจรจาชอบ (พูดถูก)' } },
            { id: 4, name: { en: 'Right Action', th: 'สัมมากัมมันตะ' }, description: { en: 'Action', th: 'กระทำชอบ (ทำถูก)' } },
            { id: 5, name: { en: 'Right Livelihood', th: 'สัมมาอาชีวะ' }, description: { en: 'Livelihood', th: 'เลี้ยงชีพชอบ (อาชีพถูก)' } },
            { id: 6, name: { en: 'Right Effort', th: 'สัมมาวายามะ' }, description: { en: 'Effort', th: 'พยายามชอบ (เพียรถูก)' } },
            { id: 7, name: { en: 'Right Mindfulness', th: 'สัมมาสติ' }, description: { en: 'Mindfulness', th: 'ระลึกชอบ (สติดี)' } },
            { id: 8, name: { en: 'Right Concentration', th: 'สัมมาสมาธิ' }, description: { en: 'Concentration', th: 'ตั้งใจชอบ (สมาธิดี)' } },
        ]
    },
    {
        id: 'celtic-cross-buddhist',
        title: { en: 'Buddhist Celtic Cross', th: 'เซลติกครอสวิถีพุทธ' },
        description: { en: 'Deep analysis for complex questions.', th: 'เจาะลึกภาพรวมชีวิตหรือปัญหาซับซ้อน' },
        cardCount: 10,
        layout: 'complex',
        positions: [
            { id: 1, name: { en: 'The Self', th: 'ตัวตน' }, description: { en: 'Current state', th: 'สภาวะจิตปัจจุบัน' } },
            { id: 2, name: { en: 'The Challenge', th: 'อุปสรรค' }, description: { en: 'Karma/Obstacle', th: 'วิบากกรรมที่เข้ามา' } },
            { id: 3, name: { en: 'Conscious Intent', th: 'เจตนา' }, description: { en: 'Known goal', th: 'ความตั้งใจที่รู้ตัว' } },
            { id: 4, name: { en: 'Subconscious', th: 'จิตใต้สำนึก' }, description: { en: 'Hidden root', th: 'รากเหง้าในอดีต' } },
            { id: 5, name: { en: 'The Past', th: 'อดีต' }, description: { en: 'Recent events', th: 'สิ่งที่เพิ่งผ่านไป' } },
            { id: 6, name: { en: 'Near Future', th: 'อนาคต' }, description: { en: 'Coming next', th: 'แนวโน้มเร็วๆ นี้' } },
            { id: 7, name: { en: 'Attitude', th: 'ทัศนคติ' }, description: { en: 'Perspective', th: 'มุมมองต่อปัญหา' } },
            { id: 8, name: { en: 'External Influence', th: 'สิ่งแวดล้อม' }, description: { en: 'Environment', th: 'คนรอบข้าง/ปัจจัยภายนอก' } },
            { id: 9, name: { en: 'Hopes & Fears', th: 'ความหวัง/กลัว' }, description: { en: 'Inner feeling', th: 'สิ่งที่ในใจพะวง' } },
            { id: 10, name: { en: 'The Outcome', th: 'บทสรุป' }, description: { en: 'Final advice', th: 'บทสรุปและคติธรรม' } },
        ]
    },
    {
        id: 'free-form',
        title: { en: 'Free Form / Intuitive', th: 'เปิดไพ่ตามใจ (Free Form)' },
        description: { en: 'Draw as many cards as you feel guided to. No fixed positions.', th: 'เสี่ยงทายอิสระ หยิบไพ่กี่ใบก็ได้ตามสัญชาตญาณ' },
        cardCount: 0, // Special flag for unlimited/interactive
        layout: 'flow',
        positions: [] // Dynamic
    }
];
