import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Banner from "./sections/Banner";
import IndustrySection from "./sections/IndustrySection";
import ProgramDetails from "./sections/ProgramDetails";
import MoreProduct from "./sections/MoreProduct";
import FrequentlyAsked from "./sections/FrequentlyAsked";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Join the Surfshark Affiliate Program",
  description: "Making money is easy when you promote an award-winning VPN, Antivirus and other online security tools!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
