import BGImage from '@/assets/homePage/section3/section-3-BG.jpg';
import BlogBGImage from '@/assets/homePage/section5/blog-bg.jpg';

import Indicator from './explore/Indicator';
import Btn from '../../shared/Btn';
import ExploreFeatureImage from './explore/ExploreFeatureImage';
import { getTranslations } from 'next-intl/server';
import { getAppLocale } from '@/lib/locale';

export default async function Explore({
  from,
  num,
}: {
  from?: string;
  num?: number;
}) {
  const t = await getTranslations(from === 'tips' ? 'Tips' : 'Explore');
  const { isRtl } = await getAppLocale();
  return (
    <section
      className="relative min-h-[600px] border-y border-[#ECECEC] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${from === 'tips' ? BlogBGImage.src : BGImage.src})`,
      }}
    >
      <div
        className="absolute inset-0 z-10 opacity-80"
        style={{
          background:
            'linear-gradient(255.79deg, #B6B9C7 -2.08%, #FFFFFF 41.24%, #B6B9C7 107.88%)',
        }}
      />

      <div className="relative z-20 w-full px-4 lg:px-10 flex flex-col xl:flex-row items-center justify-around ">
        <div className="flex flex-col gap-5 text-center lg:text-start">
          <h2 className="text-black text-5xl font-bold text-center xl:text-start max-w-[624px] mt-10 xl:mt-0">
            {t('title') || 'Explore Our Medical Departments'}
          </h2>
          <p className="text-black font-medium text-[16px] max-w-[624px] text-center xl:text-start">
            {t('description') ||
              'Comprehensive dental care for a healthy smile, including preventive checkups, cleanings, orthodontics, and restorative treatments.'}
          </p>
          <Indicator num={num} />
          <div className="flex items-center justify-center xl:justify-start mt-12">
            <Btn
              txt={t('bookNow') || 'Book Now'}
              href="/"
              height="h-12"
              width="w-60"
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 z-50">
          <ExploreFeatureImage from={from} isRtl={isRtl} />
        </div>
      </div>
    </section>
  );
}
