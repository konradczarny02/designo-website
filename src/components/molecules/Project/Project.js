import React from 'react'
import {GatsbyImage} from "gatsby-plugin-image";
import {ProjectWrapper, ProjectDetails} from "src/components/molecules/Project/Project.styles";


const Project = ({data}) => {
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