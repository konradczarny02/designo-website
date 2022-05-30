import styled from "styled-components";
import bg from 'src/assets/homepage/bg-pattern-small-circle.svg'
import {Title} from "src/components/atoms/Titles";

export const ContactFormWrapper = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.colors.peach};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1500px;
  
  @media (min-width: 700px) {
    width: 90%;
    border-radius: 10px;
    background-image: url("${bg}");
    background-size: cover;
    background-position: 20% 80%;
  }
  
  @media (min-width: 1400px) {
    width: 80%;
    min-width: calc(1400px * 0.9);
    flex-direction: row;
    align-items: center;
  }
  
  div {
    background-image: url("${bg}");
    background-size: contain;
    background-repeat: no-repeat;
    padding: 72px 24px 0;
    margin-bottom: 48px;
    
    ${Title} {
      margin-bottom: 24px;
    }
    
    @media (min-width: 700px) {
      padding: 72px 58px 0;
      background-image: none;
    }
    
    @media (min-width: 1400px) {
     padding: 0 0 0 96px;
    }
  }
  
  form {
    background: transparent;
    width: 100%;
    padding: 0 24px 72px;
    
    @media (min-width: 700px) {
    padding: 0 58px 72px;
    }
    
    @media (min-width: 1400px) {
      padding: 55px 96px;
    }
    
    input {
      width: 100%;
      background: transparent;
      color: ${({theme}) => theme.colors.white};
      border: none;
      border-bottom: 1px solid ${({theme}) => theme.colors.lightGrey};
      padding: 24px 0 12px 12px;
      font-weight: 500;
      font-size: 15px;
      
      @media (min-width: 700px) {
        padding-top: 24px;
      }
    }
    
    label {
      position: relative;
    }
    
    p {
      position: absolute;
      top: 2px;
      right: 12px;
      font-size: 12px;
      color: ${({theme}) => theme.colors.white};
      display: flex;
      align-items: center;
      
      svg {
        margin-left: 10px;
      }
    }
    
    p[data-name=last] {
      top: -56px;
    }
    
    input::placeholder {
      font-size: 15px;
      font-weight: 500;
      color: ${({theme}) => theme.colors.lightGrey};
    }
    
    input:focus {
      outline: none;
      border-bottom: 2px solid ${({theme}) => theme.white};
    }
    
    input[placeholder="Your Message"] {
      height: 124px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      position: relative;
    }

    input[placeholder="Your Message"]::placeholder {
      position: absolute;
      top: 24px;
    }
    
    textarea {
      resize: none;
      width: 100%;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid ${({theme}) => theme.colors.lightGrey};
      color: ${({theme}) => theme.colors.white};
      font-weight: 500;
      font-size: 15px;
      height: 100px;
      padding: 24px 0 0 12px;
      font-family: 'Jost', sans-serif;
    }
    
    textarea::placeholder {
      color: ${({theme}) => theme.colors.lightGrey};
    }
    
    textarea:focus {
      outline: none;
      border-bottom: 2px solid ${({theme}) => theme.colors.white};
    }
    
    input[type=submit] {
      width: 152px;
      height: 56px;
      border-bottom: none;
      background-color: ${({theme}) => theme.colors.white};
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      font-size: 15px;
      color: ${({theme}) => theme.colors.darkGrey};
      padding: 0;
      margin: 40px auto 0;
      cursor: pointer;
      
      &:hover {
        background-color: ${({theme}) => theme.colors.lightPeach};
        color: ${({theme}) => theme.colors.white};
      }
      
      @media (min-width: 700px) {
        margin: 24px 0 0 auto;
      }
    }
  }
`;