import React from 'react';
import MainLayout from "src/components/layouts/MainLayout";
import HomepageBanner from "src/components/organisms/HomepageBanner/HomepageBanner";
import MainSection from "src/components/organisms/MainSection/MainSection";

const HomePage = ( ) => {
    return (
        <MainLayout>
            <HomepageBanner />
            <MainSection />
        </MainLayout>
    )
}

export default HomePage;