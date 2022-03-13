import React from 'react'
import styled from "styled-components";
import bgImg from 'src/assets/images/homepage/bg-pattern-hero-home.svg';
import {Paragraph, Title} from "src/components/atoms/Titles";
import {Button} from "src/components/atoms/Button";
import {StaticImage} from "gatsby-plugin-image";

export const BannerWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  background-image: url("${bgImg}");
  background-color: ${({theme}) => theme.colors.peach};
  background-size: cover;
  padding: 80px 10% 410px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: -222;

  @media (min-width: 700px) {
    width: 90%;
    border-radius: 10px;
  }

  @media (min-width: 1400px) {
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

const HomepageBanner = () => {
    return (
        <BannerWrapper>
            <Title>
                Award-winning custom designs and digital branding solutions
            </Title>
            <Paragraph>
                With over 10 years in the industry, we are experienced in creating fully responsive websites, app
                design, and engaging brand experiences. Find out more about our services.
            </Paragraph>
            <Button to={'/'}>
                LEARN MORE
            </Button>
            <StaticImage objectFit="cover" src="../../../assets/images/homepage/phoneBig.png" alt="phone picture" />
        </BannerWrapper>
    )
}

export default HomepageBanner