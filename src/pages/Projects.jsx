import React from "react";
import DataSource from "../components/data/DataSource";
import { Button, Row, Table } from "react-bootstrap";
import ModalCustom from "../components/ui/modal/ModalCustom";
import UpdateData from "../components/data/UpdateData";
import DataForm from "../components/form/DataForm";
import ProjectForm from "../components/form/ProjectForm";

function Projects(props) {
  return (
    <DataSource endpoint={"http://localhost:3000/projects/"}>
      {({ data, handleDelete, fetchData }) => {
        return (
          <Row className={"mt-3"}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project Title</th>
                  <th>Description</th>
                  <th>Student ID</th>
                  <th>Repository URL</th>
                  <th>Live URL</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((project) => (
                  <tr key={project.id}>
                    <td>{project.id}</td>
                    <td>{project.name}</td>
                    <td>{project.description}</td>
                    <td>{project.studentID}</td>
                    <td>{project.repoURL}</td>
                    <td>{project.liveURL}</td>
                    <td>
                      <Button
                        onClick={() => handleDelete(project.id)}
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
                          data={project}
                          fetchData={fetchData}
                          method={"PUT"}
                          endpoint={`http://localhost:3000/projects/${project.id}`}
                        >
                          <ProjectForm />
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

export default Projects;
