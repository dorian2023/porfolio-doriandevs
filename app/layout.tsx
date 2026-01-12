import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { CoverParticles } from "@/components/cover-particles";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import NavbarBajo from "@/components/navbar"
import Header from "@/components/header";

const urbanistSans= Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DorianDevelopers & Design",
  description: "Creativity, innovation and technical skills in web development and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Agregamos suppressHydrationWarning aquí ⬇️
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanistSans.className}`}>
        <CoverParticles/>
        <NavbarBajo />
        <Header />
        {children}
      </body>
    </html>
  );
}



// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${urbanistSans.className}`}>
       
//       <CoverParticles/>
//         <NavbarBajo />
//         <Header />
//         {children}
   
//       </body>
//     </html>
//   );
// }