import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate= useNavigate();

  const validatePassword = (password) =>{
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    if(validatePassword(password)) {
      navigate("/home");
    }else{
      setError("Password must contain atleast 8 characters, including a capital letter, a number and a symbol");
    }
  }

  return (
    <div className="loginForm-container">
      <h2 className="loginTitle">Sign In</h2>
      <p className="createAccount-text">
        New User?{" "}
        <a href="/register" style={{ textDecoration: "none" }}>
          {" "}
          Create an account
        </a>
      </p>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="mb-3">
          <Form.Control
            placeholder="Username or email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
          {error && <small className="text-danger">{error}</small>}
        </Form.Group>

        <Form.Group controlId="keepSignInCheckbox" className="remember-me">
          <Form.Check type="checkbox" label="Keep me signed in" />
        </Form.Group>

        <Button variant="dark" type="submit" className="signin-btn" block>
          Sign In
        </Button>
      </Form>

      <div className="text-center mt-3">
        <div className="divider">
          <hr className="line" />
          <span className="social-text"> Or Sign In With</span>
          <hr className="line" />
        </div>
        <Row className="social-icons">
          <Col>
            <FaGoogle size={30} className="social-icon" />
          </Col>
          <Col>
            <FaFacebook size={30} className="social-icon" />
          </Col>
          <Col>
            <FaLinkedin size={30} className="social-icon" />
          </Col>
          <Col>
            <FaTwitter size={30} className="social-icon" />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default LoginForm;