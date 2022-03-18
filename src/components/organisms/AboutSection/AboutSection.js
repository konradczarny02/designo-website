import React from 'react'
import {AboutSectionWrapper} from "src/components/organisms/AboutSection/AboutSection.styles";
import AboutItem from "src/components/molecules/AboutItem/AboutItem";
import {aboutData} from "src/data/homepageData";




const AboutSection = () => {
    return (
        <AboutSectionWrapper>
            {aboutData.map(aboutItem => (<AboutItem data={aboutItem}/>))}
        </AboutSectionWrapper>
    )
}

export default AboutSection;

