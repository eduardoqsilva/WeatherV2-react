import styled from "styled-components";
import { ThemeDefault } from "../../styles/themes/default";

export const ContainerCard = styled.div`
  width: 100%;
  max-width: 800px;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 20px 210px;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  margin-right: -1rem;


  /* background-color: beige; */
  
  & .legend {
    font-size: ${ThemeDefault.font_size.M};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    grid-column: 1 / 6;
  }

  @media (max-width: 850px) {
    justify-content: left;
    max-width: 100%;
    padding: 0 0 0 1rem;
    grid-template-rows: 20px 158px;
  }
`

export const CardWrapper = styled.div`
  width: 150px;
  min-width: 90px;
  background-color: rgba(255,255,255,0.1);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  padding: 1rem;
  border-radius: ${ThemeDefault.border.border_radius};

  @media (max-width: 500px) {
    width: 100px;
  }
`

export const CardsContainer = styled.div`
  min-width: 100%;
  min-height: 100%;
  
  display: flex;
  gap: 1rem;
  padding: 0 1rem 0 0;
  align-items: center;

  @media (max-width: 850px) {
    overflow-x: scroll;
  }
` 