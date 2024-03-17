import React from "react";
import Header from "../../components/navbar";
import "./index.css";
import HeroSection from "../../components/heroSection";
import LeftSection from "../../components/leftSection";
function Profile() {
  return (
    <div className="bg-whole">
      <Header />
      <HeroSection /> 
      <LeftSection/>
    </div>
  );
}

export default Profile;
