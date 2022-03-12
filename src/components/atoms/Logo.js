import React from 'react';
import styled from "styled-components";
import LogoIcon from 'src/assets/images/logo.svg'

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;

  h2 {
    font-weight: bold;
    font-size: 24px;
    letter-spacing: 0.3rem;
    color: ${({theme, isBlack}) => isBlack ? theme.colors.darkGrey : theme.colors.white};
  }
`;

const Logo = ({isBlack}) => {
    return (
        <LogoWrapper isBlack={isBlack}>
            <LogoIcon/>
            <h2>DESIGNO</h2>
        </LogoWrapper>
    )
}

export default Logo