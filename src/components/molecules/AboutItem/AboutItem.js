import React from 'react'
import {GatsbyImage, StaticImage} from "gatsby-plugin-image";
import styled from "styled-components";
import bg from "src/assets/homepage/bg-pattern-small-circle.svg";

export const AboutItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  @media (min-width: 700px) {
    display: grid;
    grid-row-gap: 16px;
    grid-column-gap: 48px;
    grid-template-columns: 220px 1fr;
    grid-template-rows: 70px 150px
  }
  
  div {
    background-size: cover;
    background-image: url("${bg}");
    @media (min-width: 700px) {
      grid-row: 1/3;
    }
  }
  
  h3 {
    margin: 48px 0 32px;
    font-size: 20px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.darkGrey};

    @media (min-width: 700px) {
     grid-row: 1/2;
      margin: auto 0 0;
      display: flex;
    }
  }
  
  p {
    color: ${({theme}) => theme.colors.darkGrey};
    font-weight: 400;
    font-size: 16px;
    text-align: center;

    @media (min-width: 700px) {
      grid-row: 2/3;
      text-align: left;
      margin: 0 0 auto;
    }
  }

`;

const AboutItem = ({data}) => {
    console.log(data.imgPath)
    const path = `../../../assets/homepage/illustration-friendly.svg`
    return (
        <AboutItemWrapper>
           <StaticImage objectFit="contain" src={path} alt="1" />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </AboutItemWrapper>
    )
}

export default AboutItem;