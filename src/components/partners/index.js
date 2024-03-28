import React from "react";
import "./index.css";
import { Container } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import prt1 from "../../images/Group (1).png";
import prt2 from "../../images/Group (2).png";
import prt3 from "../../images/Group (3).png";
import prt4 from "../../images/Group (4).png";
import prt5 from "../../images/Group (5).png";
 
const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  1024: { items: 4 },
  1440: { items: 5 },
  2560: { items: 5 },
};

const data = [
  {
    id: 1,

    img: <img src={prt1} alt="" className=" " />,
  },
  {
    id: 2,

    img: <img src={prt2} alt="" className=" " />,
  },
  {
    id: 3,

    img: <img src={prt3} alt="" className=" " />,
  },
  {
    id: 4,

    img: <img src={prt4} alt="" className=" " />,
  },
  {
    id: 5,

    img: <img src={prt5} alt="" className=" " />,
  },
  {
    id: 6,
    img: <img src={prt2} alt="" className=" " />,
  },
  {
    id: 7,
    img: <img src={prt1} alt="" className=" " />,
  },
  {
    id: 8,
    img: <img src={prt5} alt="" className=" " />,
  },
];

function Partners() {
  return (
    <div className="div-whole-part"  >
      <Container>
        <div className="div-more">
          <h2 className="text-black ">Partners</h2>
        </div>
        <div className="center--car">
          <AliceCarousel
            items={data.map((item, index) => (
              <div key={index} className="center-card-brow">
                {item.img}
              </div>
            ))}
            responsive={responsive}
            controlsStrategy="alternate"
            disableButtonsControls
            disableDotsControls
            keyboardNavigation="true"
            autoPlay
            animationDuration={1000}
          />
        </div>
      </Container>
    </div>
  );
}

export default Partners;
