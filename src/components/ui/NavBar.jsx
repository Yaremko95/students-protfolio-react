import React, { Component } from "react";
import {
  Navbar,
  Nav,
  InputGroup,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to={"/"}>
          Navbar
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={"/"}>
            Students
          </Nav.Link>
          <Nav.Link as={Link} to={"/projects"}>
            Projects
          </Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default NavBar;
