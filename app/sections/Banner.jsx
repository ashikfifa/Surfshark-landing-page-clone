import { Button } from "@/components/ui/button";
import heroBanner from "@/public/img/hero-banner-img.webp";
import Image from "next/image";
import BannerTitle from "../components/BannerTitle";

const Banner = () => {
  return (
    <div className="bg-bannerashColor w-full rounded-80px py-12 sm:py-16 px-4 sm:px-8">
      <div className="flex flex-wrap items-center">
        {/* Left Section: Content */}
        <div className="flex-1 basis-full sm:basis-1/2 px-4 mb-8 sm:mb-0">
          <Button variant="bannerFirstBtn">Promote Surfshark</Button>
          <BannerTitle
            title={"Join the Surfshark Affiliate Program"}
            subTitle={
              "Making money is easy when you promote an award-winning VPN,Antivirus, and other online security tools!"
            }
          />
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="affiliate" className=" py-5">
              Become an Affiliate
            </Button>
            <Button className=" py-5">Affiliate Login</Button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex-1 basis-full sm:basis-1/2 px-4 mt-6 sm:mt-0">
          <Image
            src={heroBanner}
            alt="heroBanner"
            className="max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
