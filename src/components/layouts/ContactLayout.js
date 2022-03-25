import React from 'react'
import ThemeLayout from "src/components/layouts/ThemeLayout";
import Navigation from "src/components/organisms/Navigation/Navigation";
import Footer from "src/components/organisms/Footer/Footer";

const ContactLayout = ({children}) => {
    return (
        <ThemeLayout>
            <Navigation />
            {children}
            <Footer isContact={false} />
        </ThemeLayout>
    )
}

export default ContactLayout