import React from "react";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import Assets from "../../components/asset";
import GetStart from "../../components/getStart";
function AssetsScreen() {
  return (
    <div className="bg-whole">
      <Header />
      <Assets />
      <GetStart data="Download PLR Files" btn="Click to download"/>
      <Footer />
    </div>
  );
}

export default AssetsScreen;
