import { Button } from "@/components/ui/button";
import heroBanner from "@/public/img/hero-banner-img.webp";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-bannerashColor w-full rounded-80px py-12 sm:py-16 px-4 sm:px-8">
      <div className="flex flex-wrap items-center">
        {/* Left Section: Content */}
        <div className="flex-1 basis-full sm:basis-1/2 px-4 mb-8 sm:mb-0">
          <Button variant="bannerFirstBtn">Promote Surfshark</Button>
          <p className="font-bold leading-[1.29] tracking-[-0.5px] text-[1.6rem] sm:text-[2.8rem] md:text-[3.6rem] mb-4 mt-5 sm:mt-3">
            Join the Surfshark Affiliate Program
          </p>
          <p className="font-normal leading-[1.5] tracking-[-0.2px] text-[1rem] sm:text-[1.3rem] mb-8 text-left">
            Making money is easy when you promote an award-winning VPN,
            Antivirus, and other online security tools!
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Button>Become an Affiliate</Button>
            <Button>Affiliate Login</Button>
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
