import React from 'react';
import SearchPanel from '../SearchPanel/SearchPanel';
import Logo from '../Logo/Logo';
import './TopMenu.css';

const TopMenu = ({ onSearchClick }) => (
    <div className="top-menu">
        <div className="top-menu-overlay">
            <div className="top-menu__content-container">
                <div className="top-menu__content">
                    <Logo name="netflixroulettee" redirectUrl="" className="top-menu__item" />
                    <SearchPanel onSearchClick={onSearchClick} className="top-menu__item" />
                </div>
            </div>
        </div>
    </div>
);

export default TopMenu;
