import React from "react";
import DataSource from "../components/data/DataSource";

import { Button, Form, FormControl, Navbar, Row, Table } from "react-bootstrap";
import ModalCustom from "../components/ui/modal/ModalCustom";
import UpdateData from "../components/data/UpdateData";
import DataForm from "../components/form/DataForm";

function Home(props) {
  const [query, setQuery] = React.useState("");
  const handleChange = (query) => {
    setQuery(query);
  };
  return (
    <DataSource endpoint={"http://localhost:3000/students/"} query={query}>
      {({ data, handleDelete, fetchData }) => {
        return (
          <>
            <div className={"d-flex"}>
              <ModalCustom
                trigger={<Button variant="primary">Add Student</Button>}
              >
                <UpdateData
                  fetchData={fetchData}
                  method={"POST"}
                  endpoint={`http://localhost:3000/students/`}
                >
                  <DataForm />
                </UpdateData>
              </ModalCustom>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Button onClick={fetchData} variant="outline-info">
                  Search by country
                </Button>
              </Form>
            </div>

            <Row className={"mt-3"}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Date of Birth</th>
                    <th>Delete</th>
                    <th>Update</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((student) => (
                    <tr key={student._id}>
                      <td>{student._id}</td>
                      <td>{student.name}</td>
                      <td>{student.surname}</td>
                      <td>{student.email}</td>
                      <td>{student.country}</td>
                      <td>{student.birthDate}</td>
                      <td>
                        <Button
                          onClick={() => handleDelete(student._id)}
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
                            endpoint={`http://localhost:3000/students/${student._id}`}
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
