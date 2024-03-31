import React from "react";
import { Tabs } from "antd";
import { Container } from "react-bootstrap";
 import "./index.css";
import TableTab from "../table";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Listing",
    children: <TableTab/>,
  },
  { 
    key: "2",
    label: "Offers (3)",
    children: <TableTab/>,
  },
 
];
const RightTab = () => (
  <div>
    <Container>
      <Tabs defaultActiveKey="2" items={items} onChange={onChange} />
    </Container>
  </div>
);
export default RightTab;
