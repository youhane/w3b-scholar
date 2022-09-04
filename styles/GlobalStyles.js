import { createGlobalStyle } from "styled-components";
import { COLORS } from '../constants/styles'

export const GlobalStyles = createGlobalStyle`
    *{
        font-family: 'Rubik', sans-serif;
        font-family: 'Syne', sans-serif;
        margin: 0;
        padding: 0;
    }

    body{
        background: ${COLORS.lightGrey};
    }
`