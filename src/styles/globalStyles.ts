import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    background: ${({ theme }) => theme.colors.gray};
  }
  @font-face {
  font-family:"Gibson";
  src:url("https://use.typekit.net/af/987a60/00000000000000007735a543/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/987a60/00000000000000007735a543/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/987a60/00000000000000007735a543/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
  font-display:auto;
  font-style:normal;
  font-weight:400;
  font-stretch:normal;
  }
`;

export default GlobalStyle;
