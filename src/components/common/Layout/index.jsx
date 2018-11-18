import { Component } from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
import reset from "styled-reset";
import Head from "next/head";

import { main, global } from "Common/Styles";
import Fonts from "Common/Fonts";
import Header from "Common/Header";

injectGlobal`${reset} ${global}`;

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Head>
          <title>Theodore Chernin</title>
          <link rel="icon" type="image/x-icon" href="/favicon.ico?v=1" />
        </Head>
        <Fonts />
        <ThemeProvider theme={main}>
          <div>
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </div>
    );
  }
}
