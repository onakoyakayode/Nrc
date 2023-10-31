import React from "react";
import appStore from "../assets/Images/appStore.png";
import playStore from "../assets/Images/playStore.png";
import Link from "next/link";
import Image from "next/image";
import rating from "../assets/Icons/rating.png";
import Client from "../layout/Client";

const Hero = () => {
  return (
    <div className="relative w-[100%]">
      <div className="h-[100dvh] bg-cover bg-[url('../assets/Images/NRCHero.png')] bg-center flex justify-start items-center px-[100px]">
        <div className="w-[627px] h-[417px]">
          <h1 className="text-[3rem] leading-tight font-bold mb-[24px]">
            Experience Affordable, Reliable, Safe Railway Excellence!
          </h1>
          <p className="text-[1.3rem] w-[90%] leading-normal mb-[24px]">
            We relentlessly prioritize modernization, customer comfort, and
            safety in every mile we travel.
          </p>
          <div className="flex justify-start items-center gap-[16px] mb-[16px]">
            <Link href="/">
              <Image src={playStore} alt="playstore" />
            </Link>
            <Link href="/">
              <Image src={appStore} alt="appStore" />
            </Link>
          </div>
          <div className="flex justify-start items-center gap-2">
            <p>4.9/5.0</p>
            <Image src={rating} alt="rating" />
            <p>based on 1923 reviews</p>
          </div>
        </div>
      </div>
      <Client />
    </div>
  );
};

export default Hero;
