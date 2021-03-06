import styled from "styled-components";

export const LocationsListWrapper = styled.div`
  width: 100%;
  margin: 120px auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 370px);
  grid-gap: 80px;
  max-width: 1500px;
  
  @media (min-width: 700px) {
  }
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 370px;
    grid-gap: 30px;
  }
`;
