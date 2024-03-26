import { Col, Row } from "antd";
import React from "react";
import "./index.css";
import homepage from "../../images/Container 3.png"
function MainHome() {
  return (
    <div className="home-div-whole">
      <Row justify="center">
        <Col xxl={7} xl={9} lg={10} md={10} xs={24}>
          <div className="center-col-home">
            <div>
              <h1 className="text-white center">
                Monetize Your
                <br /> Creativity, Own Your
                <br /> Future
              </h1>
              <p className="text-oc">
                Occaecat est ipsum reprehenderit reprehenderit veniam anim
                laborum est esse duis occaecat{" "}
              </p>
              <div className="btn-div-home">
                <button className="explore-btn-home">Explore </button>
                <button className="create-btn-home">Create</button>
              </div>
            </div>
          </div>
        </Col>
        <Col xxl={7} xl={9} lg={10} md={10} xs={24}>
        <div className="center-col-home1">
            <div>
                <img src={homepage} alt="abc" className="img-home"/>
            </div>
          </div>
        </Col>
      </Row>{" "}
    </div>
  );
}

export default MainHome;
