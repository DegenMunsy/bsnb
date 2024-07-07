import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  // NavItem,
  // NavLinks,
  // NavBtn,
  // NavBtnLink
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          Board Shorts and Birdies
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          {/* Uncomment and use these if needed
          <NavItem>
            <NavLinks to='about'>About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='discover'>Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='services'>Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='signup'>Sign Up</NavLinks>
          </NavItem>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
          */}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
