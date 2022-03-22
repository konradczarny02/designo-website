import React from 'react'
import {AboutSectionWrapper} from "src/components/organisms/AboutSection/AboutSection.styles";
import AboutItem from "src/components/molecules/AboutItem/AboutItem";
import {aboutData} from "src/data/homepageData";




const AboutSection = ({data}) => {
    return (
        <AboutSectionWrapper>
            {data.map(({node}) => (<AboutItem key={node.id} data={node} />))}
        </AboutSectionWrapper>
    )
}

export default AboutSection;

