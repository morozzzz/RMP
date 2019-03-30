import React from 'react';
import './Logo.css';

const Logo = ({ name, redirectUrl }) => (
    <a href={redirectUrl} className="logo">{name}</a>
);

export default Logo;
