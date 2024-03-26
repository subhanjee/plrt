import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import logo from "../../images/PLRT-logotype 1.png";
import "./index.css";
import { Input } from "antd";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#">
          <Link to="/">
            <img src={logo} alt="abc" />{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex">
              <Input
                size="large"
                placeholder="Search items, collections..."
                prefix={
                  <SearchOutlined
                    style={{ color: "#20E9FF", marginRight: ".5rem" }}
                  />
                }
                className="serach-size"
              />
            </Form>
          </Nav>
          <Nav.Link className="text-nav">
            {" "}
            <Link to="/" className="text-nav">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link href="#action2" className="text-nav">
            <Link to="/explore" className="text-nav">
              Explore
            </Link>
          </Nav.Link>
          <Nav.Link href="#action2" className="text-nav">
            <Link to="/profile" className="text-nav">
              Profile
            </Link>
          </Nav.Link>
          <Nav.Link href="#action2" className="text-nav">
            Create
          </Nav.Link>
          <Nav.Link href="#action2" className="text-nav  ">
            <UserOutlined style={{ color: "#20E9FF" }} />
          </Nav.Link>
          <Nav.Link href="#action2" className=" wallet-bnt">
            My Wallet
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
