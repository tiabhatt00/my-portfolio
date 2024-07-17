import React from 'react';
import '../fonts/nunitosans.css';

const Body = ({ children }) => {
    return <p style={{ fontFamily: 'Nunito Sans, sans-serif' }}>{children}</p>;
};

export default Body;