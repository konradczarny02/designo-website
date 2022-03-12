import React from 'react';
import MainLayout from "src/components/layouts/MainLayout";
import Navigation from "src/components/organisms/Navigation/Navigation";
import Footer from "src/components/organisms/Footer/Footer";

const HomePage = ( ) => {
    return (
        <MainLayout>
            <Navigation />
            <Footer />
        </MainLayout>
    )
}

export default HomePage;