'use client';

import { Link, usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

interface Props {
  links: Array<{ id: number; href: string; txt: string }>;
}

export default function NavLinks({ links }: Props) {
  const t = useTranslations('NavBar');
  const pathname = usePathname();

  const normalizedPath =
    pathname.replace(/^\/(en|ar)/, '').replace(/\/$/, '') || '/';

  return (
    <div className="hidden lg:flex items-center gap-5">
      {links.map(({ id, href, txt }) => (
        <Link
          key={id}
          href={href}
          className={`font-medium hover:font-bold transition-all duration-300 ease-in-out ${
            normalizedPath === href
              ? 'font-bold text-linear-to-b from-[#29B2A4] to-[#022D70]'
              : ''
          }`}
        >
          {t(txt) || txt}
        </Link>
      ))}
    </div>
  );
}
