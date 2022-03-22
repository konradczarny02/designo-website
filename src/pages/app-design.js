import React from 'react'
import DesignLayout from "src/components/layouts/DesignLayout";
import DesignLinks from "src/components/organisms/DesignLinks/DesignLinks";
import {appDesignLinks as links, appDesignData as pageData} from "src/data/pagesData";
import ProjectsList from "src/components/organisms/ProjectsList/ProjectsList";
import {graphql} from "gatsby";


const AppDesign = ({data}) => {
    const projectData = data.allDatoCmsProject.edges;
    return (
        <DesignLayout data={pageData}>
            <ProjectsList data={projectData} />
            <DesignLinks data={links}/>
        </DesignLayout>
    )
}

export default AppDesign

export const query = graphql`
query MyAppQuery {
  allDatoCmsProject(filter: {category: {eq: "app"}}) {
    edges {
      node {
        description
        id
        name
        image {
          gatsbyImageData(width: 500, forceBlurhash: false, placeholder: BLURRED)
          title
        }
      }
    }
  }
}
`