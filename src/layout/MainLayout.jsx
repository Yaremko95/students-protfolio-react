import React from "react";
import NavBar from "../components/ui/NavBar";
import { Container } from "react-bootstrap";
import { createUseStyles } from "react-jss";
function MainLayout(props) {
  const useStyles = createUseStyles({
    container: {
      background:
        "linear-gradient(41deg, rgba(249,241,239,1) 0%, rgba(249,241,239,1) 72%, rgba(255,255,255,1) 100%)",
      height: "100vh",
      fontFamily: "Playfair Display",
      color: "rgb(10, 26, 43)",
      zIndex: "100",
    },
  });
  const classes = useStyles();
  return (
    <>
      <NavBar className={classes.container} />
      <Container fluid className={classes.container}>
        {props.children}
      </Container>
    </>
  );
}

export default MainLayout;
