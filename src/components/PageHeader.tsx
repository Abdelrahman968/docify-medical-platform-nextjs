import { Link } from '@/i18n/navigation';
import { getAppLocale } from '@/lib/locale';
import { getTranslations } from 'next-intl/server';

export default async function PageHeader({ title }: { title: string }) {
  const { isRtl, locale } = await getAppLocale();
  const t = await getTranslations('PageHeader');
  return (
    <>
      <section
        className="py-20 h-[320px] flex items-center justify-center w-full text-center text-white"
        style={{
          background:
            'linear-gradient(228.69deg, #29B2A4 2.82%, #022D70 73.37%)',
        }}
      >
        <div className="container">
          <h1 className="lg:text-5xl text-3xl font-bold">{title}</h1>
          <div className="breadcrumb text-center flex items-center justify-center mt-4">
            <ul className="flex items-center gap-2">
              <li>
                <Link className="font-medium" href={`/${locale}`}>
                  {t('home')}
                </Link>
              </li>
              <li> {isRtl ? '‹' : '›'} </li>
              <li className="font-medium">{title}</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="h-10 bg-transparent" />
    </>
  );
}
