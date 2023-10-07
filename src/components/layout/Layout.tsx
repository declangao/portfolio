import React, { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from '../ui/BackToTop';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={`${inter.className} flex flex-col h-screen`}>
      <Navbar />
      <main className="flex-shrink-0 container mx-auto px-4 pt-20 md:px-8 overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
