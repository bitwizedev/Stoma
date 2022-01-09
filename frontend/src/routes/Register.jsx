import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../style/login.css"

export default function Register() {
    const [nume, setNume] = useState("");
    const [prenume, setPrenume] = useState("");  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="nume">
          <Form.Label>Nume</Form.Label>
          <Form.Control
            type="name"
            value={nume}
            onChange={(e) => setNume(e.target.value)}
          />
        </Form.Group>
      <Form.Group size="lg" controlId="prenume">
          <Form.Label>Prenume</Form.Label>
          <Form.Control
            type="name"
            value={prenume}
            onChange={(e) => setPrenume(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password2">
          <Form.Label>Re-Password</Form.Label>
          <Form.Control
            type="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}