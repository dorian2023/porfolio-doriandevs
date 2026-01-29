import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import HeroParticles from "@/components/sections/hero/HeroParticles";
import Navbar from "@/components/layout/Navbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const urbanistSans = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dorian Developers & Design",
  description: "Creativity, innovation and technical skills in web development and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${urbanistSans.className} bg-[#09070f] text-white antialiased`}
        suppressHydrationWarning
      >
        <HeroParticles />
        <Header />
        <main>{children}</main>
        <Footer />
        <Navbar />
      </body>
    </html>
  );
}