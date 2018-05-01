/**
 * This file demonstrates using the Query graphql container component
 * The contained component (Users) is defined out of the container component to show that this is possible
 */
import React from "react";
import { Query } from "react-apollo";
import { GET_USERS_QUERY } from "../graphql/Queries";

/**
 * Renders a single User
 * @param {object} props - An object that contains props to pass in to the User component
 */
export const User = ({ user }) => (
  <div>
    <hr />
    <div>Name: {`${user.firstName} ${user.lastName}`}</div>
    <div>Email: {user.email}</div>
    <div>UserName: {user.username}</div>
    <hr />
  </div>
);

/**
 * Renders a list of users
 * @param {object}  props - An object that contains loading, error and data keys passed by the apollo Query container
 */
export const Users = ({ loading, error, data }) => {
  if (loading) return <div>Loading....</div>;

  if (error) return <div>Error: {error.message}</div>;

  if (data.users.length === 0) return <div>No registered users </div>;

  return data.users.map(user => <User key={user.id} user={user} />);
};

/**
 * Passes props to the Users componenet
 */
const UsersList = () => {
  return <Query query={GET_USERS_QUERY}>{Users}</Query>;
};

export default UsersList;
