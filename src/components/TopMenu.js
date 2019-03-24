import React from 'react';
import SearchPanel from './SearchPanel';
import Logo from './Logo';
import './TopMenu.css';

const TopMenu = () => (
    <div className="top-menu">
        <div className="top-menu-overlay">
            <div className="top-menu-content-container">
                <div className="top-menu-content">
                    <Logo className="top-menu-item" />
                    <SearchPanel className="top-menu-item" />
                </div>
            </div>
        </div>
    </div>
);

export default TopMenu;
