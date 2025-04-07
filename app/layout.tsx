import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { FlowbiteInit } from './components/FlowbiteInit';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Flowbite Design',
  description: 'UI created from Flowbite components based on Figma design',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <FlowbiteInit />
        {children}
      </body>
    </html>
  );
} 