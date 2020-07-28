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
import { createUseStyles } from "react-jss";

function NavBar(props) {
  const useStyle = createUseStyles({
    nav: {
      background:
        "linear-gradient(41deg, rgba(249,241,239,1) 0%, rgba(249,241,239,1) 72%, rgba(255,255,255,1) 100%)",
      fontFamily: "Playfair Display",
      zIndex: "100",
    },
  });
  const classes = useStyle();
  return (
    <Navbar className={classes.nav}>
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

export default NavBar;
