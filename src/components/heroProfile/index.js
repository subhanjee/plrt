import { Col, Row } from "antd";
import React from "react";
import prolfe from "../../images/Image 182.png";
import frame from "../../images/Image 74.png";
import frame1 from "../../images/Image 185.png";
import "./index.css";
import {
  HeartOutlined,
  TwitterOutlined,
  ShareAltOutlined,
  YoutubeFilled,
  FacebookFilled,
} from "@ant-design/icons";
function HeroProfile() {
  return (
    <div>
      <div className="center-hero"></div>
      <div className="hero-whole">
        <Row justify="center">
          <Col xxl={8} xl={12} lg={10} md={11}>
            <div className="col-center">
              <div className="flex-div-hero">
                <img src={prolfe} alt="" />
                <div className="flex-hero">
                  <h2 className="text-white">Unidentified Monster</h2>
                  <div className="text-white dis-flex">
                    by <a style={{ color: "#20E9FF" }}>Brenda Gardner</a>{" "}
                    <img src={frame} alt="abc" />
                  </div>
                </div>
              </div>
              <div className="hero-items-div">
                <div>
                  <p className="item-text">Items</p>
                  <p className="item-num">237</p>
                </div>
                <div>
                  <p  className="item-text">Owners</p>
                  <p className="item-num">212</p>
                </div>
                <div>
                  <p  className="item-text">Floor price</p>
                  <div className="item-num"><img src={frame1} alt="abc"/>1.99</div>
                </div>
                <div>
                  <p  className="item-text">Total volume</p>
                  <div className="item-num"><img src={frame1} alt="abc"/> 2.9k</div>
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={8} xl={12} lg={10} md={11}>
            <div className="col-center">
              <div className="div-col-hero">
                <div className="heroico-div">
                  <HeartOutlined style={{ color: "#B3B6C6" }} />
                  <div>234</div>
                </div>
                <div className="heroico-div">
                  <ShareAltOutlined style={{ color: "#B3B6C6" }} />
                  <div>Share</div>
                </div>
                <div className="heroico-div">
                  <TwitterOutlined />
                  <FacebookFilled /> 
                  <YoutubeFilled />{" "}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HeroProfile;
