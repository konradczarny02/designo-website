import styled from "styled-components";

export const ProjectListWrapper = styled.div`
  width: 90%;
  margin: 96px auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  max-width: 1500px;
  
  @media (min-width: 1400px) {
    width: 80%;
    min-width: calc(1400px * 90%);
    grid-template-columns: repeat(3, 1fr);
  }
`;