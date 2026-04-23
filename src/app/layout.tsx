import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdallah Sultan | Portfolio",
  description:
    "Abdallah Sultan — Flutter Developer in Cairo, Egypt. Building robust mobile and web solutions.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cyber bg-grid">
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-80">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(203,172,249,0.18),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(109,40,217,0.16),transparent_45%)]" />
        </div>
        {children}
      </body>
    </html>
  );
}
