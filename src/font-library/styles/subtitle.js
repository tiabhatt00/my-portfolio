import React from 'react';
import '../fonts/nunitosans.css';

const Subtitle = ({ children }) => {
    return <p style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 200, fontSize: '24px', color: '#6A5ACD' }}>{children}</p>;
};

export default Subtitle;