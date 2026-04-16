import ImageOne from '@/assets/homePage/section2/section2-image1.jpg';
import ImageTwo from '@/assets/homePage/section2/section2-image2.jpg';
import AppImage from '../../../components/AppImage';
import { getTranslations } from 'next-intl/server';
import { getLocale } from 'next-intl/server';

export default async function FeatureImage() {
  const t = await getTranslations('MedicalSupport');
  const locale = await getLocale();

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[220px] sm:min-h-[300px] lg:min-h-[400px]">
      <div className="relative z-10 rounded-2xl border-[6px] border-[#29B2A4] overflow-hidden w-[240px] h-[240px] sm:w-[260px] sm:h-[220px] lg:w-[420px] lg:h-[350px]">
        <div className="absolute inset-0 bg-black/40 z-20" />
        <AppImage
          src={ImageOne.src}
          alt={t('imageOneAlt') || 'Image One'}
          fill
          className="object-cover"
          title={t('imageOneAlt') || 'Image One'}
        />
      </div>

      <div
        className={`absolute z-20 p-[5px] rounded-2xl bg-linear-to-b from-[#29B2A4] to-[#022D70] ${locale === 'ar' ? 'translate-x-[20px] translate-y-[20px] sm:translate-x-[30px] sm:translate-y-[30px] lg:translate-x-[40px] lg:translate-y-[40px]' : 'translate-x-[-20px] translate-y-[20px] sm:translate-x-[-30px] sm:translate-y-[30px] lg:translate-x-[-40px] lg:translate-y-[40px]'}`}
      >
        <div className="relative overflow-hidden rounded-xl w-[240px] h-[240px] sm:w-[260px] sm:h-[220px] lg:w-[420px] lg:h-[350px]">
          <AppImage
            src={ImageTwo.src}
            alt={t('imageTwoAlt') || 'Image Two'}
            fill
            className="object-cover hover:scale-105 transition-all duration-300 ease-in-out"
            title={t('imageTwoAlt') || 'Image Two'}
          />
        </div>
      </div>
    </div>
  );
}
