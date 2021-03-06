import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    &::-webkit-scrollbar{
    display: none;
  }
  }
  #root {
    background: none;
  }

  body {
    background: linear-gradient(rgb(74, 36, 88), #ab59c1) no-repeat;
    background-color: #ab59c1;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Ubuntu;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`
export default GlobalStyle;

