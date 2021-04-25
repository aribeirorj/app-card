import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,400;0,700;1,800&display=swap');

  *:focus {
    outline:0;
  }

  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    outline: 0;
    font-size: 62,5%;
    background-color: rgb(132,132,179);     
    box-sizing: border-box;
   
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: #707070;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    color: #c3c3c3;
  }
`;

export default GlobalStyle;
