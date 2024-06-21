import React from 'react';
import '../fonts/montserrat.css';

const Header = ({ children }) => {
    return <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>{children}</h1>;
};

export default Header;