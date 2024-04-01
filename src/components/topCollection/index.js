import { Col, Dropdown, Row, Space } from "antd";
import React from "react";
import "./index.css";
import sellerLogo from "../../images/Image 28.png";
import sellerLogo1 from "../../images/Image 33.png";
import sellerLogo2 from "../../images/Image 37.png";
import sellerLogo3 from "../../images/Image 41.png";
import sellerLogo4 from "../../images/Image 45.png";
import sellerLogo5 from "../../images/Image 50.png";
import sellerLogo6 from "../../images/Image 54.png";
import sellerLogo7 from "../../images/Image 59.png";
import sellerLogo8 from "../../images/Image 64.png";
import tick from "../../images/tick.png";
import icon from "../../images//Group (6).png";
// import arrow from "../../images/arrow.png";
// import arrow1 from "../../images/catalog forward.png";
import { Container } from "react-bootstrap";
import { DownOutlined } from "@ant-design/icons";
import uparrow from "../../images/Arrow up 1.png";
import downarrow from "../../images/Arrow down 1.png";

const data = [
  {
    id: 1,
    title: "Unknow Birds",
    items: "0.99",
    price: "15.99",
    img: <img src={sellerLogo} alt="abc" />,
    subimg: <img src={tick} alt="abc" />,
    per: "16.85%",
    up: <img src={uparrow} alt="abc" />,
  },
  {
    id: 2,
    title: "Unknow Pill",
    items: "0.99",
    price: "0.99",
    img: <img src={sellerLogo1} alt="abc" />,
    subimg: <img src={tick} alt="abc" />,
    per: "36.25%",
    up: <img src={uparrow} alt="abc" />,
  },
  {
    id: 3,
    title: "Cube Earth",
    items: "0.99",
    price: "40.65",
    img: <img src={sellerLogo2} alt="abc" />,
    per: "66.85%",
    up: <img src={uparrow} alt="abc" />,
  },
  {
    id: 4,
    title: "Matrix Cube",
    items: "0.99",
    price: "85.65",
    img: <img src={sellerLogo3} alt="abc" />,
    per: "26.35%",
    up: <img src={downarrow} alt="abc" />,
  },
  {
    id: 5,
    title: "Xmas Tree",
    items: "0.99",
    price: "9.25",
    img: <img src={sellerLogo4} alt="abc" />,
    subimg: <img src={tick} alt="abc" />,
    per: "16.85%",
    up: <img src={uparrow} alt="abc" />,
  },
  {
    id: 6,
    title: "Oil Painting Apple",
    items: "0.99",
    price: "6.99",
    img: <img src={sellerLogo5} alt="abc" />,
    per: "26.35%",
    up: <img src={downarrow} alt="abc" />,
  },
  {
    id: 7,
    title: "Magic Brain",
    items: "0.99",
    price: "5.99",
    img: <img src={sellerLogo6} alt="abc" />,
    per: "4.00%",
    up: <img src={downarrow} alt="abc" />,
  },
  {
    id: 8,
    title: "Artistic Hand",
    items: "0.99",
    price: "5.99",
    img: <img src={sellerLogo7} alt="abc" />,
    per: "12.90%",
    up: <img src={downarrow} alt="abc" />,
  },
  {
    id: 9,
    title: "Cosmos Fix",
    items: "0.99",
    price: "8.99",
    img: <img src={sellerLogo8} alt="abc" />,
    subimg: <img src={tick} alt="abc" />,
    per: "6.00%",
    up: <img src={downarrow} alt="abc" />,

  },
];
const items = [
  {
    label: <p>this Week </p>,
    key: "1",
  },
  {
    label: <p>this Month </p>,
    key: "2",
  },
  {
    label: <p>this Year </p>,
    key: "3",
  },
];
function TopCollection() {
  return (
    <div className="whole-div-seller">
      <Container>
        <div className="center-div-sell">
          <div className="top-div-sell">
            <div className="text-white div-week">
              Top collections{" "}
              <Dropdown
                menu={{
                  items,
                }}
              >
                <p
                  onClick={(e) => e.preventDefault()}
                  style={{ color: "#20E9FF" }}
                >
                  <Space>
                    this Week
                    <DownOutlined style={{ fontSize: ".8rem" }} />
                  </Space>
                </p>
              </Dropdown>
            </div>
            <div className="more-div-sell">
              <div className="div-view-top">Go to rankings</div>
              {/* <div className="div-arrow">
                <img src={arrow} alt="abc" />
              </div>
              <div className="div-arrow">
                <img src={arrow1} alt="abc" />
              </div> */}
            </div>
          </div>
        </div>
        <Row justify="center" className="gap-3">
          {data.map((item, index) => (
            <Col key={index} xxl={6}>
              <div className="center-col-top">
                <div className="div-seller-col">
                  <div>{item.img}</div>
                  <div className="flex-dd">
                    <div>
                      <div className="flex-tick">
                        <div>{item.title}</div>
                      </div>
                      <div className="flex-price-seller-col">
                        <div style={{ color: "#78788D" }}>Floor:</div>
                        <div className="flex-tick1">
                          <img src={icon} alt="abc" />
                          {item.items}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex-tick1">
                        {item.up}
                        {item.per}
                      </div>
                      <div className="flex-tick1 mt-1">
                        <img src={icon} alt="abc" />
                        {item.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default TopCollection;
