import React from 'react';
import '../fonts/montserrat.css';

const Body = ({ children }) => {
    return <p style={{ fontFamily: 'Montserrat, sans-serif' }}>{children}</p>;
};

export default Body;