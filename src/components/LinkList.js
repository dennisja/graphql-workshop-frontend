import React from "react";
import { graphql } from "react-apollo";
import Link from "./Link";
import { GET_LINKS_QUERY } from "../graphql/Queries";

export const LinkList = props => {
  const { links, loading, error } = props.data;

  if (loading) return <div className="loading">Loading....</div>;

  if (error) return <div className="error">Error: {error.message}</div>;

  return <div>{links.map(link => <Link key={link.id} link={link} />)}</div>;
};

export default graphql(GET_LINKS_QUERY, { name: "data" })(LinkList);
