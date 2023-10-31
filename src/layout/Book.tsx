import Image from "next/image";
import React from "react";
import NRCLogo from "../assets/Images/nrcLogo.png";
import Link from "next/link";

const Book = () => {
  return (
    <div className="h-[91px] bg-[#00815B] py-[18.18px] px-[100px] flex justify-between items-center">
      <Link href="/">
        <Image src={NRCLogo} alt="nigeria-railway" />
      </Link>
      <button className="bg-[#FF9C33] w-[117px] h-[48px] flex items-center justify-center text-[#fff] rounded-[5px] font-medium">
        Book Now
      </button>
    </div>
  );
};

export default Book;
