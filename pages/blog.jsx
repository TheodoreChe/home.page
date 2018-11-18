import React, { Component } from "react";
import Layout from "Common/Layout";
import { Container } from "Common/Layout/style";
import Post from "Blog/Post";

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Post
            title="Shaders"
            text="For three years&nbsp;I had three or&nbsp;four shader tasks. It&rsquo;s not a&nbsp;
            lot, but&nbsp;I want some place where&nbsp;I can show some of&nbsp;them which&nbsp;
            I like more. So&nbsp;I&nbsp;will collect them here."
            href="/shaders"
            linkText="Look at shaders"
        />
        </Container>
      </Layout>
    );
  }
}
