import {createGlobalStyle} from 'styled-components';
import "@fontsource/jost/500.css"
import "@fontsource/jost/400.css"
import "@fontsource/jost/700.css"
import "@fontsource/jost/300.css"

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Jost', sans-serif;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background-color: ${({theme}) => theme.colors.white};
  }
  
  a, button, input {
    font-family: 'Jost', sans-serif;
  }
`;