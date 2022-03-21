import React from 'react'
import {GatsbyImage} from "gatsby-plugin-image";
import styled from "styled-components";

export const ProjectWrapper = styled.div`
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  
  div:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const ProjectDetails = styled.div`
  background-color: ${({theme}) => theme.colors.beige};
  height: 33%;
  padding: 32px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  
  h3 {
    font-size: 20px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.peach};
    margin-bottom: 16px;
  }
  
  p {
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.darkGrey};
  }
`;

const Project = ({data}) => {
    console.log(data)
    return (
        <ProjectWrapper>
            <GatsbyImage image={data.image.gatsbyImageData} alt={data.name}/>
            <ProjectDetails>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
            </ProjectDetails>
        </ProjectWrapper>
    )
}

export default Project