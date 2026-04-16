import FirstImage from '@/assets/homePage/section3/EX-Image-1.jpg';
import SecImage from '@/assets/homePage/section3/EX-Image-2.jpg';

import BlogImage from '@/assets/homePage/section5/blog-section.jpg';

import AppImage from '@/components/AppImage';
import { getTranslations } from 'next-intl/server';

export default async function ExploreFeatureImage({
  isRtl,
  from,
}: {
  isRtl: boolean;
  from?: string;
}) {
  const t = await getTranslations(from === 'tips' ? 'Tips' : 'Explore');
  return (
    <div className="relative w-[450px] min-h-[350px]">
      <div
        className={`xl:w-[580px] xl:h-[384px] lg:w-[450px] lg:h-[500px] w-[300px] h-[300px] absolute top-0 left-full  z-10 border-4 border-white rounded-xl overflow-hidden ${isRtl ? 'translate-y-25 -translate-x-[125%]  md:-translate-x-[90%] xl:translate-y-7 xl:-translate-x-[110%] scale-85 md:scale-100' : 'translate-y-25 -translate-x-[125%] scale-85 md:scale-100  md:-translate-x-[90%]  xl:translate-y-7 xl:-translate-x-1/2'}`}
      >
        <div className="absolute inset-0 bg-black z-10 opacity-70" />

        <AppImage
          src={FirstImage}
          className="w-full h-full object-cover rounded-xl"
          alt="first"
          width={580}
          height={384}
          style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
        />
      </div>

      <div
        className={`xl:w-[580px] xl:h-[440px] lg:w-[450px] lg:h-[500px] w-[300px] h-[300px] absolute z-20 border-4 border-white rounded-xl overflow-hidden ${isRtl ? 'top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0' : 'top-0 right-1/2 translate-x-1/2 md:scale-100'}`}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

        <AppImage
          src={from === 'tips' ? BlogImage : SecImage}
          className="w-full h-full object-cover rounded-xl shadow-2xl"
          alt="second"
          width={580}
          height={440}
          style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
        />
        <h2 className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-white lg:text-[32px] text-[18px] font-bold w-full text-center">
          {t('Dental_Department') || 'Dental Department'}
          <br className={from === 'tips' ? 'block' : 'hidden'} />
          {from === 'tips' ? t('Dental_Department2') : ''}
        </h2>
      </div>
    </div>
  );
}
