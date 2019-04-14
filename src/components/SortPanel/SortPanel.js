import React from 'react';
import { connect } from 'react-redux';
import { SORT_TYPES } from '../../constants/app.constants';
import { updateSortType } from '../../actions/search.actions';
import './SortPanel.css';

class SortPanel extends React.PureComponent {
    componentDidUpdate = () => {
        const { onSortUpdate } = this.props;

        onSortUpdate();
    }

    render() {
        const { sortBy, onSortClick } = this.props;

        return (
            <div className="sort-panel">
                <div>Sort by</div>
                <button id="release-button" value={SORT_TYPES.RELEASE_DATE} onClick={onSortClick} className={`${sortBy === SORT_TYPES.RELEASE_DATE && 'sort-panel__button_selected'} sort-panel__button`} type="button">release date</button>
                <button id="rating-button" value={SORT_TYPES.RATING} onClick={onSortClick} className={`${sortBy === SORT_TYPES.RATING && 'sort-panel__button_selected'} sort-panel__button`} type="button">rating</button>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        sortBy: state.searchParams.sortBy,
    }
);

const mapDispatchToProps = dispatch => (
    {
        onSortClick: event => dispatch(updateSortType(event.target.value)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(SortPanel);
