import { Col, Row } from "antd";
import React from "react";
import RightSection from "../rightSection";
import LeftSection from "../leftSection";
import { Container } from "react-bootstrap";
import "./index.css"
function Collected() {
  return (
    <div className="wholediv-coll">
        <div className="wholediv-coll-widh"> 
      <Row justify="center">
        {/* <Container> */}
          <Col xxl={6} xl={6} lg={6} xs={24}>
          <div className="wholediv-coll">
              <LeftSection />
            </div>
          </Col>
          <Col xxl={16} xl={16} lg={16} xs={24}>
          <div className="wholediv-coll">
              <RightSection />
            </div>
          </Col>
        {/* </Container> */}
      </Row>
    </div>
    </div>
  );
}

export default Collected;
