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
    min-height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  #root {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    background-color: #D9D8D0;
  }
`;
