import React from 'react'
import {BenefitsSectionWrapper} from "src/components/organisms/BenefitsSection/BenefitsSection.styles";
import AboutItem from "src/components/molecules/BenefitItem/BenefitItem";


const BenefitsSection = ({data}) => {
    return (
        <BenefitsSectionWrapper>
            {data.map(({node}) => (<AboutItem key={node.id} data={node} />))}
        </BenefitsSectionWrapper>
    )
}

export default BenefitsSection;

