import React from 'react';
import './StatusBar.css';

const StatusBar = ({ status, children }) => (
    <div className="status-bar">
        <div className="status-bar-content">
            <div className="list-status">{status}</div>
            {children}
        </div>
    </div>
);

export default StatusBar;
