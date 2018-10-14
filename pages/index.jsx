import React, { Component } from "react";
import Layout from "../src/components/common/Layout";
import { Typography } from "@smooth-ui/core-sc";

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Typography variant="h1">Hello</Typography>
      </Layout>
    );
  }
}
