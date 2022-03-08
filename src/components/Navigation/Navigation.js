import React from 'react'
import Logo from "src/components/atoms/Logo";
import Hamburger from "src/components/atoms/Hamburger";
import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  padding: 35px 24px;
  background-color: ${({theme}) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = () => {
    return (
        <NavigationWrapper>
            <Logo isBlack={true} />
            <Hamburger />
        </NavigationWrapper>
    )
}

export default Navigation