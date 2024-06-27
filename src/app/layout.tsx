import type { Metadata } from 'next';
import { Athiti } from 'next/font/google';
import localfont from 'next/font/local';
import './globals.css';
import Footer from '@/components/Footer';

const athiti = Athiti({
  subsets: ['latin', 'thai'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

const theseasons = localfont({
  src: [
    {
      path: '../../public/fonts/theseasons-reg.otf',
      style: 'normal',
    },
    {
      path: '../../public/fonts/theseasons-lt.otf',
      style: 'light',
    },
    {
      path: '../../public/fonts/theseasons-it.otf',
      style: 'italic',
    },
    {
      path: '../../public/fonts/theseasons-ltit.otf',
      style: 'italic light',
    },
    {
      path: '../../public/fonts/theseasons-bd.otf',
      style: 'bold',
    },
    {
      path: '../../public/fonts/theseasons-bdit.otf',
      style: 'italic bold',
    },
  ],
  variable: '--font-theseasons',
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
      <body
        className={
          athiti.className + ` ${theseasons.variable} w-full min-h-screen bg-1`
        }
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
