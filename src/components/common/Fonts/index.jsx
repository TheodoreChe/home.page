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
                    families: ['Lato:700', 'Roboto:400']
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
