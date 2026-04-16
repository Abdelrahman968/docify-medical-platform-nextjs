'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

import ArFlag from '@/assets/langFlag/ar.svg';
import EnFlag from '@/assets/langFlag/en.svg';

import AppImage from '@/components/AppImage';
import { Button } from '@heroui/react';

export default function LangSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    router.replace(pathname, { locale: locale === 'en' ? 'ar' : 'en' });
  };

  return (
    <Button
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-white-500 transition-all duration-180 hover:bg-transparent hover:scale-102"
      onPress={toggle}
      variant="light"
      isIconOnly
    >
      <AppImage
        src={locale === 'en' ? EnFlag : ArFlag}
        alt={locale === 'en' ? 'English' : 'Arabic'}
        width={30}
        height={30}
        title={locale === 'en' ? 'English' : 'Arabic'}
      />
    </Button>
  );
}
