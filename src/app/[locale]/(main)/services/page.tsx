import { getTranslations } from 'next-intl/server';

import PageHeader from '@/components/PageHeader';
import Services from '@/features/Home/Services';

export default async function ServicesPage() {
  const t = await getTranslations('ServicesPage');
  return (
    <>
      <PageHeader title={t('title')} />
      <Services />
    </>
  );
}
