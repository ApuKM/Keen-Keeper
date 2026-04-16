import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import InteractionContextProvider from "@/lib/context";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen Keeper",
  description: "The list of kacher manushjon",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <InteractionContextProvider>
          <Navbar />
          {children}
          <Footer />
        </InteractionContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
