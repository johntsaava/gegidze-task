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

  html {
    height: 100%;
  }

  body {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  #root {
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    background-color: #D9D8D0;
  }
`;
