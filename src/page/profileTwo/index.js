import React from "react";
import Header from "../../components/navbar";
 import Footer from "../../components/footer";
import TabSection from "../../components/tabs";
import { Container } from "react-bootstrap";
import HeroProfile from "../../components/heroProfile";
function ProfileTwo() {
  return (
    <div className="bg-whole">
      <Header />
      <HeroProfile />
      <Container>
      <TabSection/>
      </Container>
      <Footer/>
    </div>
  );
}

export default ProfileTwo;
