import { getLocale } from 'next-intl/server';

export function isRtlLocale(locale: string) {
  return locale === 'ar';
}

export async function getAppLocale() {
  const locale = await getLocale();

  return {
    locale,
    isRtl: isRtlLocale(locale),
  };
}
