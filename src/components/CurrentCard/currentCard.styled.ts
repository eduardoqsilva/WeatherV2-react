import styled from "styled-components";
import { ThemeDefault } from "../../styles/themes/default";

const colors = ThemeDefault.colors
const font_size = ThemeDefault.font_size

export const ContainerCurrentCard = styled.div`
  width: 100%;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  position: relative;
  z-index: 10;

  & h3 {
    font-size: ${font_size.XL}
  }
  & .temp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    & h1 {
      font-size: 4rem;
      font-weight: 500;
      text-align: center;

      & sup {
        position: absolute;
      }
    }
    & span {
      font-size: ${font_size.M};
    }
  }

  &::before {
    content: '';
    width: 220px;
    height: 220px;
    
    background-color: ${colors.green5};
    border-radius: 50%;
    filter: blur(70px);

    position: absolute;
    right: -10%;
    top: 50%;
    z-index: -1;
    transform: translateY(-50%);
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & div.info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`