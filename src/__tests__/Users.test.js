
// import React from "react";
// import { mount, shallow } from "enzyme";
// import { shallowToJson, toJson } from "enzyme-to-json";
// import { MockedProvider } from "react-apollo/test-utils";
// import UserList from "../components/Users";
// import { GET_USERS_QUERY } from "../graphql/Queries";


// describe("User component", () => {
//   const wrapper = shallow(<UserList />);

//   it(" renders properly", () => {
//     expect(shallowToJson(wrapper)).toMatchSnapshot();
//   });

//   it("renders the loading screen", () => {
//     const request = { query: GET_USERS_QUERY };
//     const wrapper = mount(
//       <MockedProvider mocks={[{ request }]}>
//         <UserList />
//       </MockedProvider>
//     );

//     // expect(wrapper.contains(<div>Loading .....</div>)).toBe(true)
//     expect(wrapper.find(".loading")).toHaveLength(1);
//     expect(wrapper.find(".loading").text()).toEqual("Loading .....");
//   });

//   it(" renders the error component", async () => {
//     const request = { query: GET_USERS_QUERY };
//     const error = "Something went Wrong";
//     const wrapper = mount(
//       <MockedProvider mocks={[{ request, error }]}>
//         <UserList />
//       </MockedProvider>
//     );
//     wrapper.update();
//     await new Promise(resolve => setTimeout(resolve));
//     expect(wrapper.find("div").text()).toEqual("Error");
//   });

//   it("receives the corerct props", async () => {
//     const request = { query: GET_USERS_QUERY };
//     const result = {
//       data: {
//         getUsers: [
//           {
//             id: "cjf8ckrzi002t0874bcuxz3sy",
//             name: "dennis jjagwe",
//             email: "dennisjjagwe@gmail.com"
//           },
//           {
//             id: "cjf8cm2ns002z0874mb1uwowb",
//             name: "dennis jjagwe",
//             email: "dennisjjagwe@ymail.com"
//           },
//           {
//             id: "cjf9hvu1f00190774wrovuw57",
//             name: "dj",
//             email: "dennijjagwe@gmail.com"
//           }
//         ]
//       }
//     };

//     const wrapper = mount(
//       <MockedProvider mocks={[{ request, result }]}>
//         <UserList />
//       </MockedProvider>
//     );

//     wrapper.update();
//     await new Promise(resolve => setTimeout(resolve));
//     // expect(wrapper.find(UserList).props.getUsers).toHaveLength(3);
//   });
// });
it('should ', () => {
  expect(true).toBe(true)
})
