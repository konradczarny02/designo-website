import React from 'react'
import styled from "styled-components";
import bgMobile from 'src/assets/about/mobile/image-about-hero.jpg'
import bgTablet from 'src/assets/about/tablet/image-about-hero.jpg';
import bgDesktop from 'src/assets/about/desktop/image-about-hero.jpg';
import bgSvg from 'src/assets/about/desktop/bg-pattern-hero-about-desktop.svg'
import {Paragraph, Title} from "src/components/atoms/Titles";

export const AboutBannerWrapper = styled.div`
  width: 100%;
  height: 700px;
  margin: 0 auto 310px;
  
  @media (min-width: 700px) {
    width: 90%;
    height: 640px;
  }
  
  @media (min-width: 1400px) {
    width: 80%;
    min-width: calc(1400px * 90%);
    height: 480px;
    display: flex;
  }

  div:first-child {
    background-image: url("${bgMobile}");
    background-position: center;
    background-size: cover;
    height: 320px;
    
    @media (min-width: 500px) {
      background-image: url("${bgTablet}");
    }
    
    @media (min-width: 700px) {
      border-radius: 10px 10px 0 0;
    }
    
    @media (min-width: 1400px) {
      background-image: url("${bgDesktop}");
      order: 2;
      height: 100%;
      width: 47%;
      border-radius: 0 10px 10px 0;
    }
  }

  div:last-child {
    background-color: ${({theme}) => theme.colors.peach};
    background-image: url("${bgSvg}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    height: calc(100% - 320px);
    padding: 80px 24px;
    
    ${Title} {
      margin-bottom: 24px;
    }
    
    @media (min-width: 700px) {
      padding: 64px 58px;
      border-radius: 0 0 10px 10px;
      
      ${Title} {
        margin-bottom: 32px;
      }
    }
    
    @media (min-width: 1400px) {
      width: 53%;
      height: 100%;
      padding: 135px 80px 135px 95px;
      order: 1;
      border-radius: 10px 0 0 10px;
    }
  }
`;

const AboutBanner = () => {
    return (
        <AboutBannerWrapper>
            <div></div>
            <div>
                <Title>About Us</Title>
                <Paragraph>
                    Founded in 2010, we are a creative agency that produces lasting results for our clients.
                    We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make
                    real impact. We’re always looking forward to creating brands, products, and digital experiences that
                    connect with our clients’ audiences.
                </Paragraph>
            </div>
        </AboutBannerWrapper>
    )
}

export default AboutBanner