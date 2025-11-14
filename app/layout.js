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
  title: "SudoMotion - Bold ideas, seamless execution",
  description: "Bold ideas, seamless execution",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/Image/sudoMotionShort.png', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/Image/sudoMotionShort.png' },
      { url: '/Image/sudoMotionShort.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
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
