/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import ListItem from './komponen/lisItem';
// import Tombol from './komponen/button';
// import {View} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  next = () => {
    let array = this.state.urlFetch;
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
    }
  };

  render() {
    return (
      <>
        <ListItem url={this.state.urlFetch} />
        {/* <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Tombol isi="Next" />
          <Tombol isi="Prev" />
        </View> */}
      </>
    );
  }
}

export default App;
