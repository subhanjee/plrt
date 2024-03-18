import { Col, Row } from "antd";
import React from "react";
import "./index.css";
import sellerLogo from "../../images/userpic (10).png";
import sellerLogo1 from "../../images/userpic (11).png";
import sellerLogo2 from "../../images/userpic (12).png";
import sellerLogo3 from "../../images/userpic (13).png";
import sellerLogo4 from "../../images/userpic (14).png";
import sellerLogo5 from "../../images/userpic (15).png";
import sellerLogo6 from "../../images/userpic (16).png";
import sellerLogo7 from "../../images/userpic (17).png";
import sellerLogo8 from "../../images/userpic (18).png";
import tick from "../../images/tick.png";
import icon from "../../images/icon (1).png";
import arrow from "../../images/arrow.png";
import arrow1 from "../../images/catalog forward.png";
import { Container } from "react-bootstrap";
const data = [
  {
    id: 1,
    title: "PLRGenius",
    items: "19",
    price: "1,460.00",
    img: <img src={sellerLogo} alt="abc" />,
    subimg: <img src={tick} alt="abc" />,
  },
  {
    id: 2,
    title: "PixelPoet",
    items: "223",
    price: "1,790.90",
    img: <img src={sellerLogo1} alt="abc" />,
    subimg: <img src={tick} alt="abc" />,
  },
  {
    id: 3,
    title: "PLRVision",
    items: "225",
    price: "1,290.99",
    img: <img src={sellerLogo2} alt="abc" />,
  },
  {
    id: 4,
    title: "CodeCrafter",
    items: "44",
    price: "890.99",
    img: <img src={sellerLogo3} alt="abc" />,
  },
  {
    id: 5,
    title: "MysticPLR",
    items: "1020",
    price: "1,160.00",
    img: <img src={sellerLogo4} alt="abc" />,
    subimg: <img src={tick} alt="abc" />,
  },
  {
    id: 6,
    title: "CraftPLR",
    items: "98",
    price: "990.90",
    img: <img src={sellerLogo5} alt="abc" />,
  },
  {
    id: 7,
    title: "BeatBaker",
    items: "902",
    price: "769.99",
    img: <img src={sellerLogo6} alt="abc" />,
  },
  {
    id: 8,
    title: "VibeSmith",
    items: "10",
    price: "710.00",
    img: <img src={sellerLogo7} alt="abc" />,
  },
  {
    id: 9,
    title: "MuseMingle",
    items: "79",
    price: "640.99",
    img: <img src={sellerLogo8} alt="abc" />,
    subimg: <img src={tick} alt="abc" />,
  },
];
function TopSeller() {
  return (
    <div className="whole-div-seller">
      <Container>
        <div className="center-div-sell">
        <div className="top-div-sell">
            <div className="text-white">Top Sellers</div>
            <div className="more-div-sell">
                <div className="div-view">View More</div>
                <div className="div-arrow"><img src={arrow} alt="abc"/></div>
                <div className="div-arrow"><img src={arrow1} alt="abc"/></div>
            </div>
        </div>
        </div>
        <Row justify="center" className="gap-3">
          {data.map((item, index) => (
            <Col key={index} xxl={6}>
              <div className="center-col-top">
                <div className="div-seller">
                  <div>{item.img}</div>
                  <div>
                    <div className="flex-tick">
                      <div>{item.title}</div>
                      <div>{item.subimg}</div>
                    </div>
                    <div className="flex-price-seller">
                      <div style={{ color: "#78788D" }}>item:</div>
                      <div className="text-white">{item.items}</div>
                      <div className="flex-tick1">
                        <img src={icon} alt="abc" />
                        {item.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default TopSeller;
