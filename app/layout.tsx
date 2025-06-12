import type { Metadata } from "next";
import { Inter, Allura } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const allura = Allura({
  variable: "--font-allura",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${allura.variable}`}>
      <body className="font-sans antialiasedtext-lg">
        {children}
      </body>
    </html>
  );
}
