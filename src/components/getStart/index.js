import React from "react";
import "./index.css";
import { Col, Row } from "antd";
import card from "../../images/Container 26.png";
import seller from "../../images/Container 27.png";
function GetStart({data,btn,img}) {
  return (
    <div className="bg-div-sell">
      <Row justify="center">
        <Col xxl={5} xl={8} lg={10} md={10}>
          <div className="sell-col-get">
            <div> 
              <h2 className="sell-text">{data}</h2>
              <p className="sell-subtext-get ">
                Qui ut exercitation officia proident enim non tempor tempor
                 ipsum ex nulla ea adipisicing sit consequat
              </p>
              <button className="create-btn-get">{img}{btn}</button>
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
