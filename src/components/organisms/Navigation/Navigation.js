import React, {useState} from 'react'
import Logo from "src/components/atoms/Logo";
import Hamburger from "src/components/atoms/Hamburger";
import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  padding: 35px 24px;
  background-color: ${({theme}) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const MobileNav = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 230px;
  background-color: ${({theme}) => theme.colors.black};
  display: flex;
  flex-direction: column;
  padding: 48px 24px;
  justify-content: space-between;
  z-index: -10;
  transform: ${({isOpen}) => isOpen ? 'translateY(105px)' : 'translateY(-100%)'};
  transition: transform 0.5s ease-in-out;
  
  @media (min-width: 650px) {
    display: none;
  }

  li {
    list-style: none;
    font-size: 24px;
    color: ${({theme}) => theme.colors.white};
    font-weight: 400;
  }
`;

export const DesktopNav = styled.ul`
  display: none;
  
  @media (min-width: 650px) {
    display: flex;
    justify-content: space-between;
    width: 380px;
    align-items: center;
    
    li {
      list-style: none;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.15rem;
    }
  }
`;

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <NavigationWrapper>
            <Logo isBlack={true}/>
            <Hamburger onClick={() => setIsOpen(prevState => !prevState)}/>
            <DesktopNav>
                <li>OUR COMPANY</li>
                <li>LOCATIONS</li>
                <li>CONTACT</li>
            </DesktopNav>
            <MobileNav isOpen={isOpen}>
                <li>OUR COMPANY</li>
                <li>LOCATIONS</li>
                <li>CONTACT</li>
            </MobileNav>
        </NavigationWrapper>
    )
}

export default Navigation