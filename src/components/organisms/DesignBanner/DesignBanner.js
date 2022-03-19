import React from 'react'
import styled from "styled-components";
import bg from 'src/assets/homepage/bg-pattern-small-circle.svg'
import {Paragraph, Title} from "src/components/atoms/Titles";

export const DesignBannerWrapper = styled.div`
  width: 100%;
  padding: 104px 24px;
  background-color: ${({theme}) => theme.colors.peach};
  background-image: url("${bg}");
  background-size: contain;
  z-index: -222;
  position: relative;

  @media (min-width: 700px) {
    width: 90%;
    margin: 0 auto;
    border-radius: 10px;
  }

  @media (min-width: 1400px) {
    width: 80%;
    min-width: calc(1400px * 90%);
  }

  ${Title} {
    margin: 0 0 24px;

    @media (min-width: 1400px) {
      text-align: center;
    }
  }

  ${Paragraph} {
    @media (min-width: 1400px) {
      text-align: center;
    }
  }
}
`;

const DesignBanner = ({title, desc}) => {
    return (
        <DesignBannerWrapper>
            <Title>{title}</Title>
            <Paragraph>{desc}</Paragraph>
        </DesignBannerWrapper>
    )
}

export default DesignBanner