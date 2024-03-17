import { Col, Row } from "antd";
import React from "react";
import logo from "../../images/Group.png";
import "./index.css";
import tel from "../../images/Subtract.svg";
import tiw from "../../images/Frame.png";
import vec from "../../images/Vector.png";
import dis from "../../images/Frame (1).png";
import link from "../../images/Frame (2).png";
import { Container } from "react-bootstrap";
function Footer() {
  return (
    <div className="footer-div">
      <Row justify="center">
        <Col xxl={3} xl={3} lg={5} md={5} xs={7}>
          <div className="text-fot">
            <div>
              <img
                src={logo}
                alt=""
                style={{ marginTop: "2rem", marginBottom: "2rem" }}
              />
              <h6 className="text-white">Categories</h6>
              <p className="footer-text">All </p>
              <p className="footer-text">Trending</p>
              <p className="footer-text">Ebooks</p>
              <p className="footer-text">Graphics</p>
              <p className="footer-text">Video</p>
              <p className="footer-text">Audio</p>
              <p className="footer-text">Software</p>
              <p className="footer-text">Resources</p>
            </div>
          </div>
        </Col>
        <Col xxl={3} xl={3} lg={5} md={5} xs={7}>
          <div className="text-fot">
            <div  className="topmar-footer">
              <h6 className="text-white">Resources</h6>
              <p className="footer-text">Blog </p>
              <p className="footer-text">User guides</p>
              <p className="footer-text">Webinars</p>
              <p className="footer-text">Help Center</p>
              <p className="footer-text">Platform Status</p>
              <p className="footer-text">Partners</p>
              <p className="footer-text">Taxes</p>
            </div>
          </div>
        </Col>
        <Col xxl={3} xl={5} lg={5} md={5} xs={7}>
          <div className="text-fot">
            <div className="topmar-footer">
              <h6 className="text-white">Company</h6>
              <p className="footer-text">About </p>
              <p className="footer-text">Join us</p>
            </div>
          </div>
        </Col>
        <Col xxl={3} xl={10} lg={5} md={5} xs={7}>
          <div className="text-fot">
            <div className="logo-div-fot">
              <img src={tiw} alt="abc" />
              <img src={vec} alt="abc" />
              <img src={dis} alt="abc" />
              <img src={tel} alt="abc" />
              <img src={link} alt="abc" />
            </div>
          </div>
        </Col>
      </Row>
      <Container>
        <hr className="line-hr" />
        <div className="flex-footer">
          <div className="flex-sub-footer">
            <p className="footer-text">Privacy</p>
            <p className="footer-text">Terms</p>
          </div>
          <p className="footer-text">© 2024 PLRT</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
