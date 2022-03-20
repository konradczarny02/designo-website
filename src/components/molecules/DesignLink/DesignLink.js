import React from 'react'
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import {DesignLinkWrapper} from "src/components/molecules/DesignLink/DesignLink.styles";

const DesignLink = ({data: {title, path, description}}) => {
    return (
        <DesignLinkWrapper title={title}>
            <h2>{title}</h2>
            <Link to={path}>
                <p>{description}</p>
                <StaticImage objectFit="contain" src="../../../icons/chevron-right.svg" alt="chevron-right"/>
            </Link>
        </DesignLinkWrapper>
    )
}

export default DesignLink