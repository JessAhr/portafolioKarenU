import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "KarenULDev Landing Page 👩‍💻 ",
  description: "Landing page made by KarenULDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${urbanist.variable}  antialiased`}>
          <Navbar />
          <Header />
        {children}
      </body>
    </html>
  );
}
