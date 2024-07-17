import React, { useEffect, useState } from 'react';
import Title from '../title';
// import Experience from '../experience';
import { LayoutContainer, Navbar, NavItem } from './styles';

const Layout = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const titleSection = document.getElementById('title');
      const titleHeight = titleSection.getBoundingClientRect().height;

      if (window.scrollY > titleHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <LayoutContainer>
      <div id="title">
        <Title />
      </div>
      {showNavbar && (
        <Navbar>
          <NavItem to="experience" smooth={true} duration={500}>Experience</NavItem>
          {/* <NavItem to="projects" smooth={true} duration={500}>Projects</NavItem> */}
        </Navbar>
      )}
      {/* <Experience /> */}
      {/* <Projects /> */}
    </LayoutContainer>
  );
};

export default Layout;
