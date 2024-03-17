import React from "react";
import Header from "../../components/navbar";
import "./index.css";
import HeroSection from "../../components/heroSection";
import Footer from "../../components/footer";
import TabSection from "../../components/tabs";
function Profile() {
  return (
    <div className="bg-whole">
      <Header />
      <HeroSection />
      <TabSection/>
    
      <Footer/>
    </div>
  );
}

export default Profile;
