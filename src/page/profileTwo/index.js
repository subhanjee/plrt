import React from "react";
import Header from "../../components/navbar";
import Footer from "../../components/footer";
import { Container } from "react-bootstrap";
import HeroProfile from "../../components/heroProfile";
import ProfileTwoTab from "../../components/profileTwoTabs";
import Recommended from "../../components/recommend";
function ProfileTwo() {
  return (
    <div className="bg-whole">
      <Header />
      <HeroProfile />
      <Container>
        <ProfileTwoTab />
      </Container>
      <Recommended />
      <Footer />
    </div>
  );
}

export default ProfileTwo;
