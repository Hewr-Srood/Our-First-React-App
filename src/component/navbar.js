import React, { Component } from "react";
import { FcHome } from "react-icons/fc";

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

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        React Todo <FcHome />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>Made By Jalal & Hewr & Abdulbasit</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
