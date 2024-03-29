import { Col, Row } from "antd";
import React from "react";
import RightSection from "../rightSection";
import "./index.css";
import ItemsLeftSection from "../itemleftSection";
function ItemsSection() {
  return (
    <div className="wholediv-coll">
      <div className="wholediv-coll-widh">
        <Row justify="center">
          <Col xxl={6} xl={6} lg={6} xs={24}>
            <div className="wholediv-coll">
              <ItemsLeftSection />
            </div>
          </Col>
          <Col xxl={16} xl={16} lg={18} xs={24}>
            <div className="wholediv-coll">
              <RightSection />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ItemsSection;
