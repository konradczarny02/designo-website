import React from 'react'
import {FooterWrapper, ContentWrapper, Line, Nav, AddressInfo} from "src/components/organisms/Footer/Footer.styles";
import Logo from "src/components/atoms/Logo";
import SocialIcons from "src/components/molecules/SocialIcons/SocialIcons";
import ContactLink from "src/components/molecules/ContactLink/ContactLink";
import {Link} from "gatsby";

const Footer = () => {
    return (
        <FooterWrapper>
            <ContactLink/>
            <ContentWrapper>
                <Logo isBlack={false}/>
                <Line></Line>
                <Nav>
                    <li><Link to="/about">OUR COMPANY</Link></li>
                    <li><Link to="/locations">LOCATIONS</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
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