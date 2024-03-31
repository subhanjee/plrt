import React from "react";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import HeroStat from "../../components/heroStat";
import BothTabs from "../../components/bothTab";
function StatScreen() {
  return (
    <div className="bg-whole">
      <Header />
     <HeroStat/>
     <BothTabs/>
      <Footer />
    </div>
  );
}

export default StatScreen;
