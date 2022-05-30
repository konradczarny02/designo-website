import React from 'react'
import {Paragraph, Title} from "src/components/atoms/Titles";
import {ContactFormWrapper} from "src/components/organisms/ContactForm/ContactForm.styles";
import RequiredIcon from 'src/icons/required.svg'
import {useForm} from "react-hook-form";



const ContactForm = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    const onSubmit = data => {
        reset()
    }
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">
                    <input type="text" name="name" id="name" placeholder="Name" {...register('name', {required: true})} />
                    {errors.name && <p>Can't be empty <RequiredIcon /></p>}
                </label>
                <label htmlFor="email">
                    <input type="email" name="email" id="email" required={false} placeholder="Email Address" {...register('email', {required: true})} />
                    {errors.email && <p>Can't be empty <RequiredIcon /></p>}
                </label>
                <label htmlFor="phone">
                    <input type="tel" name="phone" id="phone" placeholder="Phone: 123-456-789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" {...register('phone', {required: true})} />
                    {errors.phone && <p>Can't be empty <RequiredIcon /></p>}
                </label>
                <label htmlFor="message">
                    <textarea name="message" id="message" placeholder="Your Message" {...register('message', {required: true})} />
                    {errors.message && <p data-name="last">Can't be empty <RequiredIcon /></p>}
                </label>
                <input type="submit" value="SUBMIT"/>
            </form>
        </ContactFormWrapper>
    )
}

export default ContactForm