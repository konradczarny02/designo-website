import React from 'react'
import MainLayout from "src/components/layouts/MainLayout";
import AboutBanner from "src/components/molecules/AboutBanner/AboutBanner";
import AboutPost from "src/components/molecules/AboutPost/AboutPost";
import {graphql} from "gatsby";
import LocationsList from "src/components/organisms/LocationsList/LocationsList";

const About = ({data}) => {
    const locationData = data.allDatoCmsLocation.edges;
    return (
        <MainLayout>
            <AboutBanner/>
            <AboutPost/>
            <LocationsList data={locationData} />
        </MainLayout>
    )
}

export default About

export const query = graphql`
query MyLocationQuery {
  allDatoCmsLocation {
    edges {
      node {
        name
        id
        icon {
          gatsbyImageData(height: 200, forceBlurhash: false, placeholder: BLURRED)
        }
      }
    }
  }
}
`;