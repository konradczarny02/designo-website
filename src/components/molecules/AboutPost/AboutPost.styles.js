import styled from "styled-components";
import bgMobile from 'src/assets/about/mobile/image-world-class-talent.jpg';
import bgTablet from 'src/assets/about/tablet/image-world-class-talent.jpg';
import bgDesktop from 'src/assets/about/desktop/image-world-class-talent.jpg';
import bgSvg from 'src/assets/about/desktop/bg-pattern-hero-about-desktop.svg'
import {Paragraph, Title} from "src/components/atoms/Titles";

export const AboutPostWrapper = styled.div`
  height: 850px;
  margin: 0 auto;
  
  @media (min-width: 700px) {
    width: 90%;
    height: 750px;
  }
  
  @media (min-width: 1400px) {
    width: 80%;
    min-width: calc(1400px * 90%);
    height: 640px;
    display: flex;
  }
  
  div:first-child {
    background-image: url("${bgMobile}");
    background-size: cover;
    background-position: center;
    height: 320px;
    
    @media (min-width: 700px) {
      border-radius: 10px 10px 0 0;
      background-image: url("${bgTablet}");
    }
    
    @media (min-width: 1400px) {
      background-image: url("${bgDesktop}");
      border-radius: 10px 0 0 10px;
      height: 100%;
      width: 480px;
    }
  }
  
  div:last-child {
    background-color: ${({theme}) => theme.colors.beige};
    height: calc(100% - 320px);
    background-image: url("${bgSvg}");
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    ${Title} {
      color: ${({theme}) => theme.colors.peach};
      margin-bottom: 24px;
    }
    
    ${Paragraph} {
      margin-bottom: 24px;
      color: ${({theme}) => theme.colors.darkGrey};
    }
    
    @media (min-width: 700px) {
      border-radius: 0 0 10px 10px;
      padding: 0 58px;
    }
    
    @media (min-width: 1400px) {
      height: 100%;
      width: calc(100% - 480px);
      border-radius: 0 10px 10px 0;
      padding: 0 96px;
      
      ${Title} {
        margin-right: auto;
      }
    }
  }
`;
