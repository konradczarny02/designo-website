import React from 'react'
import {AboutPostWrapper} from "src/components/molecules/AboutPosts/AboutPost.styles";
import {Paragraph, Title} from "src/components/atoms/Titles";

const TalentPost = () => {
    return (
        <AboutPostWrapper>
            <div></div>
            <div>
                <Title>World-class talent</Title>
                <Paragraph>
                    We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully
                    crafted from concept to launch, ensuring success in its given market. We are constantly updating our
                    skills in a myriad of platforms.
                </Paragraph>
                <Paragraph>
                    Our team is multi-disciplinary and we are not merely interested in form — content and meaning are
                    just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients
                    have always been impressed with our high-quality outcomes that encapsulates their brand’s story and
                    mission.
                </Paragraph>
            </div>
        </AboutPostWrapper>
    )
}

export default TalentPost