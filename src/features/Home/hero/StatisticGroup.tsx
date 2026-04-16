import { getTranslations } from 'next-intl/server';

const stats = [
  { id: 1, number: '100+', text: 'partners' },
  { id: 2, number: '150+', text: 'specialists' },
  { id: 3, number: '1000+', text: 'reports' },
];

export default async function StatisticGroup() {
  const t = await getTranslations('HeroHomePage');
  return (
    <div className="flex items-center gap-6 justify-center text-center">
      {stats.map(({ id, number, text }) => (
        <div key={id} className="flex flex-col gex-1">
          <h2 className="text-white font-semibold text-xl">{number}</h2>
          <p className="text-white font-normal text-sm">{t(text)}</p>
        </div>
      ))}
    </div>
  );
}
