import { Card, Col, Row } from "antd";
import React, { useState } from "react";
import plr from "../../images/Rectangle 353.png";
import icon from "../../images/icon.png";
import "./index.css";
import { Button, message, Steps, theme } from "antd";
const steps = [
  {
    title: "Summary",
    content: "First-content",
  },
  {
    title: "Confirm",
    content: "Second-content",
  },
  {
    title: "Complete",
    content: "Last-content",
  },
];
function DetailSection() {
   const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <div className="detail-div-whole">
        <div className="step-div">
      <Steps current={current} items={items} className="step-width"  />
      </div>
      <Row justify="center">
        <Col xxl={4} xl={7} lg={8} md={10}>
          <div className="col-center-detail">
            <div>
              <Card
                hoverable
                cover={<img src={plr} alt="abc" />}
                className="card-div"
              >
                <div className="card-text-div">
                  <h6 className="title-text">PLR creationz</h6>
                  <div className="flex-div">
                    <h4 className="subitle-text">Drone Views #82983</h4>
                    <div className="flex-div-d">
                      <img src={icon} alt="" className="icon-i" />
                      <div>11.98</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Col>
        <Col xxl={4} xl={7} lg={8} md={10}>
          <div className="col-center-detail">
            <div>
              <div className="div-total">
                <div>Summary</div>
                <div>Fixed</div>
              </div>
              <div className="div-total">
                <div>Subtotal</div>
                <div>
                  <div className="price-div">
                    <img src={icon} alt="" className="icon-i" />
                    <div>59.99</div>
                  </div>
                  <div>$120.00</div>
                </div>
              </div>
              <div className="div-total">
                <div>Fee</div>
                <div>
                  <div className="price-div">
                    <img src={icon} alt="" className="icon-i" />
                    <div>2</div>
                  </div>
                  <div>$4.00</div>
                </div>
              </div>
              <hr className="line-hr" />
              <div className="div-total">
                <div>Total</div>
                <div>
                  <div className="price-div">
                    <img src={icon} alt="" className="icon-i" />
                    <div>61.99</div>
                  </div>
                  <div>$124.00</div>
                </div>
              </div>
            </div>
            {current < steps.length - 1 && (
              <button onClick={() => next()} className="pro-btn">
                Proceed to payment
              </button>
            )}
            {current === steps.length - 1 && (
              <button
                onClick={() => message.success("Processing complete!")}
                className="pro-btn"
              >
                {" "}
                Done
              </button>
            )}
            {/* {current > 0 && (
          <button
          className="pro-btn"
            onClick={() => prev()}
          >
            Previous
          </button>
        )} */}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DetailSection;
