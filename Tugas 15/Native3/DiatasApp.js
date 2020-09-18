import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Anak from './App';
import {persistS, store} from './redux/store';
// import store from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

class DiatasApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistS}>
          <Anak />
        </PersistGate>
      </Provider>
    );
  }
}

export default DiatasApp;
