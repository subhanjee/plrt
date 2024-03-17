import { Col, Row } from "antd";
import React from "react";
import logo from "../../images/Group.png";
function Footer() {
  return (
    <div>
      <img src={logo} alt="" />
      <Row >
        <Col xl={4}>
          <div>
            <div>
              <h6 className="text-white">Categories</h6>
              <p>All </p>
              <p>Trending</p>
              <p>Ebooks</p>
              <p>Graphics</p>
              <p>Video</p>
              <p>Audio</p>
              <p>Software</p>
              <p>Resources</p>
            </div>
          </div>
        </Col>
        <Col xl={4}>
          <div>
            <div>
              <h6 className="text-white">Resources</h6>
              <p>Blog </p>
              <p>User guides</p>
              <p>Webinars</p>
              <p>Help Center</p>
              <p>Platform Status</p>
              <p>Partners</p>
              <p>Taxes</p>
            </div>
          </div>
        </Col>
        <Col xl={4}>
          <div>
            <div>
              <h6 className="text-white">Company</h6>
              <p>About </p>
              <p>Join us</p>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <div></div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
