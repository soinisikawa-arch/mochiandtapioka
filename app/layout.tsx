import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'もちっとこいよ｜台湾ネギ餅とタピオカ専門店',
  description: '焼きたての台湾ネギ餅と、店内炊きのもちもちタピオカ。台湾の味を気軽に楽しめる専門店です。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body className={geist.variable}>{children}</body></html>;
}
