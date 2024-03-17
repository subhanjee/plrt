import React from "react";
import Header from "../../components/navbar";
import "./index.css";
import HeroSection from "../../components/heroSection";
import Collected from "../../components/collected";
import Footer from "../../components/footer";
function Profile() {
  return (
    <div className="bg-whole">
      <Header />
      <HeroSection />
      <Collected /> 
      <Footer/>
    </div>
  );
}

export default Profile;
