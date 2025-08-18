import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata = {
  title: {
    default: "Ninja | Home", // Fallback if no title is set in child pages
    template: "Ninja | %s",  // Adds "Ninja | " prefix to child page titles
  },
  description: "A list of coding ninjas",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="content">
        <Navbar />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
