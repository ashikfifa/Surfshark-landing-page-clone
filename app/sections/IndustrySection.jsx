import Image from "next/image";
import BannerTitle from "../components/BannerTitle";
import modelImg from "@/public/img/yellow-jacket.webp";

const IndustrySection = () => {
  return (
    <div className=" mt-20 mx-auto w-full lg:w-[1230px]">
      <div className="flex flex-wrap gap-0">
        <div className="flex-1 basis-full sm:basis-1/2 mb-8 sm:mb-0">
          <div className=" bg-black text-white p-10 rounded-tl-[55px]">
            <BannerTitle
              title={"Industry-leading performance rewards"}
              subTitle={
                "Commissions starting from 40% on new sales. And that's not all. We are flexible and offer personalized payments or offers based on performance values ​​and traffic generated. A win-win situation!"
              }
            />
          </div>
        </div>

        <div className="flex-1 basis-full sm:basis-1/2 mt-6 sm:mt-0 bg-lightBrown rounded-tr-[55px]">
              <Image className="w-full h-full object-center object-cover" src={modelImg} alt="modelImg" />
        </div>
      </div>
    </div>
  );
};

export default IndustrySection;
