import React from "react";
import "./index.css";
import { Container } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import plr from "../../images/Image 69.png";
import plr1 from "../../images/Image 72.png";
import plr2 from "../../images/Image 75.png";
import { Card, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import smallLogo1 from "../../images/Image 70.png";
import smallLogo2 from "../../images/Image 73.png";
import smallLogo3 from "../../images/Image 76.png";
import icon from "../../images/like.png";
import tick from "../../images/Image 74.png";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1440: { items: 3 },
  2560: { items: 3 },
};

const data = [
  {
    id: 1,
    title:
      "Sint aliquip nulla ad cillum ex eiusmod proident cupidatat aliqua sit minim",
    subTitle: "Consequat es",
    img: <img src={plr} alt="" className=" " />,
    subimg: <img src={smallLogo1} alt="" className=" " />,
    by: "Tom",
    ico: <img src={tick} alt="abc" />,
  },
  {
    id: 2,
    title:
      "Sint aliquip nulla ad cillum ex eiusmod proident cupidatat aliqua sit minim",
    subTitle: "Tempor nostru",
    img: <img src={plr1} alt="" className=" " />,
    subimg: <img src={smallLogo2} alt="" className=" " />,
    by: "Miller",
    ico: <img src={tick} alt="abc" />,
  },
  {
    id: 3,
    title:
      "Sint aliquip nulla ad cillum ex eiusmod proident cupidatat aliqua sit minim",
    subTitle: "Laborum null",
    img: <img src={plr2} alt="" className=" " />,
    subimg: <img src={smallLogo3} alt="" className=" " />,
    by: " Randolph",
  },
  {
    id: 4,
    title:
      "Sint aliquip nulla ad cillum ex eiusmod proident cupidatat aliqua sit minim",
    subTitle: "Tempor nostru",
    img: <img src={plr1} alt="" className=" " />,
    subimg: <img src={smallLogo2} alt="" className=" " />,
    by: "Miller",
    ico: <img src={tick} alt="abc" />,
  },
  {
    id: 5,
    title:
      "Sint aliquip nulla ad cillum ex eiusmod proident cupidatat aliqua sit minim",
    subTitle: "Consequat es",
    img: <img src={plr} alt="" className=" " />,
    subimg: <img src={smallLogo1} alt="" className=" " />,
    by: "Tom",
  },
  {
    id: 6,
    title:
      "Sint aliquip nulla ad cillum ex eiusmod proident cupidatat aliqua sit minim",
    subTitle: "Laborum null",
    img: <img src={plr2} alt="" className=" " />,
    subimg: <img src={smallLogo3} alt="" className="img-size" />,
    by: " Randolph",
    ico: <img src={tick} alt="abc" />,
  },
];
const items = [
  {
    label: <p>this Week </p>,
    key: "1",
  },
  {
    label: <p>this Month </p>,
    key: "2",
  },
  {
    label: <p>this Year </p>,
    key: "3",
  },
];
function Trending() {
  return (
    <div className="div-whole-drop">
      <Container>
        <div className="div-more">
          <div className="text-white div-week">
            Trending
            <Dropdown
              menu={{
                items,
              }}
            >
              <p
                onClick={(e) => e.preventDefault()}
                style={{ color: "#20E9FF" }}
              >
                <Space>
                  PLR <DownOutlined style={{ fontSize: ".8rem" }} />
                </Space>
              </p>
            </Dropdown>
          </div>
          <div className="view-more">View More</div>
        </div>
        <div className="center--car">
          <AliceCarousel
            items={data.map((item, index) => (
              <div key={index} className="center-card-trend">
                {" "}
                <Card
                  hoverable
                  cover={item.img}
                  className="card-div-card-trend "
                >
                  <div className="card-text-div">
                    <div className="flex-div-card-trend">
                      <div className="flex-div-d">
                        <div>{item.subimg}</div>
                        <div className="subitle-text-card-trend ">
                          <div>{item.subTitle}</div>
                          <div style={{display:"flex",alignItems:"center",gap:".2rem" }}>
                            by <a style={{ color: "#20E9FF" }}>{item.by}</a>
                            {item.ico}
                          </div>
                        </div>
                      </div>
                      <div className="flex-div-d">
                        <img src={icon} alt="" className="icon-i-card" />
                      </div>
                    </div>
                  </div>
                  <div className="title-text-card-trend ">{item.title}</div>
                </Card>
              </div>
            ))}
            responsive={responsive}
            controlsStrategy="alternate"
            disableButtonsControls
            keyboardNavigation="true"
          />
        </div>
      </Container>
    </div>
  );
}

export default Trending;
