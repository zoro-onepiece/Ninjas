import { Geist, Geist_Mono } from "next/font/google";
import { Cinzel, Orbitron } from "next/font/google"; // Import fonts

import "./globals.css";
import Navbar from "./components/navbar";  // Import Navbar
import Footer from "./components/footer";  // Import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const cinzel = Cinzel({
  variable: "--font-ninja",
  subsets: ["latin"],
  weight: ['400', '700']
});

const orbitron = Orbitron({
  variable: "--font-tech",
  subsets: ["latin"],
  weight: ['400', '700']
});

export const metadata = {
  title: {
    default: "Ninja Core  | Home", // Fallback if no title is set in child pages
    template: "Ninja Core | %s",  // Adds "Ninja | " prefix to child page titles
  },
  description: "A list of coding ninjas",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${orbitron.variable}`}>
        <div className="content">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
