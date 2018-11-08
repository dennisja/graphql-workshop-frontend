import React, { Component } from "react";
import Routes from "./components/Routes";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
