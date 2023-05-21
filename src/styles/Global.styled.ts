import { createGlobalStyle } from "styled-components";
import { ThemeDefault } from "./themes/default";

const colors = ThemeDefault.colors
const fonts = ThemeDefault.fonts

export const GlobalStyled = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    font-family: ${fonts.default};
    background-color: ${colors.gray1};
    color: ${colors.white}
  }
`