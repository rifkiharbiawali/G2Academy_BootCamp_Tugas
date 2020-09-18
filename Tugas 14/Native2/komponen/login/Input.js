import React, {Component} from 'react';
import {TextInput} from 'react-native';

class Input extends Component {
  render() {
    // const tes = () => {};
    return (
      <>
        <TextInput
          // name={this.props.nama}
          style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 5}}
          onChangeText={this.props.berubah}
          defaultValue={this.props.nilai}
          secureTextEntry={this.props.password}
          placeholder={this.props.bayangan}
        />
      </>
    );
  }
}

export default Input;
