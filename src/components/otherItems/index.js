import React from "react";
import "./index.css";
import { Container } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import plr from "../../images/Image 253.png";
import plr1 from "../../images/Image 251.png";
import plr2 from "../../images/Image 249.png";
import plr3 from "../../images/Image 247.png";
import { Card } from "antd";
import icon from "../../images/Image 185.png";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1440: { items: 4 },
  2560: { items: 4 },
};

const data = [
  {
    id: 1,
    title: "Unidentified Monster",
    subTitle: "Asset title #82983",
    img: <img src={plr} alt="" className=" " />,
    price: "11.98",
  },
  {
    id: 2,
    title: "Unidentified Monster",
    subTitle: "Asset title #82983u",
    img: <img src={plr1} alt="" className=" " />,
    price: "11.98",
  },
  {
    id: 3,
    title: "Unidentified Monster",
    subTitle: "Asset title #82983",
    img: <img src={plr2} alt="" className=" " />,
    price: "11.98",
  },
  {
    id: 4,
    title: "Unidentified Monster",
    subTitle: "Asset title #82983u",
    img: <img src={plr3} alt="" className=" " />,
    price: "11.98",
  },
  {
    id: 5,
    title: "Unidentified Monster",
    subTitle: "Asset title #82983",
    img: <img src={plr2} alt="" className=" " />,
    price: "11.98",
  },
  {
    id: 6,
    title: "Unidentified Monster",
    subTitle: "Asset title #82983",
    img: <img src={plr1} alt="" className=" " />,
    price: "11.98",
  },
];

function OtherItems() {
  return (
    <div className="div-whole-drop">
      <Container>
        <div className="div-more">
          <div className="text-white div-week">OtherItems</div>
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
                  className="card-div-card-other "
                >
                  <div className="title-text-card-trend ">{item.title}</div>
                  <div className="card-text-div">
                    <div className="flex-div-card-trend">
                      <div className="flex-div-d">
                        <div>{item.subimg}</div>
                        <div className="subitle-text-card-trend mt-2 ">
                          <div>{item.subTitle}</div>
                        </div>
                      </div>
                      <div className="flex-div-d">
                        <img src={icon} alt="" className="icon-i-card" />
                        {item.price}
                      </div>
                    </div>
                  </div>
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

export default OtherItems;
