import { NextIntlClientProvider } from 'next-intl';
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroUI from '@/providers/HeroUI';
import HtmlDirectionSync from '@/components/HtmlDirectionSync';
import Footer from '@/components/Footer';

interface AppProviderProps {
  children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <NextIntlClientProvider>
      <HeroUI>
        <HtmlDirectionSync />
        <NavBar />
        {children}
        <Footer />
      </HeroUI>
    </NextIntlClientProvider>
  );
}

export default AppProvider;
