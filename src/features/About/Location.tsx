import { getTranslations } from 'next-intl/server';
import Map from './Map';

export default async function Location() {
  const t = await getTranslations('Location');
  return (
    <section className="flex flex-col items-center justify-start min-h-[650px] py-10">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-[700px] leading-relaxed">
            {t('title') || 'Our Location'}
          </h1>
        </div>
        <div className="w-full p-4">
          <Map />
        </div>
      </div>
    </section>
  );
}
