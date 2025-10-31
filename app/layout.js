import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { MenubarItems } from "@/lib/menubarItems";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

const InterFont = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
})

export const metadata = {
  title: "SudoMotion - Bold ideas, shemless execution",
  description: "Bold ideas, shemless execution",
  icons: {
    icon: "/Image/sudoMotionShort.png",
    shortcut: "/favicon.ico",
    apple: "/Image/sudoMotionShort.png"
  }
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${InterFont.variable} flex flex-col min-h-screen justify-between relative`}
      >
        <Navbar/>
        <div className="flex-grow">
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
