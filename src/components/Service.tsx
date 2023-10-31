import Image from "next/image";
import React from "react";
import tourism from "../assets/Images/tourism.png";
import freight from "../assets/Images/freight.png";
import passenger from "../assets/Images/passenger.png";

const Service = () => {
  return (
    <div className="">
      <div className="pt-[277px] px-[100px] pb-[100px]">
        <h1 className="font-bold text-[1.8rem] leading-snug text-center mb-[72px]">
          Our Quality Services
        </h1>
        <div className="flex justify-center items-center gap-5 mb-[152px]">
          <div className="w-[350px] h-[524px] rounded-[10px]">
            <Image src={tourism} alt="tourism" className="object-cover" />
            <div className="bg-[#8AC5B4] rounded-b-[10px] pt-[24px] pb-[39px] pl-[24px] h-[180px]">
              <h5 className="mb-[8px] font-semibold text-[1.2rem] leading-snug">
                Excursions and Tourism
              </h5>
              <p className="text-[14px] w-[80%] font-light">
                We provide an easy and comfortable travel experience including
                guided tourism, excursions, and special train services.
              </p>
            </div>
          </div>
          <div className="w-[350px] h-[524px] rounded-[10px]">
            <Image src={freight} alt="freight" className="object-cover" />
            <div className="bg-[#8AC5B4] rounded-b-[10px] pt-[24px] pb-[39px] pl-[24px] h-[180px]">
              <h5 className="mb-[8px] font-semibold text-[1.2rem] leading-snug">
                Freight Services
              </h5>
              <p className="text-[14px] w-[80%] font-light">
                Our freight services provides a very easy and affordable way to
                move goods in both large and small quantities.
              </p>
            </div>
          </div>
          <div className="w-[350px] h-[524px] rounded-[10px]">
            <Image src={passenger} alt="passenger" className="object-cover" />
            <div className="bg-[#8AC5B4] rounded-b-[10px] pt-[24px] pb-[39px] pl-[24px] h-[180px]">
              <h5 className="mb-[8px] font-semibold text-[1.2rem] leading-snug">
                Passenger Service
              </h5>
              <p className="text-[14px] w-[80%] font-light">
                Our train service offers full air conditioning for first class
                services or sleeper with luxury restaurants for both short and
                long distance travels.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[414px] w-[100%] shadow-xl flex justify-start items-start">
          <div className="h-[100%] w-[60%] bg-cover bg-center bg-[url('../assets/Images/history.png')] rounded-l-xl"></div>
          <div className="bg-[#DDE3E2] w-[40%] h-[100%] rounded-e-xl py-[30px] px-[60px]">
            <h1 className="text-[1.8rem] font-bold relative mb-[50px]">
              Our Brief History
              <div className="bg-[#FFFB31] h-[13px] w-[50%] absolute mt-[10px]"></div>
            </h1>
            <p className="text-[1rem] leading-[1.7] mb-[24px]">
              The Nigerian Railway System pioneered the rapid opening up of the
              geographical area called Nigeria. The Railway System, therefore
              represents the oldest modern form of transportation in Nigeria.
              Railway development in Nigeria was initiated by private
              interest.....
            </p>
            <button className="w-[180px] h-[60px] text-[#fff] text-[15px] font-medium bg-[#FF9C33] rounded-[5px]">
              Find out More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
