import React from 'react'
import {Paragraph, Title} from "src/components/atoms/Titles";
import {DealPostWrapper} from "src/components/molecules/AboutPosts/AboutPost.styles";

const DealPost = () => {
    return (
        <DealPostWrapper>
            <div></div>
            <div>
                <Title>The real deal</Title>
                <Paragraph>
                    As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
                    Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective
                    to every opportunity. We make design and technology more accessible and give you tools to measure
                    success.
                </Paragraph>
                <Paragraph>
                    We are visual storytellers in appealing and captivating ways. By combining business and marketing
                    strategies, we inspire audiences to take action and drive real results.
                </Paragraph>
            </div>
        </DealPostWrapper>
    )
}

export default DealPost;