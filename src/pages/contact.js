import React from 'react';
import ContactLayout from "src/components/layouts/ContactLayout";
import LocationsList from "src/components/organisms/LocationsList/LocationsList";
import {graphql} from "gatsby";
import ContactForm from "src/components/organisms/ContactForm/ContactForm";

const Contact = ({data}) => {
    const locationData = data.allDatoCmsLocation.edges;
    return (
        <ContactLayout>
            <ContactForm />
            <LocationsList data={locationData} />
        </ContactLayout>
    )
}

export default Contact

export const query = graphql`
query MyLocationsQuery {
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