import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import "../styles/Login.css";

const Login = () => {
  return (
    <Container fluid className="login-container">
      <Row className="align-items-center" style={{ height: "100vh" }}>
        <Col md={6} className="formColumn">
          <LoginForm />
        </Col>

        <Col md={6} className="d-none d-md-block illustration-column">
          <div className="illustration-wrapper">
            <img
              src="path/to/person-and-key.png"
              alt="Person with Key"
              className="illustration-image"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;