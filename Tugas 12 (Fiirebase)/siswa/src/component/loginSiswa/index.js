import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./login.css";
class LoginSiswa extends Component {
  render() {
    return (
      <div className="box">
        <div className="form">
          <center>
            <h3>Hi Siswa</h3>
          </center>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <center>
              <Link to="/Siswa/user">
                <Button variant="primary" type="button">
                  Submit
                </Button>
              </Link>

              <Link to="/Login_Siswa/Register">
                <Button variant="primary" type="button">
                  Register
                </Button>
              </Link>
            </center>
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginSiswa;
