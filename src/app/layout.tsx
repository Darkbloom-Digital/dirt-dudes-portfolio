// src/app/layout.tsx
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Dirt Dudes - Professional Land Clearing & Excavation Services',
  description: 'Professional land clearing and excavation services in Cleveland, TN',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}