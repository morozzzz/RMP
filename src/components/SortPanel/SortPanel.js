import React from 'react';
import './SortPanel.css';

const SORT_PARAMS = {
    RELEASE_DATE: 'release date',
    RATING: 'rating',
};

class SortPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            sortBy: SORT_PARAMS.RELEASE_DATE,
        };
    }

    onReleaseButtonClick = () => {
        this.setState({ sortBy: SORT_PARAMS.RELEASE_DATE });
    }

    onRatingButtonClick = () => {
        this.setState({ sortBy: SORT_PARAMS.RATING });
    }

    render() {
        const { sortBy } = this.state;

        return (
            <div className="sort-panel">
                <div>Sort by</div>
                <button onClick={this.onReleaseButtonClick} className={`${sortBy === SORT_PARAMS.RELEASE_DATE && 'sort-panel__button_selected'} sort-panel__button`} type="button">release date</button>
                <button onClick={this.onRatingButtonClick} className={`${sortBy === SORT_PARAMS.RATING && 'sort-panel__button_selected'} sort-panel__button`} type="button">rating</button>
            </div>
        );
    }
}

export default SortPanel;
