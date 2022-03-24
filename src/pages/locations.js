import React from 'react'
import MainLayout from "src/components/layouts/MainLayout";
import LocationDetailedList from "src/components/organisms/LocationsDetailedList/LocationDetailedList";
import {graphql} from "gatsby";

const Locations = ({data}) => {
    const locationsData = data.allDatoCmsLocation.edges;
    return (
        <MainLayout>
            <LocationDetailedList data={locationsData} />
        </MainLayout>
    )
}

export default Locations

export const query = graphql`
query MyDetailedLocationQuery {
  allDatoCmsLocation {
    edges {
      node {
        name
        street
        phone
        mapImage {
          gatsbyImageData(height: 320, forceBlurhash: false, placeholder: BLURRED)
        }
        city
        id
        mail
      }
    }
  }
}
`