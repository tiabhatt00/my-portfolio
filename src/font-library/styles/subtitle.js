import React from 'react';
import '../fonts/montserrat.css';

const Subtitle = ({ children }) => {
    return <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, color: '#b0ceff' }}>{children}</p>;
};

export default Subtitle;