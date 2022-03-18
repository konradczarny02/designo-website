import React from 'react'
import {BannerWrapper} from "src/components/organisms/HomepageBanner/HomepageBanner.styles";
import {Paragraph, Title} from "src/components/atoms/Titles";
import {Button} from "src/components/atoms/Button";
import {StaticImage} from "gatsby-plugin-image";


const HomepageBanner = () => {
    return (
        <BannerWrapper>
            <Title>
                Award-winning custom designs and digital branding solutions
            </Title>
            <Paragraph>
                With over 10 years in the industry, we are experienced in creating fully responsive websites, app
                design, and engaging brand experiences. Find out more about our services.
            </Paragraph>
            <Button to={'/about'}>
                LEARN MORE
            </Button>
            <StaticImage objectFit="cover" src="../../../assets/homepage/phoneBig.png" alt="phone picture" />
        </BannerWrapper>
    )
}

export default HomepageBanner