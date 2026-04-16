import bgImage from '@/assets/homePage/customers/Customers-BG.jpg';
import MySwiper from './customers/MySwiper';
import { getTranslations } from 'next-intl/server';

export default async function Customers() {
  const t = await getTranslations('Customers');
  return (
    <section
      className="relative flex items-start justify-center  py-10 border-y-1 border-gray-200 overflow-hidden w-full"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/60 z-10" />
      <div className="mx-auto relative z-20 w-full">
        <div className="flex flex-col gap-10">
          <div className="text-center w-full gap-2">
            <h2 className="text-3xl lg:text-4xl font-bold">{t('title')}</h2>
          </div>
          <div className="w-full">
            <MySwiper />
          </div>
        </div>
      </div>
    </section>
  );
}
