import React from "react";
import Header from "../../components/navbar";
import "./index.css";
import HeroSection from "../../components/heroSection";
import Collected from "../../components/collected";
function Profile() {
  return (
    <div className="bg-whole">
      <Header />
      <HeroSection />
      <Collected />{" "}
    </div>
  );
}

export default Profile;
