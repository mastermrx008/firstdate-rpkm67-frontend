import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RPKM',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + 'w-full min-h-screen bg-1'}>
        {children}
      </body>
    </html>
  );
}
