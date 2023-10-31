import Link from "next/link";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navlinks = () => {
  const navLinks = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Department",
      url: "/department",
    },
    {
      text: "Districts",
      url: "/districts",
    },
    {
      text: "Schedules",
      url: "/schedules",
    },
    {
      text: "Services",
      url: "/services",
    },
    {
      text: "Information Center",
      url: "/information-center",
    },
    {
      text: "Contact",
      url: "/contact",
    },
  ];
  return (
    <nav className="bg-[#54AB91] py-[16px] px-[100px] h-[56px]">
      <ul className="flex justify-between items-center">
        {navLinks.map((link, idx) => (
          <li
            key={idx}
            className="text-[#fff] flex items-center justify-start gap-[4px] h-[24px]"
          >
            <Link href={link.url}>{link.text}</Link>
            <MdKeyboardArrowDown className="text-[#000] scale-110" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navlinks;
