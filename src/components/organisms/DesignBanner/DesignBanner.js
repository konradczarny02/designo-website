import React from 'react'
import {DesignBannerWrapper} from "src/components/organisms/DesignBanner/DesginBanner.styles";
import {Paragraph, Title} from "src/components/atoms/Titles";

const DesignBanner = ({title, desc}) => {
    return (
        <DesignBannerWrapper>
            <Title>{title}</Title>
            <Paragraph>{desc}</Paragraph>
        </DesignBannerWrapper>
    )
}

export default DesignBanner