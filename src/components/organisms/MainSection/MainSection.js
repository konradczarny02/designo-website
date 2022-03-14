import React from 'react'
import {Link} from "gatsby";
import styled from "styled-components"
import SectionLink from "src/components/molecules/SectionLink/SectionLink";

export const sectionLinksData = [
    {
        title: 'WEB DESIGN',
        description: 'VIEW PROJECTS',
        number: 1,
        path: '/',
    },
    {
        title: 'APP DESIGN',
        description: 'VIEW PROJECTS',
        number: 2,
        path: '/',
    },
    {
        title: 'GRAPHIC DESIGN',
        description: 'VIEW PROJECTS',
        number: 3,
        path: '/',
    },
]

export const MainSectionWrapper = styled.section`
  width: 90%;
  margin: 120px auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 250px);
  grid-gap: 24px;
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 300px);
  }
  
  div:first-child {
    @media (min-width: 1400px) {
      grid-row: 1/3;
    }
  }
`;

const MainSection = () => {
    return (
        <MainSectionWrapper>
            {sectionLinksData.map(sectionLink => (
            <SectionLink data={sectionLink}/>
            ))}
        </MainSectionWrapper>
    )
}

export default MainSection