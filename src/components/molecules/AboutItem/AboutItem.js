import React from 'react'
import {StaticImage} from "gatsby-plugin-image";
import {AboutItemWrapper} from "src/components/molecules/AboutItem/AboutItem.styles";

const AboutItem = ({data}) => {
    const path = `../../../assets/homepage/illustration-friendly.svg`
    return (
        <AboutItemWrapper>
            <StaticImage objectFit="contain" src={path} alt="1"/>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </AboutItemWrapper>
    )
}

export default AboutItem;