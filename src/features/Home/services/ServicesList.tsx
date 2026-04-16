import AppImage from '@/components/AppImage';
import { ServicesList as ServicesListData } from '@/data/servicesList.data';
import { getLocale, getTranslations } from 'next-intl/server';

export default async function ServicesList() {
  const total = ServicesListData.length;
  const t = await getTranslations('Services');
  const locale = await getLocale();

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border border-[#B6B9C7] rounded-2xl overflow-hidden"
      dir="ltr"
    >
      {ServicesListData.map(({ id, img, titleKey, descriptionKey }, index) => {
        const isLastMdCol = (index + 1) % 2 === 0;
        const isLastLgCol = (index + 1) % 3 === 0;
        const isLastXlCol = (index + 1) % 4 === 0;

        const isLastMdRow = index >= total - 2;
        const isLastLgRow = index >= total - 3;
        const isLastXlRow = index >= total - 4;

        return (
          <div
            key={id}
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
            className={[
              'flex flex-col gap-5 justify-start items-center text-center px-6 py-7',
              'border-r-0',
              isLastMdCol ? 'md:border-r-0' : 'md:border-r',
              isLastLgCol ? 'lg:border-r-0' : 'lg:border-r',
              isLastXlCol ? 'xl:border-r-0' : 'xl:border-r',
              index === total - 1 ? 'border-b-0' : 'border-b border-[#B6B9C7]',
              isLastMdRow ? 'md:border-b-0' : 'md:border-b',
              isLastLgRow ? 'lg:border-b-0' : 'lg:border-b',
              isLastXlRow ? 'xl:border-b-0' : 'xl:border-b',
            ].join(' ')}
          >
            <div className="w-20 h-20">
              <AppImage
                src={img.src}
                alt={t(titleKey)}
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-xl font-semibold text-[#022D70]">
              {t(titleKey)}
            </h3>
            <p className="text-base font-normal">{t(descriptionKey)}</p>
          </div>
        );
      })}
    </div>
  );
}
