import React, { Component } from "react";
import ReactDOM from "react-dom";
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
import TodoItem from "./todoItem";

export default function Main() {
  return (
    <>
      <Container>
        <Row className="  justify-content-md-center my-5 align-itmes-center">
          <Col className="">
            <Form id="todoForm" className="" onSubmit={todoSubmitFunc}>
              <Row className=" justify-content-md-center ">
                <Col xs={7} lg="9">
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Add Todo</Form.Label>
                    <Form.Control
                      id="todo-input"
                      type="text"
                      placeholder="Finish HW"
                      required
                    />
                  </Form.Group>
                </Col>

                <Col xs className=" text-center align-self-center mt-3">
                  <Button form="todoForm" variant="primary" type="submit">
                    Add Todo
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row
          id="todo-container"
          className="m-1 justify-content-md-start  align-itmes-center"
        />
      </Container>
    </>
  );
}

function todoSubmitFunc(e) {
  e.preventDefault();
  let todo = document.createElement("div");
  todo.className = ` col-10 border p-2 my-2 slide-in-elliptic-right-fwd `;
  const todoInput = document.getElementById("todo-input");
  const todoContainer = document.getElementById("todo-container");
  const form = document.getElementById("todoForm");

  let newTodo = (
    <div className="todoItem">
      <input className="mr-3" type="checkbox" />
      <span>{todoInput.value}</span>
    </div>
  );

  ReactDOM.render(newTodo, todo);
  todoContainer.insertAdjacentElement("afterbegin", todo);
  form.reset();
}
