import React from 'react'
import Navigation from "src/components/organisms/Navigation/Navigation";
import Footer from "src/components/organisms/Footer/Footer";
import ThemeLayout from "src/components/layouts/ThemeLayout";

const MainLayout = ({children}) => {
    return (
        <ThemeLayout>
            <Navigation />
            {children}
            <Footer />
        </ThemeLayout>
    )
}

export default MainLayout