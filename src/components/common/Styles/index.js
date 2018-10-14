import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";

injectGlobal`
  ${styledNormalize}

  body{
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: hsl(0, 0%, 99%);
  }
`;

export default () => null;
