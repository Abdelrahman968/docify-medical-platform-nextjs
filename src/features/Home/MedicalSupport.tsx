import FeaturesList from './support/FeaturesList';
import Btn from '../../shared/Btn';
import FeatureImage from './support/FeatureImage';
import { getTranslations } from 'next-intl/server';

export default async function MedicalSupport() {
  const t = await getTranslations('MedicalSupport');

  return (
    <section className="relative flex flex-col items-center justify-center mt-10 lg:mt-0">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10 items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center lg:text-start mb-4">
            {t('title') || 'Expert Medical Support'}
          </h2>
          <p className="text-black font-medium text-[16px] max-w-[624px] text-center lg:text-start">
            {t('description') ||
              'Our team of experienced specialists is dedicated to providing personalized care that fits your schedule. From easy online booking to professional consultations, we ensure your health is always in the best hands.'}
          </p>
          <div className="mt-7 mx-auto lg:mx-0">
            <FeaturesList />
          </div>
          <div className="flex items-center justify-center lg:justify-start mt-12">
            <Btn
              txt={t('learnMore') || 'Learn More'}
              href="/"
              height="h-12"
              width="w-60"
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <FeatureImage />
        </div>
      </div>
    </section>
  );
}
