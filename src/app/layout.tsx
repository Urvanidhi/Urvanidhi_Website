import './globals.css';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: 'Urvanidhi Agritech LLP',
  description: 'AgriTech platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Urvanidhi Agritech LLP</title>
        <link rel="icon" href="/favicon_color.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
