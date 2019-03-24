import React from 'react';
import './SortPanel.css';

class SortPanel extends React.Component {
    onSortButtonClick = (event) => {
        event.target && event.target.classList.toggle('sort-button-selected'); //eslint-disable-line
    };

    render() {
        return (
            <div className="sort-panel">
                <div>Sort by</div>
                <button onClick={this.onSortButtonClick} className="sort-button" type="button">release date</button>
                <button onClick={this.onSortButtonClick} className="sort-button" type="button">rating</button>
            </div>
        );
    }
}

export default SortPanel;
