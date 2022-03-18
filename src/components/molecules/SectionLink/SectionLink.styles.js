import styled from "styled-components";

import bg from 'src/assets/homepage/mobile/image-web-design.jpg';
import bg2 from 'src/assets/homepage/mobile/image-app-design.jpg'
import bg3 from 'src/assets/homepage/mobile/image-graphic-design.jpg';

import bgTablet from 'src/assets/homepage/tablet/image-web-design.jpg'
import bg2Tablet from 'src/assets/homepage/tablet/image-app-design.jpg'
import bg3Tablet from 'src/assets/homepage/tablet/image-graphic-design.jpg'

import bgDesktop from 'src/assets/homepage/desktop/image-web-design-small.jpg'
import bg2Desktop from 'src/assets/homepage/desktop/image-app-design.jpg'
import bg3Desktop from 'src/assets/homepage/desktop/image-graphic-design.jpg'

export const SectionLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  border-radius: 10px;
  
  background-image: url("${({number}) => {
    switch (number) {
        case 1:
            return bg;
        case 2:
            return bg2;
        case 3 :
            return bg3
        default:
            return bg;
    }
}
}");
  
  @media (min-width: 700px) {
    background-image: url("${({number}) => {
    switch (number) {
        case 1:
            return bgTablet;
        case 2:
            return bg2Tablet;
        case 3 :
            return bg3Tablet;
        default:
            return bgTablet;
    }
}
}");
    
    h2 {
      font-size: 40px;
    }
  }
  
  @media (min-width: 1400px) {
    background-image: url("${({number}) => {
    switch (number) {
        case 1:
            return bgDesktop;
        case 2:
            return bg2Desktop;
        case 3 :
            return bg3Desktop;
        default:
            return bgDesktop
    }
}
}");
  }
  
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.4);
  }
  
  &:hover&::after {
    background-color: ${({theme}) => theme.colors.peach};
    opacity: 0.7;
  }
  
  h2 {
    font-size: 28px;
    color: ${({theme}) => theme.colors.white};
    font-weight: 500;
    letter-spacing: 0.20rem;
    z-index: 2;
  }
  
  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
    font-size: 15px;
    display: flex;
    letter-spacing: 0.45rem;
    width: 250px;
    z-index: 2;
    justify-content: center;
    align-items: center;
  }
`;
