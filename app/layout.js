import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProgramDetails from "./components/ProgramDetails";

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
        className={`${poppins.variable} antialiased min-h-screen px-10`}
      >
        <Navbar/>
        <Banner/>
        <ProgramDetails/>
        {children}
      </body>
    </html>
  );
}
