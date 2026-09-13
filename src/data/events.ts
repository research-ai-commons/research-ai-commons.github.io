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
    date: '未定',
    time: '未定',
    venue: '未定',
    status: 'planned',
    summary:
      '実験系研究者が、研究でのAI活用、失敗、リスク、困りごとを持ち寄る小規模な座談会。',
    href: '/events/cafe-001-jp/',
  },
];
