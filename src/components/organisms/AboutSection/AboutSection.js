import React from 'react'
import styled from "styled-components";
import AboutItem from "src/components/molecules/AboutItem/AboutItem";
import {aboutData} from "src/data/homepageData";

export const AboutSectionWrapper = styled.section`
  margin: 0 auto;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 420px);
  
  @media (min-width: 700px) {
    grid-template-rows: repeat(3, 250px);
  }
`;


const AboutSection = () => {
    return (
        <AboutSectionWrapper>
            {aboutData.map(aboutItem => (<AboutItem data={aboutItem}/>))}
        </AboutSectionWrapper>
    )
}

export default AboutSection;

