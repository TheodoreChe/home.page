import { Component } from "react";

let WebFont = null;
if (typeof window !== "undefined") {
    WebFont = require("webfontloader");
}

export default class Fonts extends Component {
    componentDidMount() {
        if (WebFont != null) {
            WebFont.load({
              google: {
                families: [
                  "Noto Sans:400,700",
                  "IBM Plex Serif:400"
                ]
              }
            });
        }
    }
    render() {
        return (
            <div />
        );
    }
}
