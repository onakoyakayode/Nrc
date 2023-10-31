import React from "react";
import Logo from "../assets/Images/nrcLogo.png";
import Image from "next/image";
import Link from "next/link";
import playStore from "../assets/Images/playStore.png";
import appStore from "../assets/Images/appStore.png";
import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="h-[335px] w-[100%] bg-[#00815B] px-[100px] py-[28px]">
      <Link href="/">
        <Image src={Logo} alt="Nrc" className="mb-[32px]" />
      </Link>
      <div className="flex justify-start items-start gap-[114px] text-[#fff]">
        <div className="flex flex-col items-start">
          <h3 className="mb-[24px] text-[1.2rem]">Get Our App</h3>
          <Image src={playStore} alt="google-playstore" className="mb-[16px]" />
          <Image src={appStore} alt="appStore" />
        </div>
        <div>
          <h3 className="mb-[24px] text-[1.2rem]">Our Services</h3>
          <ul className="flex flex-col items-start gap-4 text-[0.9rem] font-light">
            <Link href="/">Excursions and Tourism</Link>
            <Link href="/">Freight Services</Link>
            <Link href="/">Passenger Service</Link>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="mb-[24px] text-[1.2rem]">Contact</h3>
          <ul className="text-[0.9rem] font-light flex flex-col items-start gap-4">
            <p>1, Okeira Road, Railway Compound, Ebute-Metta, Lagos.</p>
            <Link href="tel:+(234)9060030422">+(234) 90 600 30 422</Link>
            <Link href="mailto:info@nrc.gov.ng">info@nrc.gov.ng</Link>
            <div className="flex items-center justify-start gap-3">
              <Link href="/">
                <AiFillFacebook className="w-[24px] h-[24px] hover:scale-125 transition-all duration-200 ease-in-out" />
              </Link>
              <Link href="/">
                <AiFillYoutube className="w-[24px] h-[24px] hover:scale-125 transition-all duration-200 ease-in-out" />
              </Link>
              <Link href="/">
                <AiFillTwitterSquare className="w-[24px] h-[24px] hover:scale-125 transition-all duration-200 ease-in-out" />
              </Link>
              <Link href="/">
                <AiFillInstagram className="w-[24px] h-[24px] hover:scale-125 transition-all duration-200 ease-in-out" />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
