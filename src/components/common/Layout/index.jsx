import { Component } from "react";
import { injectGlobal } from "styled-components";
import { ThemeProvider, globalStyle } from "@smooth-ui/core-sc";
import reset from "styled-reset";
import Head from "next/head";

import { main } from "../Styles";
import Fonts from "../Fonts";
import Header from "../Header";

injectGlobal`${reset} ${globalStyle()}`;

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Head>
          <title>Theodore Chernin</title>
        </Head>
        <Fonts />
        <Header />
        <ThemeProvider theme={main}>{children}</ThemeProvider>
      </div>
    );
  }
}
