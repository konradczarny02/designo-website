import styled from "styled-components";

export const MainSectionWrapper = styled.section`
  width: 90%;
  margin: 120px auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 250px);
  grid-gap: 24px;
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 300px);
    min-width: calc(1400px * 90%);
    width: 80%;
  }
  
  div:first-child {
    @media (min-width: 1400px) {
      grid-row: 1/3;
    }
  }
`;
