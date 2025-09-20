// src/app/layout.tsx
import { Rubik } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import "../styles/globals.css";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200">
      <body className={`${rubik.className} space-y-16`}>
        {/* <body > */}
        <Navbar />
        <main className="container px-2 mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
