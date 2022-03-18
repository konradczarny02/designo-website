import React from 'react'
import {StaticImage} from "gatsby-plugin-image";
import styled from "styled-components";

export const SocialIconsWrapper = styled.ul`
  display: flex;
  padding: 24px 0 64px;
  justify-content: flex-end;

  @media (min-width: 700px) {
    width: calc(100% / 3);
  }

  li {
    list-style: none;
    margin: 0 8px;
    cursor: pointer;
  }
  
  li:last-child {
    margin-right: 0;
  }
  
  path {
    fill: blue;
  }
`;

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