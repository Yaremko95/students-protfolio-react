import React from "react";
import { Button, Form } from "react-bootstrap";

function DataForm(props) {
  const { onSubmit, setData, student } = props;
  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={student.name}
          onChange={(e) => setData({ name: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter surname"
          value={student.surname}
          onChange={(e) => setData({ surname: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          value={student.email}
          onChange={(e) => setData({ email: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          value={student.birthDate}
          onChange={(e) => setData({ birthDate: e.target.value })}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default DataForm;
