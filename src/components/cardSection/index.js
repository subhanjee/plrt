import React from "react";
import plr from "../../images/Rectangle 353 (12).png";
import plr1 from "../../images/Rectangle 353 (13).png";
import plr2 from "../../images/Rectangle 353 (14).png";
import plr3 from "../../images/Rectangle 353 (15).png";
import plr4 from "../../images/Rectangle 353 (16).png";
import plr5 from "../../images/Rectangle 353 (17).png";
import plr6 from "../../images/Rectangle 353 (18).png";
import plr7 from "../../images/Rectangle 353 (19).png";
import plr8 from "../../images/Rectangle 353 (21).png";
import smallLogo1 from "../../images/userpic (1).png"
import smallLogo2 from "../../images/userpic (2).png"
import smallLogo3 from "../../images/userpic (3).png"
import smallLogo4 from "../../images/userpic (4).png"
import smallLogo5 from "../../images/userpic (5).png"
import smallLogo6 from "../../images/userpic (6).png"
import smallLogo7 from "../../images/userpic (7).png"
import smallLogo8 from "../../images/userpic (8).png"
import smallLogo9 from "../../images/userpic (9).png"
import sorting from "../../images/sorting.png";
import icon from "../../images/like.png";
import frame from "../../images/Frame 180 (1).png";
import frame1 from "../../images/Frame 180.png";
import "./index.css";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FilterOutlined,   } from "@ant-design/icons";

const data = [
  {
    id: 1,
    title: "Digital Marketing Guide",
    subTitle: "PLRGenius",
    price: "332",
    img: <img src={plr} alt="" className="img-size" />,
    subimg: <img src={smallLogo1} alt="" className="img-size" />,
  },
  {
    id: 2,
    title: "Financial Freedom Blueprint",
    subTitle: "ArticleSpin",
    price: "4",
    img: <img src={plr1} alt="" className="img-size" />,
    subimg: <img src={smallLogo2} alt="" className="img-size" />,

  },
  {
    id: 3,
    title: "Self-Help Success Tips",
    subTitle: "PostReady",
    price: "107",
    img: <img src={plr2} alt="" className="img-size" />,
    subimg: <img src={smallLogo3} alt="" className="img-size" />,

  },
  {
    id: 4,
    title: "Productivity Powerhouse",
    subTitle: "VibeSmith",
    price: "48",
    img: <img src={plr3} alt="" className="img-size" />,
    subimg: <img src={smallLogo4} alt="" className="img-size" />,

  },
  {
    id: 5,
    title: "Entrepreneurial Mindset Mastery",
    subTitle: "ContentCrusher",
    price: "4",
    img: <img src={plr4} alt="" className="img-size" />,
    subimg: <img src={smallLogo5} alt="" className="img-size" />,

  },
  {
    id: 6,
    title: "Fitness Fundamentals",
    subTitle: "JennyPLR",
    price: "352",
    img: <img src={plr5} alt="" className="img-size" />,
    subimg: <img src={smallLogo6} alt="" className="img-size" />,

  },
  {
    id: 7,
    title: "Creative Writing Companion",
    subTitle: "BeatBaker",
    price: "493",
    img: <img src={plr6} alt="" className="img-size" />,
    subimg: <img src={smallLogo7} alt="" className="img-size" />,

  },
  {
    id: 8,
    title: "Mindfulness Meditation Manual",
    subTitle: "PLR King",
    price: "4",
    img: <img src={plr7} alt="" className="img-size" />,
    subimg: <img src={smallLogo8} alt="" className="img-size" />,

  },
  {
    id: 9,
    title: "Healthy Eating Handbook",
    subTitle: "PLReats",
    price: "550",
    img: <img src={plr8} alt="" className="img-size" />,
    subimg: <img src={smallLogo9} alt="" className="img-size" />,

  },
 
 
];
function CardSection() {
  return (
    <div style={{marginTop:"2rem"}}>
      <Container>
        <div className="card-center-div">
        <div className="input-div-card">
          <div className="sort-div">
          <FilterOutlined style={{ color: "#78788D" }} />
            <div> Filter</div>
          </div>
          <div className="input-div1">
            <div className="sort-div-card">
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
        </div>
        <Row justify="center" className="gap-4">
          {data.map((item, index) => (
            <Col key={index} xxl={7} xl={7} lg={7}>
              <div>
                <Link to="/profileTwo" style={{ textDecoration: "none" }}>
                  <Card hoverable cover={item.img} className="card-div-card">
                    <div className="card-text-div">
                      <div className="title-text-card">{item.title}</div>
                      <div className="flex-div-card">
                      <div className="flex-div-d">
                        <div>{item.subimg}</div>
                        <div className="subitle-text-card ">{item.subTitle}</div>
                        </div>
                        <div className="flex-div-d">
                          <img src={icon} alt="" className="icon-i-card" />
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
          <button className="view-btn-card">View more</button>
        </div>
      </Container>
    </div>
  );
}

export default CardSection;
