import React from "react";
import "./index.css";
import { Col, Row } from "antd";
function Selling() {
  return (
    <div className="whole-sell">
      <Row justify="center">
        <Col>
          <div className="col-selling-center">
            <div>
              <h2 className="text-white mb-5">Selling setting</h2>
              <h5 className="text-white">Your sell method</h5>
              <div className="sell-div-method">
                <div className="box-one-sell">
                    <p className="text-fixed">Fixed</p>
                    <p className="text-sell">Sell at a fixed or declining price</p>
                </div>
                <div className="box-two-sell">
                    <p className="text-sell">Bid</p>
                    <p className="auc-text"> Auction to the highest bidder</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="col-selling-center">
            <div></div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Selling;
