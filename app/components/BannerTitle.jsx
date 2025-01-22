import React from "react";

const BannerTitle = (props) => {
  const { title, subTitle } = props;
  return (
    <div>
      <p className="font-bold leading-[1.29] tracking-[-0.5px] text-[1.6rem] sm:text-[2.8rem] md:text-[3.6rem] mb-4 mt-5 sm:mt-3">
        {title}
      </p>
      <p className="font-normal leading-[1.5] tracking-[-0.2px] text-[1rem] sm:text-[1.3rem] mb-8">
        {subTitle}
      </p>
    </div>
  );
};

export default BannerTitle;
