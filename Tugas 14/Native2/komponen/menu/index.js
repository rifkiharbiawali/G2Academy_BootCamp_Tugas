import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const Drawer = createDrawerNavigator();

    function MyDrawer() {
      return (
        <Drawer.Navigator>
          <Drawer.Screen name="Feed" component={Feed} />
          <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
      );
    }
  }
  render() {
    return <>{this.MyDrawer()}</>;
  }
}

export default Menu;
