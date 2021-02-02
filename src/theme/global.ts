import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: open sans,helvetica neue,Helvetica,Arial,sans-serif;
    font-size: 14px;
  }
  body {
    background: #fff;
    color: #4a4a4a;
    font-family: open sans,helvetica neue,Helvetica,Arial,sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  html, body, #root {
    height: 100%;
  }

  input {
    outline: 0;
  }
  button {
    cursor: pointer;
  }
`;
