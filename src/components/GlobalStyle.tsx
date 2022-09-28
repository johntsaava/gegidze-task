import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
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
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #eee;
  }
`;
