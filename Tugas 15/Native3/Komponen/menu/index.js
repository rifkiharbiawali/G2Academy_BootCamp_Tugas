import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Input, Button} from 'react-native-elements';
import ListItem from '../itemList';
import {connect} from 'react-redux';
// import LOGIN from '../../redux/action';

const Drawer = createDrawerNavigator();

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
      email: '',
      password: '',
      dataUser: [
        {Email: 'kiki@gmail.com', Password: '123'},
        {Email: 'rifki@gmail.com', Password: '123'},
      ],
    };
  }

  MyDrawer = () => {
    if (this.props.loginState === false) {
      return (
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Login" component={this.Login} />
            <Drawer.Screen name="Register" component={this.Register} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Dasbor" component={this.dasBor} />
            <Drawer.Screen name="Album" component={this.album} />
          </Drawer.Navigator>
        </NavigationContainer>
        // <NavigationContainer>
        //   <Drawer.Navigator>
        //     <Drawer.Screen name="Dasbor" component={this.dasBor} />
        //     <Drawer.Screen name="Album" component={this.album} />
        //   </Drawer.Navigator>
        // </NavigationContainer>
      );
    }
    // {
    //   this.state.islogin ? (
    //     <NavigationContainer>
    //       <Drawer.Navigator>
    //         <Drawer.Screen name="Login" component={this.Login} />
    //         <Drawer.Screen name="Register" component={this.Register} />
    //       </Drawer.Navigator>
    //     </NavigationContainer>
    //   ) : (
    //     <NavigationContainer>
    //       <Drawer.Navigator>
    //         <Drawer.Screen name="Dasbor" component={this.dasBor} />
    //         <Drawer.Screen name="Album" component={this.album} />
    //       </Drawer.Navigator>
    //     </NavigationContainer>
    //   );
    // }
  };

  dasBor = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hi {this.state.email}</Text>
        <Button title="Logout" onPress={this.props.tipeLogin} />
      </View>
    );
  };

  album = () => {
    return <ListItem />;
  };

  Validasi = () => {
    let data = this.state.dataUser;
    // let email = this.state.email;
    // let password = this.state.password;
    for (let i = 0; i < data.length; i++) {
      if (
        this.state.email === data[i].Email &&
        this.state.password === data[i].Password
      ) {
        // this.setState({islogin: true});
        this.props.tipeLogin();
        return alert(`hi${data[i].Email}`);
      }
    }
    alert('email/pasword salah');
  };

  Login = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, color: '#D5DBDB'}}>Silahkan Login</Text>
        <Input
          placeholder="Email"
          onChangeText={(email) => this.setState({email: email})}
          defaultValue={this.state.email}
        />
        <Input
          placeholder="Password"
          onChangeText={(password) => this.setState({password: password})}
          defaultValue={this.state.password}
          secureTextEntry={true}
        />
        <Button title="Login" onPress={this.Validasi} />
      </View>
    );
  };

  Register = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Coming Soon</Text>
      </View>
    );
  };

  tes = () => {
    console.warn(this.state.islogin);
  };
  render() {
    return (
      <>
        {this.MyDrawer()}
        {/* {this.tes()} */}
      </>
    );
  }
}

const reduxState = (state) => ({
  loginState: state.Login.isLogin,
});
const mapDispatchToProps = (dispatch) => ({
  tipeLogin: () => dispatch({type: 'LOGIN'}),
});

export default connect(reduxState, mapDispatchToProps)(Menu);
