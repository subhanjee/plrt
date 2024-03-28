import React from "react";
import "./index.css";
import { Container } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import plr from "../../images/Container 30.png";
import plr1 from "../../images/Container 32.png";
import plr2 from "../../images/Container 34.png";
import { Card } from "antd";

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
    title: "Ebooks",
    img: <img src={plr} alt="" className=" " />,
  },
  {
    id: 2,
    title: "Reports",
    img: <img src={plr1} alt="" className=" " />,
  },
  {
    id: 3,
    title: "Article Packs",

    img: <img src={plr2} alt="" className=" " />,
  },
  {
    id: 4,
    title: "Reports",

    img: <img src={plr1} alt="" className=" " />,
  },
  {
    id: 5,
    title: "Article Packs",

    img: <img src={plr} alt="" className=" " />,
  },
  {
    id: 6,
    title: "Ebooks",

    img: <img src={plr2} alt="" className=" " />,
  },
];

function Browse() {
  return (
    <div className="div-whole-drop">
      <Container>
        <div className="div-more">
          <h1 className="text-white div-week">
            Browse by <a style={{ color: "#20E9FF" }}>Categories</a>
          </h1>
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
                  <h4 className="text-white text-center">{item.title}</h4>
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

export default Browse;
