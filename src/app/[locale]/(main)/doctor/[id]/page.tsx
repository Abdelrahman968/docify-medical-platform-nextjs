import { getTranslations } from 'next-intl/server';
import { doctorList } from '@/data/doctorList.data';

import PageHeader from '@/components/PageHeader';
import MainSection from '@/features/Doctor/MainSection';
import Team from '@/features/Home/Team';

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const doctor = doctorList.find(
    doctor => doctor.id.toString() === id.toString()
  );

  const team = await getTranslations('Team');

  if (!doctor) {
    return (
      <>
        <PageHeader title="Doctor Not Found" />
      </>
    );
  }

  return (
    <>
      <PageHeader title={team(doctor.name)} />
      <MainSection doctorData={doctor} />
      <Team />
    </>
  );
}
