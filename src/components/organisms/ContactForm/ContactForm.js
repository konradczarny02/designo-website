import React, {useReducer} from 'react'
import {Paragraph, Title} from "src/components/atoms/Titles";
import {ContactFormWrapper} from "src/components/organisms/ContactForm/ContactForm.styles";
import RequiredIcon from 'src/icons/required.svg'

const initialState = {
    name: '',
    email: '',
    phone: '',
    message: '',
}

const reducer = (state, action) => {
    if (action.type === 'CHANGE_VALUE') {
        return {
            ...state,
            [action.payload.name]: action.payload.value
        }
    }

    return state;
}

const ContactForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleInputChange = (name, value) => {
        dispatch({type: 'CHANGE_VALUE', payload: {name, value}})
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
            <form onSubmit={(event) => {
                event.preventDefault();
            }}>
                <label htmlFor="name">
                    <input type="text" name="name" id="name" placeholder="Name"
                           onChange={(event) => handleInputChange(event.target.name, event.target.value)}/>
                </label>
                <label htmlFor="email">
                    <input type="email" name="email" id="email" required={false} placeholder="Email Address"
                           onChange={(event) => handleInputChange(event.target.name, event.target.value)}/>
                </label>
                <label htmlFor="phone">
                    <input type="tel" name="phone" id="phone" placeholder="Phone"
                           onChange={(event) => handleInputChange(event.target.name, event.target.value)}/>
                </label>
                <label htmlFor="message">
                    <textarea name="message" id="message" placeholder="Your Message"
                              onChange={(event) => handleInputChange(event.target.name, event.target.value)}/>
                </label>
                <input type="submit" value="SUBMIT"/>
            </form>
        </ContactFormWrapper>
    )
}

export default ContactForm