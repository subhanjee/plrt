import React from "react";
import { Tabs } from "antd";
import { Container } from "react-bootstrap";
 import "./index.css";
import ItemsSection from "../itemsSection";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Items",
    children: <ItemsSection />,
  },
  { 
    key: "2",
    label: "Activity",
    children: <ItemsSection />,
  },
  {
    key: "3",
    label: "Stats",
    children: <ItemsSection />,
  },
 
];
const ProfileTwoTab = () => (
  <div>
    <Container>
      <Tabs defaultActiveKey="2" items={items} onChange={onChange}    />
    </Container>
  </div>
);
export default ProfileTwoTab;
