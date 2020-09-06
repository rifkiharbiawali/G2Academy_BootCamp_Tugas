import React, { Component } from "react";
import "./App.css";
import { Header, Container, Footer } from "./semua";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="HalUtama">
        <Router>
          <Header />
          <Container />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
