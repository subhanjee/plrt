import { Col, Row } from "antd";
import React from "react";
import LeftTab from "../leftTab";
import RightTab from "../rightTab";
import "./index.css"
import { Container } from "react-bootstrap";
function BothTabs() {
  return (
    <div className="whole-both-div">
        <Container>
      <Row justify="center">
        <Col xxl={11}  xl={9} lg={10}>
          <div className="center-both-col">
            <div>
                <LeftTab/>
            </div>
          </div>
        </Col>
        <Col xxl={11}  xl={13} lg={14}>
          <div className="center-both-col">
            <div>
                <RightTab/>
            </div>
          </div>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default BothTabs;
