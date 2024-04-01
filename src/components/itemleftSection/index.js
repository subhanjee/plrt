import React, { useState } from "react";
import { FilterOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { Slider, Checkbox, Input,Dropdown } from "antd";
import "./index.css";
const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];
function ItemsLeftSection() {
  const [checkedList, setCheckedList] = useState([]);
  const onChange = (value) => {
    console.log("onChange: ", value);
  };
  const onChangeComplete = (value) => {
    console.log("onChangeComplete: ", value);
  }; 
  const handleChange = (value) => {
    setCheckedList(value);
  };
  return (
    <div>
      <div className="fil-div">
        <FilterOutlined style={{ color: "white" }} />
        <h6 className="text-fil">Filters</h6>
      </div>
      <hr className="line-hr" />
      <div className="div-cate"> 
        <h6 className="text-white">Status</h6>
        <DownOutlined style={{ color: "#78788D" }} />
      </div>
      <div className="check-div">
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
            Buy now
          </Checkbox>{" "}
          <Checkbox
            value="checkbox2"
            className={
              checkedList.includes("checkbox2")
                ? "blue-checkbox check"
                : "black-checkbox check"
            }
          >
            On Auction
          </Checkbox>
          <Checkbox
            value="checkbox3"
            className={
              checkedList.includes("checkbox3")
                ? "blue-checkbox check"
                : "black-checkbox check"
            }
          >
            Make Offer
          </Checkbox>
        </Checkbox.Group>
      </div>
      <hr className="line-hr" />
      <div className="div-cate">
        <h6 className="text-white">Pricing</h6>
        <DownOutlined style={{ color: "#78788D" }} />
      </div>
      <div className="div-cate">
        <Input placeholder="Min" />
        <Input placeholder="Max" />
      </div>
      <div className="div-slide">
        <Slider
          range
          step={20}
          defaultValue={[20, 50]}
          onChange={onChange}
          onChangeComplete={onChangeComplete}
          style={{ color: "#20E9FF", width: "264px" }}
        />
      </div>
      <hr className="line-hr" />
      <div className="div-cate">
        <h6 className="text-white">Item quantity</h6>
        <DownOutlined style={{ color: "#78788D" }} />
      </div>
      <div className="check-div">
        <Checkbox.Group
          style={{ width: "100%" }}
          onChange={handleChange}
          value={checkedList}
          className="check-div"
        >
          <Checkbox
            value="checkbox9"
            className={
              checkedList.includes("checkbox1")
                ? "blue-checkbox check"
                : "black-checkbox check"
            }
          >
            All items
          </Checkbox>{" "}
          <Checkbox
            value="checkbox10"
            className={
              checkedList.includes("checkbox2")
                ? "blue-checkbox check"
                : "black-checkbox check"
            }
          >
            Single items{" "}
          </Checkbox>
          <Checkbox
            value="checkbox11"
            className={
              checkedList.includes("checkbox3")
                ? "blue-checkbox check"
                : "black-checkbox check"
            }
          >
            Bundles
          </Checkbox>
        </Checkbox.Group>
      </div>
      <hr className="line-hr" />
      <div className="div-cate">
        <h6 className="text-white">Blockchain</h6>
        <UpOutlined style={{ color: "#78788D" }} />
      </div>
      <div className="div-cate">
        <button className="clear-btn">Clear all</button>
        <button className="apply-btn">Apply</button>
      </div>
    </div>
  );
}

export default ItemsLeftSection;
