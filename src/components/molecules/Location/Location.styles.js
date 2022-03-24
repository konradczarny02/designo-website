import styled from "styled-components";
import {Button} from "src/components/atoms/Button";

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  h3 {
    margin: 48px 0 32px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.2rem;
    color: ${({theme}) => theme.colors.darkGrey};
  }
  
  ${Button} {
    background-color: ${({theme}) => theme.colors.peach};
    color: ${({theme}) => theme.colors.white};
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.11rem;
    padding: 18px;
  }
`;