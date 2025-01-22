import React from "react";

const BannerTitle = (props) => {
  const { title, subTitle, forSmallDiv } = props;
  return (
    <div>
      <p
        className={`font-bold leading-[1.29] tracking-[-0.5px] mb-4 mt-5 sm:mt-3 ${
          forSmallDiv
            ? "md:text-[1rem] lg:text-[1.6rem]"
            : "md:text-[1.6rem] lg:text-[2.6rem]"
        }`}
      >
        {title}
      </p>
      <p
        className={`font-normal leading-[1.5] tracking-[-0.2px] mb-8 ${
          forSmallDiv
            ? "text-[0.9rem] sm:text-[1rem]"
            : "text-[1rem] sm:text-[1.3rem]"
        }`}
      >
        {subTitle}
      </p>
    </div>
  );
};

export default BannerTitle;
