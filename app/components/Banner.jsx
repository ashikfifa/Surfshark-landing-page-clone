import { Button } from "@/components/ui/button";
import React from "react";

const Banner = () => {
  return (
    <div className=" bg-slate-300 rounded-3xl h-screen  mt-5">
      <div className=" flex  h-full items-center">
      <div className="flex-1 basis-1/2 px-4">
      <Button>Button</Button>
      <p>Join the Surfshark Affiliate Program</p>
      </div>
      <div className="flex-1 basis-1/2 px-4">rabbi</div>
      </div>
    </div>
  );
};

export default Banner;
