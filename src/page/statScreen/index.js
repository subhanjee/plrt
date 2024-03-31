import React from "react";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import HeroStat from "../../components/heroStat";
import BothTabs from "../../components/bothTab";
import Chart from "../../components/chart";
import { Container } from "react-bootstrap";
import TableActive from "../../components/tableActive";
import OtherItems from "../../components/otherItems";
function StatScreen() {
  return (
    <div className="bg-whole">
      <Header />
      <HeroStat />
      <BothTabs />
      <Container>
        <Chart />
      </Container>
      <TableActive/>
      <OtherItems/>
      <Footer />
    </div>
  );
}

export default StatScreen;
