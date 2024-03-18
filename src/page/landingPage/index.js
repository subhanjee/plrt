import React from "react";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import Home from "../../components/home";
import CardSection from "../../components/cardSection";
 
function LandingPage() {
  return (
    <div className="bg-whole">
      <Header />
     <Home/>
     <CardSection/>
      <Footer/>
    </div>
  );
}

export default LandingPage;
