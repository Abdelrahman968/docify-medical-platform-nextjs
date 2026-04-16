import Btn from '@/shared/Btn';
import TeamList from './team/TeamList';
import { getTranslations } from 'next-intl/server';

export default async function Team() {
  const t = await getTranslations('Team');
  return (
    <section className="flex items-start justify-center min-h-[550px]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-2">
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t('title') || 'Our Medical Specialists'}
            </h2>
            <div>
              <Btn
                txt={t('viewAllDoctors') || 'View All Doctors'}
                href="/doctors"
                width="w-60"
                height="h-12"
              />
            </div>
          </div>
          <TeamList />
        </div>
      </div>
    </section>
  );
}
