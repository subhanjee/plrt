import React, { useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { Container } from 'react-bootstrap';
import "./index.css"
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
    const [options, setOptions] = useState({
        animationEnabled: true,
        title: {
            text: "Plrt - 2017"
        },
        axisX: {
            valueFormatString: "MMM"
        },
        // axisY: {
        //     title: "Sales (in USD)",
        //     prefix: "$"
        // },
        data: [{
            yValueFormatString: "$#,###",
            xValueFormatString: "MMMM",
            type: "spline",
            dataPoints: [
                { x: new Date(2017, 0), y: 25060 },
                { x: new Date(2017, 1), y: 27980 },
                { x: new Date(2017, 2), y: 42800 },
                { x: new Date(2017, 3), y: 32400 },
                { x: new Date(2017, 4), y: 35260 },
                { x: new Date(2017, 5), y: 33900 },
                { x: new Date(2017, 6), y: 40000 },
                { x: new Date(2017, 7), y: 52500 },
                { x: new Date(2017, 8), y: 32300 },
                { x: new Date(2017, 9), y: 42000 },
                { x: new Date(2017, 10), y: 37160 },
                { x: new Date(2017, 11), y: 38400 }
            ]
        }]
    });

    useEffect(() => {
        // You can perform any side effects here if needed
        // For example: fetching data, subscribing to events, etc.
        // This hook will run after every render
    }, []); // The empty array [] means this effect will only run once

    return (
        <div>
            <Container>
            <CanvasJSChart options={options}  />
            </Container>
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
};

export default Chart;
