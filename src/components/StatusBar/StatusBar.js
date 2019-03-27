import React from 'react';
import './StatusBar.css';

const StatusBar = ({ status, children }) => (
    <div className="status-bar">
        <div className="status-bar__content">
            <div className="status-bar__list-status">{status}</div>
            {children}
        </div>
    </div>
);

export default StatusBar;
