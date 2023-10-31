import React from "react";
import Book from "./Book";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-[100%] z-10">
      <Book />
      <Navlinks />
    </div>
  );
};

export default Navbar;
