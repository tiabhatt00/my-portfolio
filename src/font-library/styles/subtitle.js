import React from 'react';
import '../fonts/montserrat.css';

const Subtitle = ({ children }) => {
    return <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '24px', color: '#6677CC' }}>{children}</p>;
};

export default Subtitle;