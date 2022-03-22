import React from 'react'
import {GatsbyImage} from "gatsby-plugin-image";
import {AboutItemWrapper} from "src/components/molecules/AboutItem/AboutItem.styles";

const AboutItem = ({data}) => {
    return (
        <AboutItemWrapper>
            <GatsbyImage image={data.image.gatsbyImageData} alt={data.title} />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </AboutItemWrapper>
    )
}

export default AboutItem;