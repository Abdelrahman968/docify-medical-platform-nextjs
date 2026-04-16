import Btn from '@/shared/Btn';
import ServicesList from './services/ServicesList';
import { getTranslations } from 'next-intl/server';

export default async function Services() {
  const t = await getTranslations('Services');
  return (
    <section className="flex items-start justify-center min-h-[700px]">
      <div className="container mx-auto flex flex-col gap-10 px-4">
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
          <div className="txt">
            <h2 className="text-4xl md:text-5xl font-bold">{t('title')}</h2>
          </div>
          <div className="btn">
            <Btn
              txt={t('viewAllServices')}
              href="/services"
              width="w-60"
              height="h-12"
            />
          </div>
        </div>
        <div>
          <ServicesList />
        </div>
      </div>
    </section>
  );
}
