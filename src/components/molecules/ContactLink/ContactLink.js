import React from 'react'
import {ContactLinkWrapper, TextWrapper} from "src/components/molecules/ContactLink/ContactLink.styles";
import {Paragraph, Title} from "src/components/atoms/Titles";
import {Button} from "src/components/atoms/Button";

const ContactLink = () => {
    return (
        <ContactLinkWrapper>
            <TextWrapper>
                <Title>
                    Let's talk about <br/> your project
                </Title>
                <Paragraph>
                    Ready to take it to the next level? Contact us today and find out how our expertise can help your
                    business grow.
                </Paragraph>
            </TextWrapper>
            <Button to="/contact">GET IN TOUCH</Button>
        </ContactLinkWrapper>
    )
}

export default ContactLink