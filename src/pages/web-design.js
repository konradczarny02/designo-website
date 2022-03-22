import React from 'react'
import DesignLayout from "src/components/layouts/DesignLayout";
import DesignLinks from "src/components/organisms/DesignLinks/DesignLinks";
import {webDesignLinks as links, webDesignData as pageData} from "src/data/pagesData";
import {graphql} from "gatsby";
import ProjectsList from "src/components/organisms/ProjectsList/ProjectsList";


const WebDesign = ({data}) => {
    const projectsData = data.allDatoCmsProject.edges;
    return (
        <DesignLayout data={pageData}>
            <ProjectsList data={projectsData} />
            <DesignLinks data={links} />
        </DesignLayout>
    )
}

export default WebDesign

export const query = graphql`
query MyWebQuery {
  allDatoCmsProject(filter: {category: {eq: "web"}}) {
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
`;