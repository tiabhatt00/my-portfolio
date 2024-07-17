import React from 'react';
import '../fonts/nunitosans.css';

const H1 = ({ children }) => {
    return <h1 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 400, fontSize: '44px' }}>{children}</h1>;
};

const H2 = ({ children }) => {
    return <h2 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 400 }}>{children}</h2>;
};

const H3 = ({ children }) => {
    return <h3 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 400 }}>{children}</h3>;
};
export { H1, H2, H3 };