import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Urvanidhi",
  description: "AgriTech platform",
  icons: {
    icon: "/favicon_color.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.className}`}>
        {children}
      </body>
    </html>
  );
}