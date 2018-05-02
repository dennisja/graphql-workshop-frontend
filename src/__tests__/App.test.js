import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { MockedProvider } from "react-apollo/test-utils";
import { StaticRouter, MemoryRouter } from "react-router-dom";

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

  it("renders properly", () => {
    const wrapper = shallow(
      <MockedProvider>
        <App />
      </MockedProvider>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
