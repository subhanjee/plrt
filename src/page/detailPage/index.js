import React from "react";
import Header from "../../components/navbar";
 import Footer from "../../components/footer";
import DetailSection from "../../components/detailSection";
 
function Detail() {
  return (
    <div className="bg-whole">
      <Header />
      <DetailSection/>
      <Footer/>
    </div>
  );
}

export default Detail;
