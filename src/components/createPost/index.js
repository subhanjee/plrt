import React, { useState } from "react";
import "./index.css";
import { Switch, Checkbox, Form, Input, InputNumber, Select } from "antd";
import { Container } from "react-bootstrap";
import { UploadButton } from "@bytescale/upload-widget-react";
import cover from "../../images/Image 231.png";
const options = {
  apiKey: "public_FW25bz4Fho9x1dyWAJ2ZWdC37Vsq",
  maxFileCount: 1,
};
function CreatePost() {
  const [form] = Form.useForm();
  const [checkedList, setCheckedList] = useState([]);
  const onFinish = (values) => {
    console.log(values);
  };
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  // const onReset = () => {
  //   form.resetFields();
  // };
  const handleChange = (value) => {
    setCheckedList(value);
  };
  const handleChange1 = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="div-whole-create">
      <div>
        <h3 className="text-white mb-5">Create new item </h3>
        <Container>
          <div>
            <Form
              form={form}
              onFinish={onFinish}
              variant="filled"
              style={{
                maxWidth: 600,
              }}
            >
              <h6 className="text-white">Upload Cover Photo</h6>
              <p className="text-white dus-text">
                Upload the main image or artwork for your NFT. Accepted file
                types: JPG, PNG. Maximum file size: 10MB.
              </p>
              <Form.Item
                name="Input"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <div className="cover-div">
                  <img src={cover} alt="abc" />
                </div>
                <div className="btn-change">
                  <button className="bt-change">Change</button>
                  <button className="bt-remove">Remove</button>
                </div>
              </Form.Item>
              <h6 className="text-white">Product Name *</h6>
              <p className="text-white dus-text">
                Duis consectetur adipisicing irure anim incididunt ex Lorem
                ullamco fugiat
              </p>
              <Form.Item
                name="Input"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <Input className="input-size" placeholder="Product Name " />
              </Form.Item>
              <h6 className="text-white">Description</h6>
              <p className="text-white dus-text">
                Duis consectetur adipisicing irure anim incididunt ex Lorem
                ullamco fugiat
              </p>
              <Form.Item
                name="TextArea"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <Input.TextArea
                  className="input-size"
                  placeholder="Description"
                  rows={5}
                />
              </Form.Item>
              <h6 className="text-white">Collection</h6>
              <p className="text-white dus-text">
                Duis consectetur adipisicing irure anim incididunt ex Lorem
                ullamco fugiat
              </p>
              <Form.Item
                name="Select"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <Select
                  onChange={handleChange1}
                  className="input-size"
                  placeholder="Unknown Birds"
                  options={[
                    {
                      value: "Unknown Birds",
                      label: "Unknown Birds",
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
              </Form.Item>
              <hr className="line" />
              <h6 className="text-white">Product Downloads</h6>
              <p className="text-white dus-text">
                "Accepted file types: Images, videos, audio, documents (JPG,
                PNG, MP4, MP3, ZIP, PDF.). Max upload: 1GB."
              </p>
              <Form.Item
                name="upload"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <div className="div-upload">
                  <h6>Drop files here</h6>
                  <p className="dus-text">Supported format: PNG, JPG</p>
                  <UploadButton
                    options={options}
                    onComplete={(files) =>
                      alert(files.map((x) => x.fileUrl).join("\n"))
                    }
                  >
                    {({ onClick }) => (
                      <button onClick={onClick} className="btn-upload">
                        Upload a file...
                      </button>
                    )}
                  </UploadButton>
                </div>
              </Form.Item>
              <div className="flex-swit">
                <h6 className="text-white">Unlockable content</h6>
                <Switch
                  defaultChecked
                  onChange={onChange}
                  style={{ background: "#20e9ff" }}
                />
              </div>
              <p className="text-white dus-text">
                Enter custom message for download page.
              </p>
              <Form.Item
                name="TextArea"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <Input.TextArea
                  className="input-size"
                  placeholder="Unlockable content"
                  rows={5}
                />
              </Form.Item>
              <hr className="line" />
              <h6 className="text-white">Supply</h6>
              <p className="text-white dus-text">
                Specify the total number of copies or editions for your NFT.
                This determines the scarcity of your NFT. Enter a number between
                1 and 1000.
              </p>
              <Form.Item
                name="InputNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  className="input-size"
                  placeholder="100"
                />
              </Form.Item>
              <h6 className="text-white">Rarity Level</h6>
              <p className="text-white dus-text">Choose Rarity Level:</p>
              <Form.Item>
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
                      Legendary: Minted in extremely limited quantities (e.g.,
                      1-50)
                    </Checkbox>{" "}
                    <Checkbox
                      value="checkbox2"
                      className={
                        checkedList.includes("checkbox2")
                          ? "blue-checkbox check"
                          : "black-checkbox check"
                      }
                    >
                      Epic: Minted in very limited quantities (e.g., 50-100){" "}
                    </Checkbox>
                    <Checkbox
                      value="checkbox3"
                      className={
                        checkedList.includes("checkbox3")
                          ? "blue-checkbox check"
                          : "black-checkbox check"
                      }
                    >
                      Rare: Minted in limited quantities (e.g., 100-300){" "}
                    </Checkbox>
                    <Checkbox
                      value="checkbox4"
                      className={
                        checkedList.includes("checkbox4")
                          ? "blue-checkbox check"
                          : "black-checkbox check"
                      }
                    >
                      Uncommon: Minted in moderate quantities (e.g., 300 - 500)
                    </Checkbox>
                    <Checkbox
                      value="checkbox5"
                      className={
                        checkedList.includes("checkbox5")
                          ? "blue-checkbox check"
                          : "black-checkbox check"
                      }
                    >
                      Common: Minted in large quantities (e.g., 500 - 1000)
                    </Checkbox>
                  </Checkbox.Group>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default CreatePost;
