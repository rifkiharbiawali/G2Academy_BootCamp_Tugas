import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import firebase from "./firebase/fb";
//redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import LoginReducer from "./redux/reducer/LoginReducer";

const store = createStore(LoginReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* {console.log("tes", firebase)} */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
