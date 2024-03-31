import React from "react";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import HeroStat from "../../components/heroStat";
import BothTabs from "../../components/bothTab";
import  Chart  from "../../components/chart";
function StatScreen() {
  return (
    <div className="bg-whole">
      <Header />
     <HeroStat/>
     <BothTabs/>
     <Chart/>
      <Footer />
    </div>
  );
}

export default StatScreen;
