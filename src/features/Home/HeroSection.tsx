import HeroBg from '@/assets/homePage/Hero-BG-Image.jpg';
import HeroImage from '@/assets/homePage/Hero-Image.svg';
import AppImage from '@/components/AppImage';
import Btn from '@/shared/Btn';
import AvatarGroup from './hero/AvatarGroup';
import StatisticGroup from './hero/StatisticGroup';
import { getTranslations } from 'next-intl/server';
import { getAppLocale } from '@/lib/locale';

export default async function HeroSection() {
  const { isRtl } = await getAppLocale();
  const t = await getTranslations('HeroHomePage');
  return (
    <section
      className="relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${HeroBg.src})`,
        boxShadow: '0px 4px 4px 0px #00000040',
      }}
    >
      <div className="absolute inset-0 z-1 bg-[linear-gradient(228.69deg,#29B2A4_2.82%,#022D70_73.37%)] opacity-80" />

      <div className="px-4 flex flex-col lg:flex-row items-center justify-around z-10 pt-15 lg:pt-0">
        <div className="text-center lg:text-start flex flex-col items-center lg:items-start lg:justify-start gap-4 mb-20 lg:mb-0">
          <p className="font-semibold text-xl text-white">
            {t('subTitle') || 'Your Health Our Priority'}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-[700px] leading-relaxed">
            {t('title') ||
              'Save time and get the medical attention you deserve'}
          </h1>
          <Btn
            txt={t('bookNow') || 'Book Now'}
            href="/"
            height="h-14"
            width="w-60"
          />
        </div>
        <div className="hidden lg:block">
          <AppImage
            src={HeroImage.src}
            alt="Hero Image"
            width={484}
            height={727}
            className={isRtl ? 'scale-x-[-1]' : ''}
          />
        </div>
      </div>
      <div
        className="absolute top-full lg:inset-s-20 -translate-y-1/2  w-[730px] h-[100px] bg-red-500 z-50 border-1 border-white rounded-2xl hidden md:flex items-center justify-around px-8"
        style={{
          background:
            'linear-gradient(5.05deg, #022D70 -68.46%, #29B2A4 187.32%)',
          boxShadow: '0px 4px 4px 0px #00000040',
        }}
      >
        <div className="flex items-center gap-6">
          <AvatarGroup />
          <div className="flex flex-col gap-1">
            <h2 className="text-white font-semibold text-xl">
              {t('trustedBy') || 'Trusted by'}
            </h2>
            <p className="text-white font-normal text-sm">
              {t('satisfiedClients') || '5k+ Satisfied Clients'}
            </p>
          </div>
        </div>
        <StatisticGroup />
      </div>
    </section>
  );
}
