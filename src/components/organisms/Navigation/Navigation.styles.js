import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  margin: 0 auto;
  padding: 35px 5%;
  width: 100%;
  background-color: ${({theme}) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  max-width: 1500px;

  li {
    cursor: pointer;

    a {
      text-decoration: none;
      color: ${({theme}) => theme.colors.darkGrey};
    }
  }

  @media (min-width: 700px) {
    padding: 64px 5%;
  }

  @media (min-width: 1400px) {
    width: 80%;
    padding: 64px 0;
  }
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
  z-index: 1;
  transform: ${({isOpen}) => isOpen ? 'translateY(105px)' : 'translateY(-100%)'};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 700px) {
    display: none;
  }

  li {
    list-style: none;
    font-size: 24px;
    color: ${({theme}) => theme.colors.white};
    font-weight: 400;
    
    a {
      color: ${({theme}) => theme.colors.white};
      cursor: pointer;
      text-decoration: none;
    }
  }
`;

export const DesktopNav = styled.ul`
  display: none;

  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    width: 380px;
    align-items: center;

    li {
      list-style: none;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.15rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;