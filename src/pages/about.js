import React from 'react'
import MainLayout from "src/components/layouts/MainLayout";
import AboutBanner from "src/components/molecules/AboutBanner/AboutBanner";
import LocationsList from "src/components/organisms/LocationsList/LocationsList";
import TalentPost from "src/components/molecules/AboutPosts/TalentPost";
import DealPost from "src/components/molecules/AboutPosts/DealPost";
import {graphql} from "gatsby";

const About = ({data}) => {
    const locationData = data.allDatoCmsLocation.edges;
    return (
        <MainLayout>
            <AboutBanner />
            <TalentPost />
            <LocationsList data={locationData} />
            <DealPost />
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