import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import apolloClient from "./components/ApolloClient";
import logo from "./logo.svg";
import "./App.css";
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={apolloClient}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <div>
              <Routes />
            </div>
          </div>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
