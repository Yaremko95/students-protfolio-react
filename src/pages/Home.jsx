import React from "react";
import DataSource from "../components/data/DataSource";
import HomeContainer from "../components/ui/home/HomeContainer";
import { Button, Form, Row, Table } from "react-bootstrap";
import ModalCustom from "../components/ui/modal/ModalCustom";
import UpdateData from "../components/data/UpdateData";
import DataForm from "../components/form/DataForm";

function Home(props) {
  return (
    <DataSource>
      {({ students, handleDelete, fetchData }) => {
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
                  <th>Delete</th>
                  <th>Update</th>
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
                    <td>
                      <Button
                        onClick={() => handleDelete(student.id)}
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </td>
                    <td>
                      <ModalCustom
                        trigger={<Button variant="primary">Update</Button>}
                      >
                        <UpdateData
                          student={student}
                          fetchData={fetchData}
                          method={"PUT"}
                          endpoint={`http://localhost:3000/students/${student.id}`}
                        >
                          <DataForm />
                        </UpdateData>
                      </ModalCustom>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        );
      }}
    </DataSource>
  );
}

export default Home;
