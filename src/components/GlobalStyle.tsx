import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline-color: #BFBEB0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  html,
  body {
    min-height: 100vh;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #D9D8D0;
  }
`;
