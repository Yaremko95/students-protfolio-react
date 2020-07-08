import React from "react";
import { Button, Form } from "react-bootstrap";

function DataForm(props) {
  const { onSubmit, setData, data } = props;
  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={data.name}
          onChange={(e) => setData({ name: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter surname"
          value={data.surname}
          onChange={(e) => setData({ surname: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          value={data.email}
          onChange={(e) => setData({ email: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          value={data.birthDate}
          onChange={(e) => setData({ birthDate: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="text"
          value={data.country}
          onChange={(e) => setData({ country: e.target.value })}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default DataForm;
