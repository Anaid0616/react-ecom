// src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'Quicksand', sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1; 
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 600;
  }

  button {
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    border: none;
    background: none;
    border-radius: 20px;
    text-decoration: none;
    outline: none;
  }

  img {
    max-width: 100%;
    display: block;
    height: auto;
  }
`;
