import React from "react";
import "./index.css";
import { Col, Row } from "antd";
import card from "../../images/card.png"
function SellNft() {
  return (
    <div className="bg-div-sell">
      <Row justify="center">
        <Col xxl={5} xl={9}>
          <div className="sell-col">
            <div>
              <h1 className="sell-text">Sell your<br/> PLR NFTS now</h1>
              <p className="sell-subtext">
                Join PLRmint, the future of digital<br/> content. Transform your PLR
                products<br/> into NFTs and unlock a new realm of<br/> earning potential.{" "}
              </p>
              <button className="create-btn">Create</button>
            </div>
          </div>
        </Col>
        <Col xxl={5} xl={9}>
          <div className="sell-col">
            <div>
                <img src={card} alt="abc"/>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SellNft;
