import { Component } from "react";
import Styles from "../Styles";
import Fonts from "../Fonts";
import Header from "../Header";

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Styles />
        <Fonts />
        <Header />
        {children}
      </div>
    );
  }
}
