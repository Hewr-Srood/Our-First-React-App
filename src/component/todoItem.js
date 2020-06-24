import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  FormControl,
  Form,
  Button,
  InputGroup
} from "react-bootstrap";

export default function TodoItem({ txt }) {
  return (
    <>
      <Container>
        <Row className="ml-1  justify-content-md-start my-5 align-itmes-center">
          <Col lg="10" md="10" sm="10" className=" border  p-2">
            <div className="todoItem">
              <input className="mr-3" type="checkbox" />
              <span>{txt}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
