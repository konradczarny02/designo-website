import React from 'react';
import MainLayout from "src/components/layouts/MainLayout";
import HomepageBanner from "src/components/organisms/HomepageBanner/HomepageBanner";
import MainSection from "src/components/organisms/MainSection/MainSection";
import AboutSection from "src/components/organisms/AboutSection/AboutSection";

const HomePage = ( ) => {
    return (
        <MainLayout>
            <HomepageBanner />
            <MainSection />
            <AboutSection />
        </MainLayout>
    )
}

export default HomePage;