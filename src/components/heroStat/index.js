import { Card, Col, Row } from "antd";
import React from "react";
import "./index.css";
import assets from "../../images/Image 243.png";
import dai from "../../images/Image 242.png";
import dai1 from "../../images/Image 185.png";
import tag from "../../images/Tag.png";
import tick from "../../images/Image 74.png";
import logo from "../../images/Image 240.png";
import logo1 from "../../images/Image 241.png";
import {
  HeartOutlined,
  ShareAltOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Container } from "react-bootstrap";
function HeroStat() {
  return (
    <div className="whole-div-asset">
      <Container>
        <Row justify="center">
          <Col xl={8} lg={8}>
            <div className="center-col-assets">
              <div>
                <Card
                  hoverable
                  cover={<img alt="example" src={assets} />}
                  className="card-asset"
                >
                  <div className="div-flex-assets">
                    <img src={dai} alt="abc" />
                    <div>
                      <HeartOutlined /> 243
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Col>
          <Col xl={12} lg={14}>
            <div className="center-col-assets">
              <div>
                <div className="div-asset-sp">
                  <h3 className="text-white">Asset title #82983</h3>
                  <div className="heroico-div">
                    <ShareAltOutlined style={{ color: "#B3B6C6" }} />
                    <div>Share</div>
                  </div>
                  <div className="heroico-div">
                    <ExclamationCircleOutlined style={{ color: "#B3B6C6" }} />
                    <div>Report</div>
                  </div>
                </div>
                <div className="pur-div">
                  <div className="pur-text">Owned by</div>
                  <div className="pur-text1">
                    <img src={logo} alt="abc" /> Brenda Gardner{" "}
                    <img src={tick} alt="abc" />
                  </div>
                  <div className="pur-text">Collection</div>
                  <div className="pur-text1"><img src={logo1} alt="abc" />Unidentified Monster</div>
                </div>
                <h6 className="text-white">Current price</h6>
                <div className="dolr-div">
                  <img src={dai1} alt="abc" />
                  <div className="text-white d-text1">59.99</div>
                  <div className="d-text">$120.00</div>
                </div>
                <div>
                <button className="tag-btn">
                    {" "}
                    <img src={tag} alt="abc" />
                    Buy now
                  </button>
                  <button className="tag-btn">
                    {" "}
                    <img src={tag} alt="abc" />
                    Make an offer
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroStat;
