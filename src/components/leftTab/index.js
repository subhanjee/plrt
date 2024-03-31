import React from "react";
import { Tabs } from "antd";
import { Container } from "react-bootstrap";
 import "./index.css";
import Veliteui from "../veliteui";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Description",
    children: <Veliteui/>,
  },
  { 
    key: "2",
    label: "Properties",
    children: <Veliteui/>,
  },
  {
    key: "3",
    label: "Stats",
    children: <Veliteui/>,
  },
  {
    key: "4",
    label: "Details",
    children: <Veliteui/>,
  },
];
const LeftTab = () => (
  <div>
    <Container>
      <Tabs defaultActiveKey="2" items={items} onChange={onChange} />
    </Container>
  </div>
);
export default LeftTab;
