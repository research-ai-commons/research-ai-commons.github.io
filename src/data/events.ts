export type EventItem = {
  id: string;
  series: 'Café' | 'Forum';
  language?: 'JP' | 'EN';
  title: string;
  titleEn: string;
  date: string;
  time?: string;
  venue?: string;
  status: 'planned' | 'open' | 'closed';
  summary: string;
  summaryEn: string;
  href?: string;
  hrefEn?: string;
};

export const events: EventItem[] = [
  {
    id: '#001',
    series: 'Café',
    language: 'JP',
    title: '研究にAI、みんなどう使ってる？',
    titleEn: 'How are you using AI in your research?',
    date: '未定',
    time: '未定',
    venue: '未定',
    status: 'planned',
    summary:
      '実験系研究者が、研究でのAI活用、失敗、リスク、困りごとを持ち寄る小規模な座談会。',
    summaryEn:
      'A small, informal roundtable where experimental researchers share real AI practices, failures, risks, and open questions.',
    href: '/events/cafe-001-jp/',
    hrefEn: '/en/events/cafe-001-jp/',
  },
  {
    id: '#002',
    series: 'Café',
    language: 'EN',
    title: '研究にAI、みんなどう使ってる？（英語回）',
    titleEn: 'How are you using AI in your research?',
    date: '未定',
    time: '未定',
    venue: '未定',
    status: 'planned',
    summary:
      '同じテーマを英語で話すCafé。研究分野や文化の違いも含め、AIの実践、失敗、リスク、困りごとを共有します。',
    summaryEn:
      'An English-language Café on the same theme, sharing real AI practices, failures, risks, and questions across research fields and cultures.',
    href: '/events/cafe-002-en/',
    hrefEn: '/en/events/cafe-002-en/',
  },
];
