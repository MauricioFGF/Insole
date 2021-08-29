import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior:smooth;
  }

  body {
    overflow-x:hidden;
    font-family:'Source Sans Pro', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  html{
    scrollbar-color: rgba(29, 28, 28, 0.842)  rgb(255, 255, 255);
    scrollbar-width: thin;
}


  ::-webkit-scrollbar {
      width:11px;
  }

  ::-webkit-scrollbar-track{
      background-color:white;
  }

  ::-webkit-scrollbar-thumb:vertical {
      border: 1px solid white ;
      border-radius: 5px;
      background: #0a0b0ccb;
  }

  ::-webkit-scrollbar-thumb:vertical:active{
      background-color:#0a0b0c ;
  }
`;