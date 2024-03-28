import React from "react";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import MainHome from "../../components/mainHome";
import Drops from "../../components/drops";
import TopCollection from "../../components/topCollection";
import Trending from "../../components/trending";
import GetStart from "../../components/getStart";
import Browse from "../../components/browse";
import Partners from "../../components/partners";
 
function HomeMain() {
  return (
    <div className="bg-whole">
      <Header />
      <MainHome />
      <Drops />
      <TopCollection/>
      <Trending/>
      <GetStart/>
      <Browse/>
      <Partners/>
      <Footer />
    </div>
  );
}

export default HomeMain;
