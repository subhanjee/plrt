import React from "react";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import Home from "../../components/home";
import CardSection from "../../components/cardSection";
import SellNft from "../../components/sellNft";
import TopSeller from "../../components/topSeller";
 
function LandingPage() {
  return (
    <div className="bg-whole">
      <Header />
     <Home/>
     <CardSection/>
     <TopSeller/>
     <SellNft/>
      <Footer/> 
    </div>
  );
}

export default LandingPage;
