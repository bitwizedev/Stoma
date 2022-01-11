import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import "../style/login.css"

export default function FirstandLastname() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="FirstandLastname">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="FirstName">
          <Form.Label>Nume</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="LastName">
          <Form.Label>Prenume</Form.Label>
          <Form.Control
            type="name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Form.Group>
        
      </Form>
    </div>
  );
}