import React from 'react'
import {Paragraph, Title} from "src/components/atoms/Titles";
import {ContactFormWrapper} from "src/components/organisms/ContactForm/ContactForm.styles";

const ContactForm = () => {
    return (
        <ContactFormWrapper>
            <div>
                <Title>Contact Us</Title>
                <Paragraph>
                    Ready to take it to the next level? Let’s talk about your project or idea and find out how we can
                    help your business grow. If you are looking for unique digital experiences that’s relatable to your
                    users, drop us a line.
                </Paragraph>
            </div>
            <form onSubmit={(event) => {
                event.preventDefault();
            }}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone" />
                <textarea placeholder="Your Message" />
                <input type="submit" value="SUBMIT" />
            </form>
        </ContactFormWrapper>
    )
}

export default ContactForm