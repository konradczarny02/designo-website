import React from 'react'
import DesignLayout from "src/components/layouts/DesignLayout";
import DesignLinks from "src/components/organisms/DesignLinks/DesignLinks";
import {graphicDesignLinks as links, graphicDesignData as pageData} from "src/data/pagesData";
import {graphql} from "gatsby";
import ProjectsList from "src/components/organisms/ProjectsList/ProjectsList";

const GraphicDesign = ({data}) => {
    const projectData = data.allDatoCmsProject.edges;
    return (
        <DesignLayout data={pageData}>
            <ProjectsList data={projectData} />
            <DesignLinks data={links}/>
        </DesignLayout>
    )
}

export default GraphicDesign

export const query = graphql`
query MyGraphicQuery {
  allDatoCmsProject(filter: {category: {eq: "graphic"}}) {
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