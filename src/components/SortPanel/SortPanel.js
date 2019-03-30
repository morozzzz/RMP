import React from 'react';
import './SortPanel.css';
import { SORT_PARAMS } from '../../constants/app.constants';

class SortPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            sortBy: SORT_PARAMS.RELEASE_DATE,
        };
    }

    componentDidUpdate = () => {
        const { onSortUpdate } = this.props;

        onSortUpdate(this.state);
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
                <button id="release-button" onClick={this.onReleaseButtonClick} className={`${sortBy === SORT_PARAMS.RELEASE_DATE && 'sort-panel__button_selected'} sort-panel__button`} type="button">release date</button>
                <button id="rating-button" onClick={this.onRatingButtonClick} className={`${sortBy === SORT_PARAMS.RATING && 'sort-panel__button_selected'} sort-panel__button`} type="button">rating</button>
            </div>
        );
    }
}

export default SortPanel;
