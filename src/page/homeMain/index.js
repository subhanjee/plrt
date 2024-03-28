import React from "react";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import MainHome from "../../components/mainHome";
import Drops from "../../components/drops";
import TopCollection from "../../components/topCollection";
import Trending from "../../components/trending";
 
function HomeMain() {
  return (
    <div className="bg-whole">
      <Header />
      <MainHome />
      <Drops />
      <TopCollection/>
      <Trending/>
      <Footer />
    </div>
  );
}

export default HomeMain;
