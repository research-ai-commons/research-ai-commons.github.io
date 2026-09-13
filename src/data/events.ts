export type EventItem = {
  id: string;
  series: 'Café' | 'Forum';
  language?: 'JP' | 'EN';
  title: string;
  date: string;
  time?: string;
  venue?: string;
  status: 'planned' | 'open' | 'closed';
  summary: string;
  href?: string;
};

export const events: EventItem[] = [
  {
    id: '#001',
    series: 'Café',
    language: 'JP',
    title: '研究にAI、みんなどう使ってる？',
    date: 'TBD',
    time: '19:00–20:30（自由交流 ～21:00）',
    venue: '北海道大学内（予定）',
    status: 'planned',
    summary:
      '実験系研究者が、研究でのAI活用、失敗、リスク、困りごとを持ち寄る小規模な座談会。',
    href: '/events/cafe-001-jp/',
  },
];
