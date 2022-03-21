import React from 'react'
import {GatsbyImage} from "gatsby-plugin-image";
import Project from "src/components/molecules/Project/Project";
import styled from "styled-components";

export const ProjectListWrapper = styled.div`
  width: 90%;
  margin: 96px auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  
  @media (min-width: 1400px) {
    width: 80%;
    min-width: calc(1400px * 90%);
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectsList = ({data}) => {
    console.log(data);
    return (
        <ProjectListWrapper>
            {data.map(project => (
                <Project key={project.node.id} data={project.node} />
            ))}
        </ProjectListWrapper>
    )
}

export default ProjectsList