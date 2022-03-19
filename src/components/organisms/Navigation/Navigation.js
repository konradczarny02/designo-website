import React, {useState} from 'react'
import Logo from "src/components/atoms/Logo";
import Hamburger from "src/components/atoms/Hamburger";
import {NavigationWrapper, DesktopNav, MobileNav} from "src/components/organisms/Navigation/Navigation.styles";
import {Link} from "gatsby";



const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <NavigationWrapper>
            <Logo isBlack={true}/>
            <Hamburger isOpen={isOpen} onClick={() => setIsOpen(prevState => !prevState)}/>
            <DesktopNav>
                <li><Link to="/">OUR COMPANY</Link></li>
                <li><Link to="/locations">LOCATIONS</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </DesktopNav>
        </NavigationWrapper>
            <MobileNav isOpen={isOpen}>
                <li><Link to="/">OUR COMPANY</Link></li>
                <li><Link to="/locations">LOCATIONS</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </MobileNav>
        </>
    )
}

export default Navigation