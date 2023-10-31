import Image from "next/image";
import React from "react";
import suspend from "../assets/Images/suspend.png";
import eTicket from "../assets/Images/e-ticket.png";
import invite from "../assets/Images/pre.png";

const TopStories = () => {
  return (
    <div className="py-[50px] px-[100px]">
      <div className="flex flex-col items-center">
        <h1 className="text-[2.5rem] font-bold uppercase relative mb-[45px]">
          Top Stories
          <div className="absolute left-0 mt-3 h-3 bg-[#FFFB31] w-[100%]"></div>
        </h1>
        <p className="mb-[72px] leading-snug">
          All the latest from the railway corporation
        </p>
        <div className="flex justify-center items-center gap-5 mb-[102px]">
          <div className="w-[350px] h-[524px] rounded-[10px]">
            <Image src={suspend} alt="suspend" className="object-cover" />
            <div className="bg-[#8AC5B4] rounded-b-[10px] pt-[24px] pb-[39px] pl-[24px] h-[180px]">
              <h5 className="mb-[8px] font-semibold text-[1.1rem] leading-snug">
                Railway Suspends Erring staffs
              </h5>
              <p className="text-[14px] w-[80%] font-light">
                We provide an easy and comfortable travel experience including
                guided tourism, excursions, and special train services.
              </p>
            </div>
          </div>
          <div className="w-[350px] h-[524px] rounded-[10px]">
            <Image src={invite} alt="freight" className="object-cover" />
            <div className="bg-[#8AC5B4] rounded-b-[10px] pt-[24px] pb-[39px] pl-[24px] h-[180px]">
              <h5 className="mb-[8px] font-semibold text-[1.1rem] leading-snug">
                Invitation for Pre-qualification
              </h5>
              <p className="text-[14px] w-[80%] font-light">
                Our freight services provides a very easy and affordable way to
                move goods in both large and small quantities.
              </p>
            </div>
          </div>
          <div className="w-[350px] h-[524px] rounded-[10px]">
            <Image src={eTicket} alt="passenger" className="object-cover" />
            <div className="bg-[#8AC5B4] rounded-b-[10px] pt-[24px] pb-[39px] pl-[24px] h-[180px]">
              <h5 className="mb-[8px] font-semibold text-[1.1rem] leading-snug">
                E-ticketing Begins Next week
              </h5>
              <p className="text-[14px] w-[80%] font-light">
                Our train service offers full air conditioning for first class
                services or sleeper with luxury restaurants for both short and
                long distance travels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStories;
