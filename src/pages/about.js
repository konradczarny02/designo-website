import React from 'react'
import MainLayout from "src/components/layouts/MainLayout";
import AboutBanner from "src/components/molecules/AboutBanner/AboutBanner";
import AboutPost from "src/components/molecules/AboutPost/AboutPost";

const About = () => {
    return (
        <MainLayout>
            <AboutBanner />
            <AboutPost />
        </MainLayout>
    )
}

export default About