import React from "react";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import MainHome from "../../components/mainHome";
import Drops from "../../components/drops";
import TopCollection from "../../components/topCollection";
import Trending from "../../components/trending";
import GetStart from "../../components/getStart";
 
function HomeMain() {
  return (
    <div className="bg-whole">
      <Header />
      <MainHome />
      <Drops />
      <TopCollection/>
      <Trending/>
      <GetStart/>
      <Footer />
    </div>
  );
}

export default HomeMain;
