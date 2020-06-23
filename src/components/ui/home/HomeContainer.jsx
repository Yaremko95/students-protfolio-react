import React from "react";
import { Col, Row, Table } from "react-bootstrap";

function HomeContainer(props) {
  const { students } = props;
  return (
    <Row>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.surname}</td>
              <td>{student.email}</td>
              <td>{student.birthDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Row>
  );
}

export default HomeContainer;
