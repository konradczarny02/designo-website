import styled from "styled-components";

export const ProjectWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 700px) and (max-width: 1400px) {
    flex-direction: row;
  }
  
  div:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    
    @media (min-width: 700px ) and (max-width: 1400px) {
      height: 100%;
      width: 50%;
      border-top-right-radius: 0;
      border-bottom-left-radius: 10px;
    }
  }
`;

export const ProjectDetails = styled.div`
  background-color: ${({theme}) => theme.colors.beige};
  height: 40%;
  padding: 32px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  
  @media (min-width: 700px) and (max-width: 1400px) {
    height: 100%;
    width: 50%;
    justify-content: center;
    border-top-right-radius: 10px;
  }
  
  h3 {
    font-size: 20px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.peach};
    margin-bottom: 16px;
  }
  
  p {
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.darkGrey};
  }
`;