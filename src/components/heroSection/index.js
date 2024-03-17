import { Col, Row } from "antd";
import React from "react";
import prolfe from "../../images/userpic.png";
import frame from "../../images/Frame 201.png";
import message from "../../images/shape.png";
import republish from "../../images/republish.png";
import "./index.css";
import { HeartOutlined, InfoCircleOutlined } from "@ant-design/icons";
function HeroSection() {
  return (
    <div className="hero-whole">
      <Row justify="center">
        <Col xxl={8} xl={12} lg={10} md={12}>
          <div className="col-center">
            <div className="flex-div">
              <img src={prolfe} alt="" />
              <div className="flex-divone">
                {/* <div className="flex-div"> */}
                <h3 className="text-white">Johnny PLR</h3>
                {/* </div> */}
                <div className="flex-div">
                  <img src={message} alt="" className="icon-size-mes" />
                  <h6 className="text-white ">Send message</h6>
                </div>
              </div>
              <img src={frame} alt="" className="icon-size" />
            </div>
          </div>
        </Col>
        <Col xxl={8} xl={12} lg={10} md={12}>
          <div className="col-center">
            <div className="div-col-hero">
              <div className="heart-div">
                <HeartOutlined
                  style={{ color: "#B3B6C6", fontSize: "1.3rem" }}
                />
                <div>Follow</div>
              </div>
              <div className="heart-div">
                <img src={republish} alt="" />
                <div>Share</div>
              </div>
              <div className="heart-div">
                <InfoCircleOutlined
                  style={{ color: "#B3B6C6", fontSize: "1.3rem" }}
                />
                <div>Report</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HeroSection;
