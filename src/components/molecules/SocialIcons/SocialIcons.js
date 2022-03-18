import React from 'react'
import {StaticImage} from "gatsby-plugin-image";
import {SocialIconsWrapper} from "src/components/molecules/SocialIcons/SocialIcons.styles";

const SocialIcons = () => {
    return (
        <SocialIconsWrapper>
            <li>
                <StaticImage src={'../../../icons/facebook.svg'} alt="facebook logo"/>
            </li>
            <li>
                <StaticImage src={'../../../icons/youtube.svg'} alt={'youtube logo'}/>
            </li>
            <li>
                <StaticImage src={'../../../icons/twitter.svg'} alt={'twitter logo'}/>
            </li>
            <li>
                <StaticImage src={'../../../icons/pinterest.svg'} alt={'pinterest logo'}/>
            </li>
            <li>
                <StaticImage src={'../../../icons/instagram.svg'} alt={'instagram logo'}/>
            </li>
        </SocialIconsWrapper>
    )
}

export default SocialIcons