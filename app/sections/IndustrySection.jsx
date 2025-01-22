import Image from "next/image";
import BannerTitle from "../components/BannerTitle";
import modelImg from "@/public/img/yellow-jacket.webp";
import handImg from "@/public/img/hands.svg";
import earthImg from "@/public/img/earth.svg";
import devicesImg from "@/public/img/devices.svg";

const IndustrySection = () => {
  return (
    <div className="mt-20 mx-auto px-14  w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-[auto_auto_auto]">
        {/* First Row */}
        <div className="bg-black text-white p-10 rounded-tl-[55px]">
          <BannerTitle
            title={"Industry-leading performance rewards"}
            subTitle={
              "Commissions starting from 40% on new sales. And that's not all. We are flexible and offer personalized payments or offers based on performance values ​​and traffic generated. A win-win situation!"
            }
          />
        </div>
        <div className="bg-lightBrown rounded-tr-[55px]">
          <Image
            className="w-full h-full object-center object-cover"
            src={modelImg}
            alt="modelImg"
          />
        </div>

        {/* Second Row */}
        <div className="bg-[#1ebfbf] p-10 rounded-bl-[55px] row-span-2">
          <Image className="object-center" src={devicesImg} alt="device image" />

          <BannerTitle
            title={"Promote on PC and mobile"}
            subTitle={
              "Our products cover all devices and so does our affiliate program. Promote Surfshark on PC and mobile, wherever it suits you best."
            }
          />
        </div>
        <div className="bg-[#f9f9f9]">
          <div className=" flex items-center gap-10 p-8">
            <Image
              className="hidden lg:block object-center"
              src={handImg}
              alt="hand Img"
            />

            <div>
              <BannerTitle
                title={"Personal Account Manager"}
                subTitle={
                  "Get support from a personal account manager who will provide sales and integration advice to help you succeed."
                }
                forSmallDiv={true}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#eee] rounded-br-[55px]">
          <div className=" flex items-center gap-10 p-8">
            <div>
              <BannerTitle
                title={"Worldwide availability"}
                subTitle={
                  "Surfshark promotions support all languages! Talk about us in your native language and reach a wider audience."
                }
                forSmallDiv={true}
              />
            </div>

            <Image
              className="hidden lg:block object-center "
              src={earthImg}
              alt="hand Img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySection;
