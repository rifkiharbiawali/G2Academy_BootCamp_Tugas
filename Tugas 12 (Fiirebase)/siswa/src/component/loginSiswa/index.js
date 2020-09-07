import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import firebase from "../../firebase";

import "./login.css";
class LoginSiswa extends Component {
  state = {
    email: "",
    password: "",
  };

  changeState = (berubah) => {
    let nama = berubah.target.name;
    let nilai = berubah.target.value;
    this.setState({
      [nama]: nilai,
    });
  };

  loginSiswa = () => {
    console.log(this.state.email);
    console.log(this.state.password);
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
  };

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
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={this.changeState}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.changeState}
              />
            </Form.Group>
            <center>
              {/* <Link to="/Siswa/user"> */}
              <Button variant="primary" type="button" onClick={this.loginSiswa}>
                Submit
              </Button>
              {/* </Link> */}

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
