import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    font-weight: 550;
    background: #f5f5f5;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
  }
`;
