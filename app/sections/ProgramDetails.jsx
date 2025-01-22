import { Button } from "@/components/ui/button";
import ProgramCard from "../components/ProgramCard";

const ProgramDetails = () => {
  return (
    <div className=" mt-20">
      <p className="font-bold leading-[1.29] tracking-[-0.5px] text-[1.6rem] text-center sm:text-[2.1rem] md:text-[3.1rem] mb-4 mt-5 sm:mt-3">
        Surfshark Affiliate Program Details
      </p>
      <p className="font-normal leading-[1.5] tracking-[-0.2px] text-[1rem] sm:text-[1.3rem] mb-8 text-center">
        Technical details and benefits to know about our program
      </p>

      <ProgramCard />
      <div className=" flex items-center justify-center mt-10">
        {" "}
        <Button variant="affiliate" className=" py-5">
          Become an Affiliate
        </Button>{" "}
      </div>
    </div>
  );
};

export default ProgramDetails;
