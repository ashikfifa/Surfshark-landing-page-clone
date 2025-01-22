import Image from "next/image";
import BannerTitle from "../components/BannerTitle";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import incogni from '@/public/img/incogni.webp'

const MoreProduct = () => {
  return (
    <div className=" bg-[#eee] mt-20">
      <div className="p-14 py-20">
        <div className=" mx-auto w-full">
          <div className="flex flex-wrap gap-0">
            <div className="flex-1 bg-black basis-full sm:basis-1/2 mb-8 sm:mb-0">
              <div className="  text-white p-20 rounded-tl-[55px] rounded-bl-[55px]">
                  <Button variant="ghostBtn">INCOGNITIONS</Button>
                <BannerTitle
                  title={"Looking for more products to promote?"}
                  subTitle={
                    "Look no further! Become an Incogni Affiliate and discover the service that fights for your data rights. Teach your audience to take their data off the market and become more private online."
                  }
                />
                <p className=" mt-20 text-white text-lg font-normal hover:underline cursor-pointer flex items-center gap-2">Learn more about Incogni <FaArrowRight />
                </p>
              </div>
            </div>

            <div className="flex-1 basis-full sm:basis-1/2 mt-6 sm:mt-0 bg-[#1ebfbf] rounded-tr-[55px] rounded-br-[55px]">
              <Image
                className="object-center p-10"
                src={incogni}
                alt="modelImg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreProduct;
