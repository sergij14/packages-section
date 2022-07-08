import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: white;
    color: black;
  }

  a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
  }

  img {
    display: block;
    width: 100%;
  }

  ul {
    list-style: none;
  }
`;
