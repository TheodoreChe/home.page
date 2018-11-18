import React, { Component } from "react";
import Layout from "Common/Layout";
import { Container } from "Common/Layout/style";
import { Hello } from "Common/Typography";

export default class Index extends Component {
  render() {
    return <Layout>
        <Container>
          <Hello>
            I&nbsp;am a&nbsp;Front-end Developer. I make websites and web
            applications. I have 7 years commercial experience. <br />
            Site is&nbsp;under construction now
          </Hello>
        </Container>
      </Layout>;
  }
}
