import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 100%;
  max-width: 700px;

  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: 20px auto;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  /* background-color: beige; */
  
  & .legend {
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    grid-column: 1 / 6;
  }

  @media (max-width: 850px) {
    justify-content: left;
    max-width: 100%;
    padding: 0 0 0 1rem;
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
  border-radius: 15px;

  @media (max-width: 500px) {
    width: 100px;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 1rem 0 0;

  grid-column: 1 / 6;

  @media (max-width: 850px) {
    overflow-x: scroll;
  }
` 