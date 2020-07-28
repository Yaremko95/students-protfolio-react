import React from "react";
import DataSource from "../components/data/DataSource";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { createUseStyles } from "react-jss";
import ProfileImg from "../components/ui/profileImage/ProfileImg";
import SliderContainer from "../components/ui/sideBar/SliderContainer";

function Student(props) {
  const useStyle = createUseStyles({
    profileContainer: {
      display: "flex",
      justifyContent: "space-around",
      padding: "5rem 5rem",
    },

    title: {
      fontSize: "65px",
      fontWeight: "400",
      borderColor: "rgb(107, 103, 104)",
    },
  });
  const classes = useStyle();
  const [selected, setSelected] = React.useState(props.match.params.studentId);
  console.log(selected);
  return (
    <Row>
      <Col className={"col-3"}>
        <DataSource endpoint={"http://localhost:3000/students/"}>
          {({ data }) => {
            return (
              <SliderContainer
                data={data}
                setSelected={setSelected}
                selected={selected}
              />
            );
          }}
        </DataSource>
      </Col>
      <DataSource endpoint={`http://localhost:3000/students/${selected}`}>
        {({ data }) => {
          return (
            <Col className={"col-9 " + classes.profileContainer}>
              <div>
                <span className={classes.title}>
                  {data.name} {data.surname}
                </span>
              </div>
              <ProfileImg data={data} />
            </Col>
          );
        }}
      </DataSource>
    </Row>
  );
}

export default Student;
