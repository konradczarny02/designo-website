import React from 'react'
import {GatsbyImage} from "gatsby-plugin-image";
import {BenefitItemWrapper} from "src/components/molecules/BenefitItem/BenefitItem.styles";

const BenefitItem = ({data}) => {
    return (
        <BenefitItemWrapper>
            <GatsbyImage image={data.image.gatsbyImageData} alt={data.title} />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </BenefitItemWrapper>
    )
}

export default BenefitItem;