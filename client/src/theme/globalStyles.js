import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    font-family: 'Mitr', sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    margin: 0;
    padding-bottom: 25px;
    overflow-x: hidden;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
