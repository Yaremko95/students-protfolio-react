import React from "react";
import DataSource from "../components/data/DataSource";
import ReactPaginate from "react-paginate";
import { withRouter } from "react-router-dom";
import { Button, Form, FormControl, Navbar, Row, Table } from "react-bootstrap";
import ModalCustom from "../components/ui/modal/ModalCustom";
import UpdateData from "../components/data/UpdateData";
import DataForm from "../components/form/DataForm";
import { connect } from "react-redux";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
function Home(props) {
  const [query, setQuery] = React.useState("");
  const [page, setPage] = React.useState(0);
  const handlePageClick = (data) => {
    setPage(data.selected);
    console.log(page);
  };
  console.log("-------------", props);
  return (
    <DataSource
      endpoint={"http://localhost:3000/students/"}
      query={query}
      page={page}
      queryKey={"name"}
    >
      {({ pageCount, data, handleDelete, fetchData }) => {
        {
          console.log("data");
        }
        if (!props.loading) {
          console.log(" loaded");
          return (
            <>
              <div className={"d-flex justify-content-between"}>
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
                </Form>
                <ReactPaginate
                  previousLabel={"previous"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  pageCount={pageCount}
                  forcePage={page}
                  onPageChange={handlePageClick}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={3}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  containerClassName={"pagination"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  activeClassName={"active"}
                />
              </div>

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
                      <tr key={student._id}>
                        <td
                          onClick={() =>
                            props.history.push(`/students/${student._id}`)
                          }
                        >
                          {student._id}
                        </td>
                        <td>{student.name}</td>
                        <td>{student.surname}</td>
                        <td>{student.email}</td>
                        <td>{student.dateOfBirth}</td>
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
        } else {
          console.log("not yet");
          return <div style={{ marginTop: "20rem" }}>loading</div>;
        }
      }}
    </DataSource>
  );
}
const mapStateToProps = (state) => state;
export default withRouter(connect(mapStateToProps)(Home));
