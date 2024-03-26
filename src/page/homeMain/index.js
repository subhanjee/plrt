import React from "react";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import MainHome from "../../components/mainHome";

function HomeMain() {
  return (
    <div className="bg-whole">
      <Header />
      <MainHome />
      <Footer />
    </div>
  );
}

export default HomeMain;
