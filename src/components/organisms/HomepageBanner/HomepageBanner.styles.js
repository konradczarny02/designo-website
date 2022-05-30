import styled from "styled-components";
import {Paragraph, Title} from "src/components/atoms/Titles";
import {Button} from "src/components/atoms/Button";

export const BannerWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: ${({theme}) => theme.colors.peach};
  background-size: cover;
  padding: 80px 10% 410px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 0;
  max-width: 1500px;

  @media (min-width: 700px) {
    width: 90%;
    border-radius: 10px;
  }

  @media (min-width: 1400px) {
    min-width: calc(1400px * 90%);
    width: 80%;
    padding-top: 140px;
    padding-bottom: 140px;
  }
  
  ${Title} {
    margin: 16px 0;
    
    @media (min-width: 1400px) {
      width: 50%;
    }
  }
  
  ${Button} {
    margin: auto;
    
    @media (min-width: 1400px) {
      margin: 0 auto 0 0; 
    }
  }
  
  ${Paragraph} {
    margin: 16px 0 24px;
    
    @media (min-width: 1400px) {
      width: 50%;
    }
  }
  
  div {
    width: 340px;
    height: 370px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    
    @media (min-width: 1400px) {
      height: 600px;
      left: 80%;
    }
  }
`;
