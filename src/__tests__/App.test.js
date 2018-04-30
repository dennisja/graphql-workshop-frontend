import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import App from "../App";

describe("App component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders properly", () => {
    const wrapper = shallow(<App />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
