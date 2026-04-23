import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdallah Sultan | Software Engineer Portfolio",
  description:
    "Portfolio of Abdallah Sultan, Software Engineer, Flutter Developer, and Cybersecurity / Vulnerability Analyst.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-[#05070f] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
