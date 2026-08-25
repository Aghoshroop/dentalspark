import type { Metadata } from "next";
import { Outfit, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

import SmoothScroll from "@/components/SmoothScroll";
import SplashScreen from "@/components/SplashScreen";
import DesktopOnlyGuard from "@/components/DesktopOnlyGuard";

export const metadata: Metadata = {
  title: "Dental Spark | Best Dental Clinic",
  description: "Dental Spark offers advanced dental treatments including implants, RCT, braces and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${playfair.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <DesktopOnlyGuard>
          <SplashScreen />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </DesktopOnlyGuard>
      </body>
    </html>
  );
}
