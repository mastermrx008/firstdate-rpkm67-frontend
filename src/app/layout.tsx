import type { Metadata } from 'next';
import { Athiti } from 'next/font/google';
import './globals.css';

const athiti = Athiti({
  subsets: ['latin', 'thai'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

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
      <body className={athiti.className + ' w-full min-h-screen bg-1'}>
        {children}
      </body>
    </html>
  );
}
