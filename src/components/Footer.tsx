import BGImage from '@/assets/footer/Footer-BG.jpg';
import Logo from '@/assets/footer/logo-footer.svg';

import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AppImage from './AppImage';
import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('Footer');
  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: `url(${BGImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#0A3D62] via-[#0A5C6D] to-[#008080] opacity-90" />

      <div className="relative container mx-auto px-6 py-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <AppImage src={Logo.src} alt="DOCIFY" width={127} height={32} />
              {/* <span className="text-2xl font-bold tracking-wider">DOCIFY</span> */}
            </div>

            <p className="text-gray-200 text-sm leading-relaxed max-w-xs">
              {t('description')}
            </p>

            <div className="flex gap-5 text-2xl">
              <a
                href="#"
                className="hover:text-[#1877F2] hover:scale-110 transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-[#25D366] hover:scale-110 transition-all duration-300"
              >
                <FaWhatsapp />
              </a>
              <a
                href="#"
                className="hover:text-[#E4405F] hover:scale-110 transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">{t('Useful_Links')}</h3>
            <ul className="space-y-3 text-sm">
              {[
                'About_Us',
                'Blogs',
                'Services',
                'Our_Team',
                'Book_Appointment',
              ].map(link => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {t(link)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">{t('Contact_us')}</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3 group">
                <FaPhoneAlt className="mt-1 text-lg group-hover:text-teal-300 transition-colors" />
                <a
                  href="tel:+200123456789"
                  className="hover:text-white transition-colors"
                >
                  +20 012 345 6789
                </a>
              </li>

              <li className="flex items-start gap-3 group">
                <FaEnvelope className="mt-1 text-lg group-hover:text-teal-300 transition-colors" />
                <a
                  href="mailto:Docify@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Docify@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3 group">
                <FaMapMarkerAlt className="mt-1 text-lg group-hover:text-teal-300 transition-colors" />
                <div className="text-gray-200">
                  {t('address')}
                  <br />
                  {t('address2')}
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">{t('Opening_Hours')}</h3>
            <div className="space-y-4 text-sm">
              <div>
                <span className="block text-gray-300">{t('days')}</span>
                <span className="text-teal-300 font-medium">{t('time')}</span>
              </div>
              <div className="text-teal-300 font-medium">{t('emergency')}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-5 text-center text-xs text-white z-10 relative">
        © {new Date().getFullYear()} {t('DevelopedName')}
      </div>
    </footer>
  );
}
