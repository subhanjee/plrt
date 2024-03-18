import React from "react";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import Home from "../../components/home";
// import CardSection from "../../components/cardSection";
import SellNft from "../../components/sellNft";
import TopSeller from "../../components/topSeller";
import { Container } from "react-bootstrap";

function LandingPage() {
  return (
    <div className="bg-whole">
      <Header />
      <Container>
        <Home />
      </Container>
      <TopSeller />
      <SellNft />
      <Footer />
    </div>
  );
}

export default LandingPage;
