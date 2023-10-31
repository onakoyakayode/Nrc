import React from "react";
import Navbar from "../layout/Navbar";
import Hero from "../components/Hero";
import Service from "../components/Service";
import TopStories from "../components/TopStories";
import CovidSafety from "../components/CovidSafety";
import Boarding from "../components/Boarding";
import Footer from "../layout/Footer";

const Homepage = () => {
  return (
    <div className="block h-auto">
      <Navbar />
      <div className="relative top-[141px]">
        <Hero />
        <Service />
        <TopStories />
        <CovidSafety />
        <Boarding />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
