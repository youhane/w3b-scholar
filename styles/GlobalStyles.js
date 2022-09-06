import { createGlobalStyle } from "styled-components";
import { COLORS } from '../constants/styles'

export const GlobalStyles = createGlobalStyle`
    *{
        font-family: 'Syne', sans-serif;
        font-family: 'Rubik', sans-serif;
        margin: 0;
        padding: 0;
    }

    body{
        background: ${COLORS.lightGrey};
    }

    h1{
        font-family: 'Syne', sans-serif;
    }

    p{
        color: ${COLORS.darkGrey};
        line-height: 150%;
    }
`