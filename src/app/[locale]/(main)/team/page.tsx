import { getTranslations } from 'next-intl/server';

import PageHeader from '@/components/PageHeader';
import Team from '@/features/Home/Team';

export default async function TeamPage() {
  const t = await getTranslations('TeamPage');
  return (
    <>
      <PageHeader title={t('title')} />
      <Team />
    </>
  );
}
