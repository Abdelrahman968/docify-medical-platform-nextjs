import type { Metadata } from 'next';
import { IBM_Plex_Sans, Cairo } from 'next/font/google';
import './globals.css';
import { getAppLocale } from '@/lib/locale';

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
});

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic'],
});

export const metadata: Metadata = {
  title: 'Docify',
  description: 'Docify - Medical Platform',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { locale, isRtl } = await getAppLocale();

  return (
    <html
      lang={locale}
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`${cairo.variable} ${ibmPlexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
