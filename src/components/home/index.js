import React from 'react'
import { Tabs } from "antd";
import { Container } from "react-bootstrap";
import CardSection from '../cardSection';
import "./index.css"
const items = [
  {
    key: "1",
    label: "All",
    children: <CardSection />,
  },
  {
    key: "2",
    label: "Trending",
    children: <CardSection />,
  },
  {
    key: "3",
    label: "Ebooks",
    children: <CardSection />,
  },
  {
    key: "4",
    label: "Graphics",
    children: <CardSection />,
  },
  {
    key: "5",
    label: "Video",
    children: <CardSection />,
  },
  {
    key: "6",
    label: "Audio",
    children: <CardSection />,
  },
  {
    key: "7",
    label: "Software",
    children: <CardSection />,
  },
  {
    key: "8",
    label: "Resources",
    children: <CardSection />,
  },
];
const onChange = (key) => {
  console.log(key);
};
function Home() {
  return (
    <div className='exp-div'>
      <h1 className='text-white text-center'>Explore collections</h1>
      <div>
        <br/>
    <Container>
      <Tabs defaultActiveKey="3" centered items={items} onChange={onChange} />
    </Container>
  </div>
    </div>
  )
}

export default Home
