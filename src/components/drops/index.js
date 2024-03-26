import React from "react";
import "./index.css";
import { Container } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import nft from "../../images/Container 9.png";
import nft1 from "../../images/Container 7.png";
import nft2 from "../../images/Container 8.png";
import nft3 from "../../images/Container 10.png";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1440: { items: 4 },
  2560: { items: 4 },
};

const items = [
  <div className="item center--car" data-value="1">
    <img src={nft} alt="abc" />
  </div>,
  <div className="item center--car" data-value="2">
    <img src={nft1} alt="abc" />
  </div>,
  <div className="item center--car" data-value="3">
    <img src={nft2} alt="abc" />
  </div>,
  <div className="item center--car" data-value="4">
    <img src={nft3} alt="abc" />
  </div>,
  <div className="item center--car" data-value="5">
    <img src={nft1} alt="abc" />
  </div>,
  <div className="item center--car" data-value="6">
    <img src={nft} alt="abc" />
  </div>,
];
function Drops() {
  return (
    <div className="div-whole-drop">
      <Container>
        <div className="div-more">
          <h4 className="text-white">Drops</h4>
          <div className="view-more">View More</div>
        </div>
        <div className="center--car">
          <AliceCarousel
            items={items}
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

export default Drops;
