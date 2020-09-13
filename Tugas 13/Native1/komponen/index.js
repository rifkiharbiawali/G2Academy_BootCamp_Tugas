import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import Input from './Input';
// import {Button} from 'react-native-elements';

class Komponen extends Component {
  state = {
    // nama: "",
    Username: '',
    Password: '',
    login: false,
    Data: [
      {Email: 'kiki@gmail.com', Password: '123'},
      {Email: 'rifki@gmail.com', Password: '123'},
    ],
  };
  // ubahValue = (input) => {
  //   let nama = input.target.placeholder;
  //   let value = input.target.value;
  //   // this.props.ubahdata(nama, value);
  //   this.setState({[nama]: value});
  // };

  // username = (nilai) => {
  //   this.state.Data[0].Email;
  // };

  // password = (nilai) => {
  //   this.state.Data[0].Password;
  // };

  login = () => {
    var array = this.state.Data;
    // let found = false;
    for (var i = 0; i < array.length; i++) {
      if (
        this.state.Username === array[i].Email &&
        this.state.Password === array[i].Password
      ) {
        this.setState({login: true});
        return alert(`Hi ${array[i].Email}`);
        // <Text>Hi</Text>;
        // alert('pasword benar');
      }
    }
    alert('email/pasword salah');
  };

  logout = () => {
    this.setState({login: false});
  };

  validasi = () => {
    if (this.state.login === false) {
      return (
        <View
          style={{
            flexDirection: 'column',
            height: 100,
            padding: 20,
          }}>
          <Input
            // nama="email"
            bayangan="Username"
            berubah={(email) => this.setState({Username: email})}
            nilai={this.state.Username}
          />
          <Input
            // nama="password"
            bayangan="Password"
            password={true}
            berubah={(password) => this.setState({Password: password})}
            nilai={this.state.Password}
          />
          <Button
            title="Login"
            color="blue"
            accessibilityLabel="Learn more about this purple button"
            onPress={this.login}
          />

          <Text>Email:rifki@gmail.com</Text>
          <Text>Password:123</Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flexDirection: 'column',
            height: 100,
            padding: 20,
          }}>
          <Text>Hi {this.state.Username}</Text>
          <Button
            title="Logout"
            color="blue"
            accessibilityLabel="Learn more about this purple button"
            onPress={this.logout}
          />
        </View>
      );
    }
  };

  render() {
    return <>{this.validasi()}</>;
  }
}

export default Komponen;
