import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import firebase from "../../firebase";
import "./register.css";

class Register extends Component {
  state = {
    nama: "",
    moto: "",
    linkgit: "",
    foto: "",
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

  register = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((respon) => {
        console.log(respon);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ...
      });

    // const { email, password } = this.state;
    // this.props.firebase.register();
  };
  render() {
    return (
      <div className="box">
        <div className="form">
          <center>
            <h3>Silahkan Register</h3>
          </center>
          <Form>
            <Form.Group>
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nama Lengkap"
                onChange={this.changeState}
                name="nama"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Moto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Moto"
                onChange={this.changeState}
                name="moto"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Link Github</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link Github"
                onChange={this.changeState}
                name="linkgit"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Foto</Form.Label>
              <Form.Control
                type="file"
                placeholder=""
                onChange={this.changeState}
                name="foto"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={this.changeState}
                name="email"
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
                onChange={this.changeState}
                name="password"
              />
            </Form.Group>

            <center>
              <Button variant="primary" type="button" onClick={this.register}>
                Register
              </Button>
            </center>
          </Form>
        </div>
      </div>
    );
  }
}

export default Register;
