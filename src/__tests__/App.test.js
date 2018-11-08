import React from "react";
import ReactDOM from "react-dom";
import { MockedProvider } from "react-apollo/test-utils";
import { StaticRouter, } from "react-router-dom";

import App from "../App";

describe("App component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <StaticRouter context={{}}>
        <MockedProvider>
          <App />
        </MockedProvider>
      </StaticRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should logout successfully', () => {
    window.localStorage = {
      getItem: jest.fn((mockArgument)=>"MockToken")
    }

  })
  
});
