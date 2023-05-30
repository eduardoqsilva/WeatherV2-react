import styled from "styled-components";
import { ThemeDefault } from "../../styles/themes/default";

const colors = ThemeDefault.colors

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 350px;
  height: 40px;
  padding: 0 1rem;
  
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 20px;

  background: rgba(0,0,0,0.2);

  & input {
    height: 100%;
    flex-grow: 1;
    border: none;
    outline: none;
    background: transparent;

    font-size: ${ThemeDefault.font_size.M};
    font-weight: 600;
    color: ${colors.white};

    caret-color: ${colors.white};
  }
`