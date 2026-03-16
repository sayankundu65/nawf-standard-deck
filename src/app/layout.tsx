import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "NAWF — AI 360° Content Arsenal | The Overlap",
  description: "Where reality meets AI. NAWF delivers cinematic storytelling, AI influencers, and full-stack content production at scale.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${spaceMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
