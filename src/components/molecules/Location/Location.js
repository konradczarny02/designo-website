import React from 'react'
import {GatsbyImage} from "gatsby-plugin-image";
import {Button} from "src/components/atoms/Button";
import {LocationWrapper} from "src/components/molecules/Location/Location.styles";


const Location = ({data}) => {
    return (
        <LocationWrapper>
            <GatsbyImage alt={data.name} image={data.icon.gatsbyImageData} />
            <h3>{data.name.toUpperCase()}</h3>
            <Button to="/locations">SEE LOCATION</Button>
        </LocationWrapper>
    )
}

export default Location