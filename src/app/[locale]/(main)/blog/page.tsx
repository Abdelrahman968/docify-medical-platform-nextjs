import { getTranslations } from 'next-intl/server';

import PageHeader from '@/components/PageHeader';

export default async function BlogPage() {
  const t = await getTranslations('BlogPage');
  return (
    <>
      <PageHeader title={t('title')} />
      <div className="container mx-auto flex items-center justify-center h-screen">
        <p className="text-2xl font-bold">Coming Soon</p>
      </div>
    </>
  );
}
