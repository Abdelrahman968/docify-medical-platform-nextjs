import AppImage from '@/components/AppImage';
import Logo from '@/assets/logo/main-logo.svg';
import { Link } from '@/i18n/navigation';
import LangSwitcher from '@/components/LangSwitcher';
import Btn from '@/shared/Btn';
import { getTranslations } from 'next-intl/server';
import MobileMenu from '@/features/NavBar/MobileMenu';
import NavLinks from '@/features/NavBar/NavLinks';

const links = [
  { id: 1, href: '/', txt: 'Home' },
  { id: 2, href: '/about', txt: 'About Us' },
  { id: 3, href: '/services', txt: 'Services' },
  { id: 5, href: '/blog', txt: 'Blog' },
  { id: 4, href: '/team', txt: 'Our Team' },
  { id: 6, href: '/book', txt: 'Book Appointment' },
];

export default async function NavBar() {
  const t = await getTranslations('NavBar');
  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-99 flex items-center justify-between px-4 md:px-8 lg:px-10 xl:px-30 h-20 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="hover:scale-102 transition-all duration-300 ease-in-out"
          >
            <AppImage
              src={Logo}
              alt={t('LogoAlt') || 'Docify Logo'}
              width={114}
              height={28}
            />
          </Link>
          <div className="hidden lg:block w-[28px] h-0 border-[1.5px] border-black opacity-100 rotate-90" />
          <NavLinks links={links} />
        </div>
        <div className="flex items-center gap-4">
          <div className="lg:hidden">
            <MobileMenu links={links} />
          </div>
          <div className="hidden lg:block">
            <LangSwitcher />
          </div>
          <div className="hidden sm:block">
            <Btn txt={t('Login') || 'Login'} href="/login" />
          </div>
        </div>
      </nav>
      <div className="bg-transparent h-20 w-full" />
    </>
  );
}
