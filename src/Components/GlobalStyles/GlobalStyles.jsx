import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::after, *::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body{
        width: 100%;
        min-height: 100vh;
    }

    #root{
        width: 100%;
        height: 100%;
    }
`


export default GlobalStyles;