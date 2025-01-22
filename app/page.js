import Navbar from "./components/Navbar";
import Banner from "./sections/Banner";
import FrequentlyAsked from "./sections/FrequentlyAsked";
import IndustrySection from "./sections/IndustrySection";
import MoreProduct from "./sections/MoreProduct";
import ProgramDetails from "./sections/ProgramDetails";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ProgramDetails />
      <IndustrySection />
      <MoreProduct />
      <FrequentlyAsked />
    </div>
  );
}
