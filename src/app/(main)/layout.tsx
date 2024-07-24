import Footer from '@/components/(main)/Footer';
import BaanProvider from '@/context/BaanContext';
import React from 'react';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="bg-1 overflow-auto">
      <BaanProvider>{children}</BaanProvider>
      <Footer />
    </main>
  );
};

export default layout;
