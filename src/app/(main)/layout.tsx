import Footer from '@/components/(main)/Footer';
import React from 'react';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="bg-1 overflow-auto">
      {children}
      <Footer />
    </main>
  );
};

export default layout;
