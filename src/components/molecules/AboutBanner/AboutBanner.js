import React from 'react'
import {AboutBannerWrapper} from "src/components/molecules/AboutBanner/AboutBanner.styles";
import {Paragraph, Title} from "src/components/atoms/Titles";

const AboutBanner = () => {
    return (
        <AboutBannerWrapper>
            <div></div>
            <div>
                <Title>About Us</Title>
                <Paragraph>
                    Founded in 2010, we are a creative agency that produces lasting results for our clients.
                    We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make
                    real impact. We’re always looking forward to creating brands, products, and digital experiences that
                    connect with our clients’ audiences.
                </Paragraph>
            </div>
        </AboutBannerWrapper>
    )
}

export default AboutBanner