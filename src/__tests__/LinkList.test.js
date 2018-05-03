import React from "react";
import { mount, shallow } from "enzyme";
import { shallowToJson, toJson } from "enzyme-to-json";
import { MockedProvider } from "react-apollo/test-utils";
import LinkList from "../components/LinkList";
import { GET_LINKS_QUERY } from "../graphql/Queries";

describe("User component", () => {
  const wrapper = shallow(<LinkList />);

  it(" renders properly", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it("renders the loading screen", () => {
    const request = { query: GET_LINKS_QUERY };
    const wrapper = mount(
      <MockedProvider mocks={[{ request }]}>
        <LinkList />
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
        <LinkList />
      </MockedProvider>
    );
    
    await new Promise(resolve => setTimeout(resolve));
    wrapper.update();
    expect(wrapper.find("div").text()).toEqual("Error");
  });

  it("passes the corerct props", async () => {
    const request = { query: GET_LINKS_QUERY };
    const result = {
      data: {
        links: [
          {
            id: "1",
            url: "https://google.com",
            title: "Google Search",
            postedBy: {
              id: "1",
              firstName: "dennis",
              lastName: "jjagwe",
              username: "dj"
            }
          },
          {
            id: "2",
            url: "https://whatsapp.com",
            title: "Whatsapp Messenger",
            postedBy: {
              id: "1",
              firstName: "dennis",
              lastName: "jjagwe",
              username: "dj"
            }
          }
        ]
      }
    };

    const wrapper = mount(
      <MockedProvider mocks={[{ request, result }]} removeTypename>
        <LinkList />
      </MockedProvider>
    );
    await new Promise(resolve => setTimeout(resolve));
    wrapper.update();
    expect(wrapper.find(LinkList)).toHaveLength(1);
    // console.log(wrapper.find(LinkList).props())
  });
});
