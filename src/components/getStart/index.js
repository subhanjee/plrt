import React from "react";
import "./index.css";
import { Col, Row } from "antd";
import card from "../../images/Container 26.png";
import seller from "../../images/Container 27.png";
import wallet from "../../images/Credit card.png";
function GetStart() {
  return (
    <div className="bg-div-sell">
      <Row justify="center">
        <Col xxl={5} xl={8} lg={10} md={10}>
          <div className="sell-col-get">
            <div>
              <h1 className="sell-text">Get started!</h1>
              <p className="sell-subtext-get ">
                Qui ut exercitation officia proident enim non tempor tempor
                 ipsum ex nulla ea adipisicing sit consequat
              </p>
              <button className="create-btn-get"><img src={wallet} alt="abc"/>Connect wallet</button>
            </div>
          </div>
        </Col>
        <Col xxl={7} xl={12} lg={10} md={10}>
          <div className="sell-col">
            <div>
              <img src={card} alt="abc" className="seller-size" />
              <img src={seller} alt="abc" className="pos-card" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default GetStart;
