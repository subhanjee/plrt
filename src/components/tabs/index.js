import React from "react";
import { Tabs } from "antd";
import { Container } from "react-bootstrap";
import Collected from "../collected";
import "./index.css"
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "About",
    children: <Collected/>,
  },
  {
    key: "2",
    label: "Collected",
    children: <Collected/>,
  },
  {
    key: "3",
    label: "Created",
    children: <Collected/>,
  },
  {
    key: "4",
    label: "Activity",
    children: <Collected/>,
  },
];
const TabSection = () => (
  <div className="center-div">
    <Container>
        <div className="tab-div">
    <Tabs  defaultActiveKey="1" items={items} onChange={onChange}   />
    </div>
    </Container>
  </div>
);
export default TabSection;
