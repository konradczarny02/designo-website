import styled from "styled-components";

import appBg from 'src/assets/homepage/mobile/image-app-design.jpg'
import webBg from 'src/assets/homepage/mobile/image-web-design.jpg'
import graphicBg from 'src/assets/homepage/mobile/image-graphic-design.jpg'
import appBgTablet from 'src/assets/homepage/tablet/image-app-design.jpg'
import webBgTablet from 'src/assets/homepage/tablet/image-web-design.jpg'
import graphicBgTablet from 'src/assets/homepage/tablet/image-graphic-design.jpg'
import appBgDesktop from 'src/assets/homepage/desktop/image-app-design.jpg'
import webBgDesktop from 'src/assets/homepage/desktop/image-web-design-small.jpg'
import graphicBgDesktop from 'src/assets/homepage/desktop/image-graphic-design.jpg'

export const DesignLinkWrapper = styled.div`
  width: 100%;
  background-color: black;
  border-radius: 10px;
  padding: 90px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-size: cover;
  background-position: 50%;
  background-image: url("${({title}) => {
    switch (title) {
        case "WEB DESIGN":
            return webBg;
        case "APP DESIGN":
            return appBg;
        case "GRAPHIC DESIGN":
            return graphicBg;
        default:
            return webBg;
    }
}}");
  
  @media (min-width: 700px) {
    background-image: url("${({title}) => {
      switch (title) {
        case "WEB DESIGN":
          return webBgTablet;
        case "APP DESIGN":
          return appBgTablet;
        case "GRAPHIC DESIGN":
          return graphicBgTablet;
        default:
          return webBg;
      }
    }}");
  }
  
  @media (min-width: 1400px) {
    background-image: url("${({title}) => {
      switch (title) {
        case "WEB DESIGN":
          return webBgDesktop;
        case "APP DESIGN":
          return appBgDesktop;
        case "GRAPHIC DESIGN":
          return graphicBgDesktop;
        default:
          return webBg;
      }
    }}");
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.black};
    opacity: 0.5;
  }
  
  h2 {
    color: ${({theme}) => theme.colors.white};
    font-weight: 500;
    font-size: 28px;
    letter-spacing: 0.15rem;
    margin-bottom: 12px;
    z-index: 2;
    
    @media (min-width: 700px) {
      font-size: 40px;
    }
  }
  
  a {
    display: flex;
    text-decoration: none;
    z-index: 2;
    
    p {
      color: ${({theme}) => theme.colors.white};
      letter-spacing: 0.45rem;
      margin-right: 15px;
      font-weight: 400;
    }
  }
`;