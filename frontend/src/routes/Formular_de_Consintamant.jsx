import React, {useState} from "react";
import Signaturepad from "../assets/SignaturePad";
import FirstandLastname from "../assets/First_Last_Name";





export default function FormularConsintamant(){

    function handleSubmit(event){
        event.preventDefault();
    }



    return(
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
        <Signaturepad/>
        <FirstandLastname/>

        <Button block size="lg" type="submit" >
          Trimite
        </Button>
      </Form>
    </div>
    );
}