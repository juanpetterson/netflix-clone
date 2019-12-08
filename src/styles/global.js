import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: initial;
    outline: 0;
  }

  html, body, #app {
    height: 100%;
    background-color: #141414;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
  }
`;

export default GlobalStyle;
