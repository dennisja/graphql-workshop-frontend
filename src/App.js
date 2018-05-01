import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import apolloClient from "./components/ApolloClient";
import Routes from './components/Routes';
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={apolloClient}>
          <div className="App">
            <Header />
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
