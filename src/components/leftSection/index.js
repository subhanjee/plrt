import React, { useState } from "react";
import { FilterOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { Slider, Checkbox, Input } from "antd";

import "./index.css";

function LeftSection() {
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
        <h6 className="text-white">Categories</h6>
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
            All
          </Checkbox>{" "}
          <Checkbox
            value="checkbox2"
            className={
              checkedList.includes("checkbox2")
                ? "blue-checkbox check"
                : "black-checkbox check"
            }
          >
            Trending
          </Checkbox>
          <Checkbox
            value="checkbox3"
            className={
              checkedList.includes("checkbox3")
                ? "blue-checkbox check"
                : "black-checkbox check"
            }
          >
            Ebooks
          </Checkbox>
          <Checkbox
            value="checkbox4"
            className={
              checkedList.includes("checkbox4")
                ? "blue-checkbox check"
                : "black-checkbox check"
            }
          >
            Graphics
          </Checkbox>
          <Checkbox
            value="checkbox5"
            className={
              checkedList.includes("checkbox5")
                ? "blue-checkbox check"
                : "black-checkbox check"
            }
          >
            Video
          </Checkbox>
          <Checkbox
            value="checkbox6"
            className={
              checkedList.includes("checkbox6")
                ? "blue-checkbox check"
                : "black-checkbox check"
            }
          >
            Audio
          </Checkbox>
          <Checkbox
            value="checkbox7"
            className={
              checkedList.includes("checkbox7")
                ? "blue-checkbox check"
                : "black-checkbox check"
            }
          >
            Software
          </Checkbox>
          <Checkbox
            value="checkbox8"
            className={
              checkedList.includes("checkbox8")
                ? "blue-checkbox check"
                : "black-checkbox check"
            }
          >
            Resources
          </Checkbox>
        </Checkbox.Group>
      </div>
      <hr className="line-hr" />
      <div className="div-cate">
        <h6 className="text-white">Pricing</h6>
        <DownOutlined style={{ color: "#78788D" }} />
      </div>
      <div className="div-cate">
        <Input placeholder="Min"/>
        <Input placeholder="Max"/>
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
            All
          </Checkbox>{" "}
          <Checkbox
            value="checkbox10"
            className={
              checkedList.includes("checkbox2")
                ? "blue-checkbox check"
                : "black-checkbox check"
            }
          >
            Single items
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

export default LeftSection;
