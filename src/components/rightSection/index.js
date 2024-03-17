import React from "react";
import plr from "../../images/Rectangle 353.png";
import plr1 from "../../images/Rectangle 353 (1).png";
import plr2 from "../../images/Rectangle 353 (2).png";
import plr3 from "../../images/Rectangle 353 (3).png";
import plr4 from "../../images/Rectangle 353 (4).png";
import plr5 from "../../images/Rectangle 353 (5).png";
import plr6 from "../../images/Rectangle 353 (6).png";
import plr7 from "../../images/Rectangle 353 (7).png";
import plr8 from "../../images/Rectangle 353 (8).png";
import plr9 from "../../images/Rectangle 353 (9).png";
import plr10 from "../../images/Rectangle 353 (10).png";
import plr11 from "../../images/Rectangle 353 (11).png";
import icon from "../../images/icon.png";
import "./index.css";
import { Card, Col, Row } from "antd";
const data = [
  {
    id: 1,
    title: "PLR planet",
    subTitle: "Mindful Paths #82983",
    price: "11.98",
    img: <img src={plr} alt="" className="img-size" />,
  },
  {
    id: 2,
    title: "PLR creationz",
    subTitle: "Drone Views #82983",
    price: "11.98",
    img: <img src={plr1} alt="" className="img-size" />,
  },
  {
    id: 3,
    title: "Rockstar PLR",
    subTitle: "FX Magic #82983",
    price: "11.98",
    img: <img src={plr2} alt="" className="img-size" />,
  },
  {
    id: 4,
    title: "Crypto PLR guys",
    subTitle: "Crypto 101 #82983",
    price: "11.98",
    img: <img src={plr3} alt="" className="img-size" />,
  },
  {
    id: 5,
    title: "PLR freelancers",
    subTitle: "Freelance Pro #82983",
    price: "11.98",
    img: <img src={plr4} alt="" className="img-size" />,
  },
  {
    id: 6,
    title: "Audio PLR",
    subTitle: "Chill Beats #82983",
    price: "11.98",
    img: <img src={plr5} alt="" className="img-size" />,
  },
  {
    id: 7,
    title: "Conent Kings",
    subTitle: "Dream Scapes #82983",
    price: "11.98",
    img: <img src={plr6} alt="" className="img-size" />,
  },
  {
    id: 8,
    title: "Gaming Listers",
    subTitle: "Game Craft #82983",
    price: "11.98",
    img: <img src={plr7} alt="" className="img-size" />,
  },
  {
    id: 9,
    title: "PLRsuperstar",
    subTitle: "Orchestra Hits #82983",
    price: "11.98",
    img: <img src={plr8} alt="" className="img-size" />,
  },
  {
    id: 10,
    title: "PLRofOld",
    subTitle: "Vintage Art #82983",
    price: "11.98",
    img: <img src={plr9} alt="" className="img-size" />,
  },
  {
    id: 11,
    title: "YogaPLRcontent",
    subTitle: "Yoga Basics #82983",
    price: "11.98",
    img: <img src={plr10} alt="" className="img-size" />,
  },
  {
    id: 12,
    title: "PrimoPLR",
    subTitle: "Edit Plus #82983",
    price: "11.98",
    img: <img src={plr11} alt="" className="img-size" />,
  },
];
function RightSection() {
  return (
    <div>
        <h3 className="text-white">36 Items</h3>
      <Row justify="center" className="gap-5">
        {data.map((item, index) => (
          <Col key={index} xxl={7} xl={7} lg={8}  >
            <div>
              <Card hoverable cover={item.img} className="card-div">
                <div className="card-text-div">
                  <h6 className="title-text">{item.title}</h6>
                  <div className="flex-div">
                    <h4 className="subitle-text">{item.subTitle}</h4>
                    <div className="flex-div-d">
                      <img src={icon} alt="" className="icon-i" />
                      <div>{item.price}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
      <div className="view-div-center">
      <button className="view-btn">View more (27)</button>
      </div>
    </div>
  );
}

export default RightSection;
