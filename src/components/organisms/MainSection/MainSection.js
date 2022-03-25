import React from 'react'
import {MainSectionWrapper} from "src/components/organisms/MainSection/MainSection.styles";
import SectionLink from "src/components/molecules/SectionLink/SectionLink";
import {sectionLinksData} from "src/data/homepageData";

const MainSection = () => {
    return (
        <MainSectionWrapper>
            {sectionLinksData.map(sectionLink => (
            <SectionLink key={sectionLink.number} data={sectionLink} />
            ))}
        </MainSectionWrapper>
    )
}

export default MainSection