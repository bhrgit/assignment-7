import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Header  from "../components/Header";

import Footer from "../components/Footer";
import toast, { Toaster } from 'react-hot-toast';
import Navbar from "@/components/Navbar";



const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hindSiliguri.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header></Header>
        <Navbar></Navbar>
        

      <main className="max-w-7xl mx-auto py-10">{children}</main>


      <Footer></Footer>

      <Toaster position="top-right" 
      toastOptions={{className: '', style: {background: '#363636', color: '#fff', fontSize: '14px', borderRadius: '8px', padding: '10px 20px'
        },
    success: { duration: 3000, iconTheme: { primary: 'green', secondary: 'black' } },
    error: { duration: 3000, iconTheme: { primary: 'red', secondary: 'black' } },
    }} />

      </body>
    </html>
  );
}
