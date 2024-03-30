import React from "react";
import "./index.css";
import {
  Checkbox,
  Col,
  DatePicker,
  InputNumber,
  Row,
  Select,
  Switch,
} from "antd";
import { useState } from "react";
import summ from "../../images/Receipt list 43 1.png";
import summ1 from "../../images/Image 185.png";
import container from "../../images/Container 116.png";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Container } from "react-bootstrap";

function Selling() {
  const [checkedList, setCheckedList] = useState([]);
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);

  const handleChange1 = (value) => {
    console.log(`selected ${value}`);
  };
  const handleChange = (value) => {
    setCheckedList(value);
  };
  const onChange = (checked) => {
    setChecked(checked);
  };
  const onChange2 = (checked) => {
    setChecked1(checked);
  };
  const onChange1 = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="whole-sell">
        <Container>
      <Row justify="center">
        <Col xxl={10} xl={10} lg={12}>
          <div className="col-selling-center">
            <div>
              <h2 className="text-white mb-5">Selling setting</h2>
              <h5 className="text-white">Your sell method</h5>
              <div className="sell-div-method">
                <div className="box-one-sell">
                  <p className="text-fixed">Fixed</p>
                  <p className="text-sell ">
                    Sell at a fixed or declining price
                  </p>
                </div>
                <div className="box-two-sell">
                  <p className="text-sell">Bid</p>
                  <p className="auc-text"> Auction to the highest bidder</p>
                </div>
              </div>
              <div>
                <h4 className="text-white mt-5 mb-2">Price</h4>
                <p className="text-white p-tag">
                  Duis consectetur adipisicing irure anim incididunt ex Lorem
                  ullamco fugiat
                </p>
                <div className="flex-sell-check">
                  <Select
                    onChange={handleChange1}
                    className="input-size"
                    placeholder="Diamond"
                    options={[
                      {
                        value: "Diamond",
                        label: "Diamond",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "Yiminghe",
                        label: "yiminghe",
                      },
                    ]}
                  />
                  <InputNumber
                    style={{ width: "100%" }}
                    className="input-size"
                    placeholder="11.98"
                  />
                  <Checkbox.Group
                    style={{ width: "100%" }}
                    onChange={handleChange}
                    value={checkedList}
                    className="check-div"
                  >
                    <Checkbox
                      value="checkbox1"
                      className={
                        checkedList.includes("checkbox1")
                          ? "blue-checkbox check"
                          : "black-checkbox check"
                      }
                    >
                      Allow for making offer
                    </Checkbox>{" "}
                  </Checkbox.Group>
                </div>
              </div>
              <div>
                <div className="flex-swit mt-5">
                  <h6 className="text-white ">Schedule for future time</h6>
                  <Switch
                    checked={checked1}
                    defaultChecked
                    onChange={onChange2}
                    style={{ background: checked1 ? "#20e9ff" : "transparent" }}
                  />
                </div>
                <p className="text-white mt-2 p-tag">
                  Duis consectetur adipisicing irure anim incididunt ex Lorem
                  ullamco fugiat
                </p>
                <DatePicker onChange={onChange1} className="input-size" />
              </div>
              <div>
                <div className="flex-swit mt-5">
                  <h6 className="text-white ">Privacy</h6>
                  <Switch
                    checked={checked}
                    defaultChecked
                    onChange={onChange}
                    style={{ background: checked ? "#20e9ff" : "transparent" }}
                  />
                </div>
                <p className="text-white mt-2 p-tag">
                  Duis consectetur adipisicing irure anim incididunt ex Lorem
                  ullamco fugiat
                </p>
              </div>
              <div className="mt-5">
                <h6 className="text-white mt-5">T&C</h6>
                <p className="text-white mt-2 p-tag">
                  Mollit laboris amet aute eu sit laboris nostrud quis nisi
                  nostrud veniam nisi. Non eu deserunt irure ad laborum Lorem
                  aute est consequat non anim nulla qui ea do irure. Officia
                  labore ut tempor voluptate ullamco ipsum consequat ullamco
                  culpa. Adipisicing pariatur aliquip nisi do cillum deserunt ad
                  fugiat velit nulla ut mollit consequat irure dolore non
                  consequat. Tempor dolore magna quis pariatur tempo
                </p>
                <Checkbox
                  value="checkbox1"
                  className={
                    checkedList.includes("checkbox1")
                      ? "blue-checkbox check"
                      : "black-checkbox check"
                  }
                >
                  Read{" "}
                </Checkbox>{" "}
              </div>
            </div>
          </div>
        </Col>
        <Col xxl={10} xl={10} lg={12}>
          <div className="col-selling-center">
            <div className="side-div">
              <div className="div-sum">
                <img src={summ} alt="abc" />
                <div>Summary</div>
              </div>
              <hr className="line" />
              <div className="mt-2 mb-2">
                <h6 className="mb-3">Price</h6>
                <div className="div-sum1">
                  <img src={summ1} alt="" />
                  <div className="num-text-n">11.98</div>
                  <div className="div-fixed">Fixed</div>
                </div>
              </div>
              <hr className="line" />
              <div className="mt-2 mb-2">
                <h6 className="mb-3">Preview</h6>
                <img src={container} alt="abc" />
                <div className="tick-div-sell">
                  <CheckCircleOutlined style={{ color: "#1DD75B" }} />
                  <div>Make an offer allowed</div>
                </div>
                <div className="tick-div-sell">
                  <CheckCircleOutlined style={{ color: "#1DD75B" }} />
                  <div>Schedule for future time</div>
                  <div className="div-june">June 1, 2022</div>
                </div>
              </div>
              <div className="btn-center-sell">
                <button className="btn-post">Post your listing</button>
              </div>
              <hr className="line" />
              <div>
                <h6 className="mb-3">
                  Fees
                  <ExclamationCircleOutlined
                    style={{ fontSize: ".8rem", marginLeft: ".3rem" }}
                  />
                </h6>
                <p style={{ color: "#6F7787", fontSize: ".7rem" }}>
                  Voluptate laboris adipisicing et nisi veniam
                </p>
                <div className="creat-nft-sell">
                  <div>Create NFT</div>
                  <div>2%</div>
                </div>
                <div className="creat-nft-sell">
                  <div>Manage</div>
                  <div>3%</div>
                </div>
                <div className="creat-nft-sell">
                  <div>Total</div>
                  <div>5%</div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default Selling;
