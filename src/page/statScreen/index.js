import React from "react";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import HeroStat from "../../components/heroStat";
function StatScreen() {
  return (
    <div className="bg-whole">
      <Header />
     <HeroStat/>
      <Footer />
    </div>
  );
}

export default StatScreen;
