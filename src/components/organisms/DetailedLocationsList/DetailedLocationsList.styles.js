import styled from "styled-components";

export const DetailedLocationsListWrapper = styled.div`
  margin: 0 auto 310px;
  width: 100%;
  display: grid;
  grid-gap: 40px;
  
  @media (min-width: 700px) {
    width: 90%;
  }
  
  @media (min-width: 1400px) {
    min-width: calc(1400px * 90%);
    width: 80%;
    
    div:nth-child(2n) {
      grid-template-columns: 350px 1fr;
      
      div:first-child {
        grid-column: 1/2;
      }
      
      div:last-child {
        grid-column: 2/3;
      }
    }
  }
`;