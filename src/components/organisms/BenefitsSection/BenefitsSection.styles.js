import styled from "styled-components";

export const BenefitsSectionWrapper = styled.section`
  margin: 0 auto 310px;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 420px);
  
  @media (min-width: 700px) {
    grid-template-rows: repeat(3, 250px);
    margin-bottom: 330px;
  }
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 420px;
    grid-column-gap: 10px;
    min-width: calc(1400px * 90%);
    width: 80%;
    margin-bottom: 380px;
  }
`;