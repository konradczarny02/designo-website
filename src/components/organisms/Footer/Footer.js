import React from 'react'
import styled from "styled-components";
import Logo from "src/components/atoms/Logo";
import SocialIcons from "src/components/molecules/SocialIcons/SocialIcons";

export const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  padding-top: 240px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.black};
`;

export const ContentWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 32px 0;
  background-color: ${({theme}) => theme.colors.darkGrey};
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    list-style: none;
    font-size: 14px;
    color: ${({theme}) => theme.colors.white};
    font-weight: 300;
    margin: 16px 0;
  }
`

export const AddressInfo = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  color: ${({theme}) => theme.colors.lightGrey};

  h4 {
    font-weight: 700;
  }

  p {
    font-weight: 400;
  }
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <ContentWrapper>
                <Logo isBlack={false}/>
                <Line></Line>
                <Nav>
                    <li>OUR COMPANY</li>
                    <li>LOCATIONS</li>
                    <li>CONTACT</li>
                </Nav>
                <AddressInfo>
                    <h4>Designo Central Office</h4>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </AddressInfo>
                <AddressInfo>
                    <h4>Contact Us (Central Office)</h4>
                    <p>P : +1 253-863-8967</p>
                    <p>M : contact@designo.co</p>
                </AddressInfo>
                <SocialIcons/>
            </ContentWrapper>
        </FooterWrapper>
    )
}

export default Footer