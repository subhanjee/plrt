import { Col, Row } from "antd";
import React from "react";
import RightSection from "../rightSection";
import LeftSection from "../leftSection";
import { Container } from "react-bootstrap";

function Collected() {
  return (
    <div>
      <Row justify="center">
        <Container>
        <Col    xl={5}>
          <div>
            <LeftSection />
          </div>
        </Col>
        <Col  xl={18}>
          <div>
            <RightSection />
          </div>
        </Col>
        </Container>
      </Row>
    </div>
  );
}

export default Collected;
