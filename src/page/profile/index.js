import React from "react";
import Header from "../../components/navbar";
import "./index.css";
import HeroSection from "../../components/heroSection";
import Footer from "../../components/footer";
import TabSection from "../../components/tabs";
import { Container } from "react-bootstrap";
function Profile() {
  return (
    <div className="bg-whole">
      <Header />
      <HeroSection />
      <Container>
      <TabSection/>
      </Container>
      <Footer/>
    </div>
  );
}

export default Profile;
