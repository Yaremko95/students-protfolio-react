import React from "react";
import DataSource from "../components/data/DataSource";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { createUseStyles } from "react-jss";

function Student(props) {
  const useStyle = createUseStyles({
    profileContainer: {
      display: "flex",
      justifyContent: "space-around",
      padding: "5rem 5rem",
    },
    imageContainer: {
      position: "relative",
      marginTop: "2rem",
    },
    imageTitle: {
      position: "absolute",
      height: "180px",
      width: "180px",
      fontSize: "16px",
    },
    char: {
      position: "absolute",
      top: "-40%",
      left: "0",
      height: "100%",
      transformOrigin: "bottom-center",
      width: "30px",
      fontWeight: "600",
      fontSize: "20px",
      color: "#ee7968",
    },
    image: {
      maxWidth: "25rem",
      height: "40rem",
      objectFit: "cover",
      boxShadow: "rgba(194, 175, 169, 0.55) 19px 30px 45px 5px",
    },
    title: {
      fontSize: "65px",
      fontWeight: "400",
      borderColor: "rgb(107, 103, 104)",
    },
  });
  const classes = useStyle();
  console.log(props);

  return (
    <Row>
      <Col className={"col-3"}></Col>
      <DataSource
        endpoint={`http://localhost:3000/students/${props.match.params.studentId}`}
      >
        {({ data }) => {
          let i = 200;
          const titleArr = Array.from(data.name + " " + data.surname);
          return (
            <Col className={"col-9 " + classes.profileContainer}>
              <div>
                <span className={classes.title}>
                  {data.name} {data.surname}
                </span>
              </div>
              <div className={classes.imageContainer}>
                <div className={classes.imageTitle}>
                  {titleArr.map((char, index) => {
                    i = 230 / titleArr.length + i;
                    console.log(200 + i);
                    return (
                      <span
                        className={classes.char}
                        key={index}
                        style={{ transform: `rotate(${i}deg)` }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </div>
                <Image className={classes.image} src={data.image} />
              </div>
            </Col>
          );
        }}
      </DataSource>
    </Row>
  );
}

export default Student;
