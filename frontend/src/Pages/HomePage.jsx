import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Category from "../components/Category";
import Recent from "../components/Recent";
import Tools from "../components/Tools";
import LoginPage from "../components/LoginPage";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Category />
      <Recent />
      <Tools />
    </div>
  );
};

export default HomePage;
