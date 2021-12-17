import { createGlobalStyle } from "styled-components"

// font-family: 'Alice', serif;
// font-family: 'Montserrat', sans-serif;

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    body{
        overflow-x: hidden;
        height: 100%;
    }
`
export default GlobalStyles;