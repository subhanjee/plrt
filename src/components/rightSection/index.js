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
import sorting from "../../images/sorting.png";
import icon from "../../images/icon.png";
import frame from "../../images/Frame 180 (1).png";
import frame1 from "../../images/Frame 180.png";
import "./index.css";
import { Card, Col, Input, Row } from "antd";
import { SearchOutlined,CloseCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
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
         <Container>
      <div className="input-div">
        <Input 
          size="large"
          placeholder="Search items"
          prefix={
            <SearchOutlined
              style={{ color: "white", marginRight: ".5rem" }}
            />
          }
          className="serach-size-right"
        />
        <div className="input-div1">
          <div className="sort-div">
            <img src={sorting} alt="abc" />
            <div>Sort By</div>
          </div>
          <div className="frme-div">
            <img src={frame1} alt="abc" />
          </div>
          <div className="frme-div1">
            <img src={frame} alt="abc" />
          </div>
        </div>
      </div>
      <div className="divbuy-div">
      <h3 className="text-white ite">116 results</h3>
      <div className="buy-btn">Buy now <CloseCircleFilled /></div>
      <div className="buy-btn">Dimond <CloseCircleFilled /></div>
      <div className="buy-btn">Brushed <CloseCircleFilled /></div>
      </div>
       <Row justify="center" className="gap-5">
        {data.map((item, index) => (
          <Col key={index} xxl={7} xl={7} lg={8}>
            <div>
              <Link to="/statScreen" style={{textDecoration:"none"}}>
              <Card hoverable cover={item.img} className="card-div-ri">
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
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    
      <div className="view-div-center">
        <button className="view-btn">View more (27)</button>
      </div>
      </Container>
    </div>
  );
}

export default RightSection;
