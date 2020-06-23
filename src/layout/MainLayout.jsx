import React from "react";
import NavBar from "../components/ui/NavBar";
import { Container } from "react-bootstrap";

function MainLayout(props) {
  return (
    <>
      <NavBar />
      <Container className={"mt-5"}>{props.children}</Container>
    </>
  );
}

export default MainLayout;
