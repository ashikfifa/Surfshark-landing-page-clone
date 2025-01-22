import { programDetailsData } from "@/mock/mockdata";
import Image from "next/image";

const ProgramCard = () => {
  return (
    <div className=" min-w-full  mt-5 mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-10">
        {programDetailsData?.map((item, index) => (
          <div
            key={index}
            className="text-[1.8rem] max-w-[280px] h-[240px] font-normal leading-[1.44] tracking-[-0.2px] mb-0 text-center shadow-[8px_8px_0_#16191c] gap-4 p-8 flex flex-col items-center justify-center rounded-lg border-2 border-[#16191c] bg-white text-[#16191c]"
          >
            <Image
              width={50}
              height={50}
              src={item?.icon}
              alt="affiliate programs icons"
            />

            <p className="text-[1.2rem] font-normal leading-[1.44] tracking-[-0.2px]">
              {item?.subText}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramCard;
