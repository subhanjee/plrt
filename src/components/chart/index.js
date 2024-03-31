import React, { useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { Container } from "react-bootstrap";
import "./index.css";
import { Select } from "antd";
import chartlogo from "../../images/Chart 1.png";
import up from "../../images/Arrow up 8.png";
import dai from "../../images/Image 185.png";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
  const [options, setOptions] = useState({
    animationEnabled: true,
    title: {
      //   text: "Plrt",
      fontColor: "white",
    },
    axisX: {
      valueFormatString: "DD MMM",
      labelFontColor: "white",
    },
    axisY: {
      labelFontColor: "white", // Set y-axis label text color to white
    },
    data: [
      {
        yValueFormatString: "$#,###",
        xValueFormatString: "DD MMM",
        type: "spline",
        dataPoints: [
          { x: new Date(2017, 0, 20), y: 25060 },
          { x: new Date(2017, 1, 25), y: 27980 },
          { x: new Date(2017, 2, 30), y: 42800 },
          { x: new Date(2017, 3, 12), y: 32400 },
          { x: new Date(2017, 4, 9), y: 35260 },
          { x: new Date(2017, 5, 5), y: 33900 },
          { x: new Date(2017, 6, 16), y: 40000 },
          { x: new Date(2017, 7, 25), y: 52500 },
          { x: new Date(2017, 8, 27), y: 32300 },
          { x: new Date(2017, 9, 11), y: 42000 },
          { x: new Date(2017, 10, 3), y: 37160 },
          { x: new Date(2017, 11, 6), y: 38400 },
        ],
      },
    ],
    backgroundColor: "transparent",
  });

  return (
    <div className="center-chart">
      <Container>
        <div className="div-price-chart">
          <div className="text-white chart-logo">
            <img style={{ background: "white" }} src={chartlogo} alt="" /> Price
            history
          </div>
          <div>
            <Select
              defaultValue="All time"
              style={{
                width: 120,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "All time",
                  label: "All time",
                },
                {
                  value: "All time",
                  label: "All time",
                },
              ]}
            />
          </div>
        </div>
        <div className="ince-div">
          <div>
            <div className="ince-text">Increase</div>
            <div className="text-white chart-logo">
              <img src={up} alt="" />
              206.35%
            </div>
          </div>
          <div>
            <div className="ince-text">Starting price</div>
            <div className="text-white chart-logo">
              <img src={dai} alt="" />
              15.99
            </div>
          </div>
          <div>
            <div className="ince-text">Current price</div>
            <div className="text-white chart-logo">
              <img src={dai} alt="" />
              59.99
            </div>
          </div>
          <div>
            <div className="ince-text">Lowest price</div>
            <div className="text-white chart-logo">
              <img src={dai} alt="" />
              15.99
            </div>
          </div>
          <div>
            <div className="ince-text">Highest price</div>
            <div className="text-white chart-logo">
              <img src={dai} alt="" />
              59.99
            </div>
          </div>
        </div>
        <CanvasJSChart options={options} />
      </Container>
     </div>
  );
};

export default Chart;
