import React from "react";
import DataTable from "react-data-table-component";
import "./index.css";
import { Container } from "react-bootstrap";
import { Select } from "antd";
import { SyncOutlined } from "@ant-design/icons";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const customStyles = {
  rows: {
    style: {
      minHeight: "49px", // override the row height
    },
  },
  headCells: {
    style: {
      background: "#DEE1E6",
      color: "#565D6D",
    },
  },
};
const columns = [
  {
    name: "EVENT",
    selector: (row) => (
      <div style={{ color: "#171A1F", fontWeight: "500" }}> {row.event}</div>
    ),
  },
  {
    name: "PRICE",
    selector: (row) => <div style={{ color: "#171A1F" }}> {row.price}</div>,
  },
  {
    name: "FROM",
    selector: (row) => (
      <div style={{ color: "#9095A1", fontSize: ".7rem", fontWeight: "500" }}>
        {" "}
        {row.from}
      </div>
    ),
  },
  {
    name: "TO",
    selector: (row) => (
      <div style={{ color: "#9095A1", fontWeight: "500", fontSize: ".7rem" }}>
        {" "}
        {row.to}
      </div>
    ),
  },
  {
    name: "DATE",
    selector: (row) => (
      <div style={{ color: "#9095A1", fontWeight: "500", fontSize: ".7rem" }}>
        {" "}
        {row.date}
      </div>
    ),
  },
  {
    name: "DETAIL",
    selector: (row) => (
      <div style={{ color: "#20E9FF", fontWeight: "500" }}> {row.detail}</div>
    ),
  },
];

const data = [
  {
    id: 1,
    event: "Purchased",
    price: "$90.35",
    from: "Carmen Martinez",
    to: "Anna Fernandez",
    date: "May 17, 2022 at 10:00AM",
    detail: "Detail",
  },
  {
    id: 2,
    event: "Listed",
    price: "$82.66",
    from: "Nathan Wood",
    to: " ",
    date: "May 16, 2022 at 08:00PM",
    detail: "Detail",
  },
  {
    id: 3,
    event: "Transferred",
    price: " ",
    from: "Elizabeth Watson",
    to: "Sarah Jones",
    date: "May 15, 2022 at 10:00AM",
    detail: "Detail",
  },
  {
    id: 4,
    event: "Purchased",
    price: "$70.52",
    from: "Sarah Walker",
    to: "Isabel Ortiz",
    date: "May 14, 2022 at 03:00PM",
    detail: "Detail",
  },
  {
    id: 5,
    event: "Transferred",
    price: "-",
    from: "Sarah Walker",
    to: "Daniel Moore",
    date: "May 13, 2022 at 11:00AM",
    detail: "Detail",
  },
  {
    id: 6,
    event: "Purchased",
    price: "$8.90",
    from: "Matthew Thomas",
    to: "Ryan Walker",
    date: "May 13, 2022 at 10:00AM",
    detail: "Detail",
  },
  {
    id: 7,
    event: "Offered",
    price: "$90.14",
    from: "Jack Smith",
    to: "Carmen Martinez",
    date: "May 12, 2022 at 10:00PM",
    detail: "Detail",
  },
];
function TableActive() {
  return (
    <div className="active-div-whole">
      <Container>
        <div className="div-price-chart mb-5" >
          <div className="text-white chart-logo">
            <SyncOutlined spin />
            Activities
          </div>
          <div className="div-fil-act">
            <div className="text-white">Filter</div>
            <Select
              defaultValue="All time"
              style={{
                width: 140,
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
              <Select
              defaultValue="All events  "
              style={{
                width: 140,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "All events  ",
                  label: "All events  ",
                },
                {
                  value: "All time",
                  label: "All time",
                },
              ]}
            />
          </div>
        </div>
        <DataTable columns={columns} data={data} custo mStyles={customStyles} pagination />
      </Container>
    </div>
  );
}

export default TableActive;
