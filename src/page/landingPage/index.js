import React from "react";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import Home from "../../components/home";
 
function LandingPage() {
  return (
    <div className="bg-whole">
      <Header />
     <Home/>
      <Footer/>
    </div>
  );
}

export default LandingPage;
