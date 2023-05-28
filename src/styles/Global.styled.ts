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
    min-height: 100vh;
    width: 100vw;
    /* padding: 1.5rem; */

    overflow-x: hidden;

    font-family: ${fonts.default};
    color: ${colors.white};

    & #root {
      background: linear-gradient(180deg, ${colors.green1} 0%, ${colors.green2} 100%);

      width: 100%;
      min-height: 100vh;

      display: flex;
      align-items: center;
      padding: 2rem 0 1.5rem 0;

      overflow-x: hidden;
    }
  }

`