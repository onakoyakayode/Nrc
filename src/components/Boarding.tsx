import React from "react";

const Boarding = () => {
  const loactions = [
    "Lagos",
    "Warri",
    "Ibadan",
    "Kafanchan",
    "Enugu",
    "Ogun",
    "Kaduna",
    "Abuja",
    "Zaria",
    "Bauchi",
  ];

  return (
    <div className="h-[248px] bg-[#54AB91] px-[200px] py-[24px] flex flex-col items-center">
      <h1 className="text-[2.2rem] leading-tight font-semibold text-[#fff] mb-[48px]">
        NRC BOARDING LOCATIONS
      </h1>
      <ul className="w-[99%] m-auto flex items-center justify-start flex-wrap gap-x-[130px]">
        {loactions.map((location, idx) => (
          <li
            className="mb-[25px] text-[#fff] relative uppercase w-[100px]"
            key={idx}
          >
            {location}
            <p className="absolute h-[60%] top-[20%] left-[-8px] w-[5px] bg-[#FFFB31]"></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Boarding;
