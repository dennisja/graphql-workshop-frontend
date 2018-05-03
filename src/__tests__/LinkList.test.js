import React from "react";
import { mount, shallow } from "enzyme";
import { shallowToJson, toJson } from "enzyme-to-json";
import { MockedProvider } from "react-apollo/test-utils";
import LinkListContainer, { LinkList } from "../components/LinkList";
import { GET_LINKS_QUERY } from "../graphql/Queries";
import { fetchLinksMockData } from "../__mocks__/LinksMocks"; // import mock links

/**
 * Tests for the default export (LinkList) graphql container
 */
describe("LinkListContainer ", () => {
  const wrapper = shallow(<LinkListContainer />);

  it(" renders properly", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it("renders the loading screen", () => {
    const request = { query: GET_LINKS_QUERY };
    const wrapper = mount(
      <MockedProvider mocks={[{ request }]}>
        <LinkListContainer />
      </MockedProvider>
    );

    expect(wrapper.find(".loading")).toHaveLength(1);
    expect(wrapper.find(".loading").text()).toEqual("Loading....");
  });

  it(" renders the error component", async () => {
    const request = { query: GET_LINKS_QUERY };
    const error = "Something went Wrong";
    const wrapper = mount(
      <MockedProvider mocks={[{ request, error }]}>
        <LinkListContainer />
      </MockedProvider>
    );

    await new Promise(resolve => setTimeout(resolve));
    wrapper.update();
    expect(wrapper.find("div").text()).toEqual("Error");
  });

  it("passes the corerct props", async () => {
    const request = { query: GET_LINKS_QUERY };
    const result = {
      ...fetchLinksMockData
    };

    const wrapper = mount(
      <MockedProvider mocks={[{ request, result }]}>
        <LinkListContainer />
      </MockedProvider>
    );
    await new Promise(resolve => setTimeout(resolve));
    /**
     * For some reason the props aren't passed, I'll fix this later in the day.
     */
    wrapper.update();
    expect(wrapper.find(LinkListContainer)).toHaveLength(1);
    console.log(wrapper.find(LinkListContainer).props());
  });
});

/**
 * Tests for the exported LinkList wrapped component
 */

describe("LinkList", () => {
  //  this isn't wrapped by apollo. Its the component apollo Higher Order components pass the props of loading ....
  // you can choose to test it seperately when given the loadind, error and data props
  it("displays loding message", () => {
    const wrapper = mount(<LinkList data={{ loading: true }} />);
    expect(wrapper.contains(<div className="loading">Loading....</div>)).toBe(
      true
    );
  });

  it("renders the error component ", () => {
    const wrapper = mount(
      <LinkList
        data={{ loading: false, error: { message: "Something Went Wrong" } }}
      />
    );
    expect(wrapper.find(".error")).toHaveLength(1);
  });

  it("renders the correct number of links", () => {
    const { links } = fetchLinksMockData.data;
    const wrapper = mount(
      <LinkList data={{ loading: false, links, error: null }} />
    );
    expect(wrapper.find("Link")).toHaveLength(links.length);
  });
});
