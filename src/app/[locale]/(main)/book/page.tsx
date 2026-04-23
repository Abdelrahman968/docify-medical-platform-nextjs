import { getTranslations } from 'next-intl/server';

import PageHeader from '@/components/PageHeader';
import BookAppointment from '@/features/Book/BookAppointment';

export default async function BookPage() {
  const t = await getTranslations('BookPage');
  return (
    <>
      <PageHeader title={t('title')} />
      <BookAppointment />
    </>
  );
}
