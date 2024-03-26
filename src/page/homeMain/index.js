import React from "react";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import MainHome from "../../components/mainHome";
import Drops from "../../components/drops";
 
function HomeMain() {
  return (
    <div className="bg-whole">
      <Header />
      <MainHome />
      <Drops />
      <Footer />
    </div>
  );
}

export default HomeMain;
