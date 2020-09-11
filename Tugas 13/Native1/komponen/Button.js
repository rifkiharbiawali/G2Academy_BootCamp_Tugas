import React, {Component} from 'react';

class Input extends Component {
  render() {
    // const tes = () => {};
    return (
      <>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 5}}
          //   onChangeText={(text) => onChangeText(text)}
          //   value={value}
          secureTextEntry={this.props.password}
          placeholder={this.props.bayangan}
        />
      </>
    );
  }
}

export default Input;
