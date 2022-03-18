import React from 'react'
import {SectionLinkWrapper} from "src/components/molecules/SectionLink/SectionLink.styles";
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";


const SectionLink = ({data: {number, path, title, description}}) => {
    return (
        <SectionLinkWrapper number={number}>
            <h2>{title}</h2>
            <Link to={path}>
                <p>{description}</p>
                <StaticImage objectFit="contain" src="../../../icons/chevron-right.svg" alt="chevron-right"/>
            </Link>
        </SectionLinkWrapper>
    )
}

export default SectionLink