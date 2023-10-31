import React from "react";
import Cecc from "../assets/Images/CCECC.png";
import dangote from "../assets/Images/Dangote.png";
import lafarge from "../assets/Images/Lafarge.png";
import oando from "../assets/Images/Oando.png";
import Image from "next/image";

const Client = () => {
  return (
    <div className="absolute bottom-[-15%] left-[15%] z-0 w-[70%] h-[207px] m-auto bg-[#DDE3E2] shadow-xl rounded-[10px] px-[173px] py-[15px]">
      <div className="flex flex-col items-center">
        <h3 className="font-semibold text-[1.1rem] mb-4">Our Clients</h3>
        <div className="flex justify-center items-center gap-[70px] object-cover">
          <Image src={Cecc} alt="cecc" />
          <Image src={dangote} alt="dangote" />
          <Image src={oando} alt="oando" />
          <Image src={lafarge} alt="lafarge" />
        </div>
      </div>
    </div>
  );
};

export default Client;
