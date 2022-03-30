import React from 'react'
import Project from "src/components/molecules/Project/Project";
import {ProjectListWrapper} from "src/components/organisms/ProjectsList/ProjectList.styles";


const ProjectsList = ({data}) => {
    return (
        <ProjectListWrapper>
            {data.map(project => (
                <Project key={project.node.id} data={project.node} />
            ))}
        </ProjectListWrapper>
    )
}

export default ProjectsList