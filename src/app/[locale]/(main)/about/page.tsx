import { getTranslations } from 'next-intl/server';

import PageHeader from '@/components/PageHeader';
import MedicalSupport from '@/features/Home/MedicalSupport';
import Explore from '@/features/Home/Explore';
import Location from '@/features/About/Location';
import Customers from '@/features/Home/Customers';

export default async function AboutPage() {
  const t = await getTranslations('AboutPage');
  return (
    <>
      <PageHeader title={t('title')} />
      <MedicalSupport />
      <Explore num={9} />
      <Location />
      <Customers />
    </>
  );
}
