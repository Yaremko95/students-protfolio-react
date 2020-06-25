import React from "react";
import DataSource from "../components/data/DataSource";

import { Button, Form, Row, Table } from "react-bootstrap";
import ModalCustom from "../components/ui/modal/ModalCustom";
import UpdateData from "../components/data/UpdateData";
import DataForm from "../components/form/DataForm";

function Home(props) {
  return (
    <DataSource endpoint={"http://localhost:3000/students/"}>
      {({ data, handleDelete, fetchData }) => {
        return (
          <>
            <ModalCustom trigger={<Button variant="primary">Update</Button>}>
              <UpdateData
                fetchData={fetchData}
                method={"POST"}
                endpoint={`http://localhost:3000/students/`}
              >
                <DataForm />
              </UpdateData>
            </ModalCustom>
            <Row className={"mt-3"}>
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
                  {data.map((student) => (
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
                            data={student}
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
          </>
        );
      }}
    </DataSource>
  );
}

export default Home;
