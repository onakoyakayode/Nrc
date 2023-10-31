import React from "react";
import Image from "next/image";
import wash from "../assets/Images/wash.png";
import sanitize from "../assets/Images/sanitize.png";
import mask from "../assets/Images/mask.png";

const CovidSafety = () => {
  return (
    <div className="px-[100px]">
      <div className="flex flex-col items-center">
        <h1 className="relative text-[2.5rem] mb-[72px]">
          COVID SAFETY PRECAUTIONS
          <div className="absolute mt-[12px] h-[13px] bg-[#FFFB31] w-[100%]"></div>
        </h1>
        <div className="flex justify-center items-center gap-5 mb-[32px]">
          <div className="w-[350px] h-[524px] rounded-[10px]">
            <Image src={wash} alt="suspend" className="object-cover" />
            <div className="bg-[#8AC5B4] rounded-b-[10px] pt-[16px] pb-[39px] px-[24px] text-center h-[50px]">
              <h5 className="mb-[8px] font-semibold text-[1.1rem] leading-snug">
                Wash your Hands Regularly
              </h5>
            </div>
          </div>
          <div className="w-[350px] h-[524px] rounded-[10px]">
            <Image src={sanitize} alt="freight" className="object-cover" />
            <div className="bg-[#8AC5B4] rounded-b-[10px] pt-[16px] pb-[39px] px-[24px] text-center h-[50px]">
              <h5 className="mb-[8px] font-semibold text-[1.1rem] leading-snug">
                Sanitize your Hands Properly
              </h5>
            </div>
          </div>
          <div className="w-[350px] h-[524px] rounded-[10px]">
            <Image src={mask} alt="passenger" className="object-cover" />
            <div className="bg-[#8AC5B4] rounded-b-[10px] pt-[16px] pb-[39px] px-[24px] text-center h-[50px]">
              <h5 className="mb-[8px] font-semibold text-[1.1rem] leading-snug">
                Always put on your Nose Mask
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidSafety;
