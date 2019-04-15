import React from 'react';
import { connect } from 'react-redux';
import { CRITERIAS, KEY_CODES } from '../../constants/app.constants';
import {
    setActiveCrtiteria,
    updateSearchText,
} from '../../actions/search.actions';

import './SearchPanel.css';

class SearchPannel extends React.Component {
    handleSearchClick = () => {
        const { onSearchClick } = this.props;

        onSearchClick();
    };

    handleKey = (event) => {
        const { onSearchClick, search } = this.props;

        if (event.keyCode === KEY_CODES.ENTER && search.trim()) {
            onSearchClick();
        }
    }

    render() {
        const {
            onCriteriaClick,
            search,
            searchBy,
            onInputChange,
        } = this.props;

        return (
            <div className="search-panel">
                <h3 className="search-panel__header">FIND YOUR MOVIE</h3>
                <input className="search-panel__input" type="text" placeholder="Enter key words..." onKeyUp={this.handleKey} onChange={onInputChange} />
                <div className="search-panel__bottom-bar">
                    <div className="search-panel__criterias">
                        <div>SEARCH BY</div>
                        <button id="title-button" value={CRITERIAS.TITLE} onClick={onCriteriaClick} type="button" className={`search-panel__criteria-button ${searchBy === CRITERIAS.TITLE && 'search-panel__criteria-button_selected'}`}>TITLE</button>
                        <button id="genre-button" value={CRITERIAS.GENRE} onClick={onCriteriaClick} type="button" className={`search-panel__criteria-button ${searchBy === CRITERIAS.GENRE && 'search-panel__criteria-button_selected'}`}>GENRE</button>
                    </div>
                    <button onClick={this.handleSearchClick} disabled={!search.trim()} type="button" className="search-panel__search-button">SEARCH</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        search: state.searchParams.search,
        searchBy: state.searchParams.searchBy,
    }
);

const mapDispatchToProps = dispatch => (
    {
        onCriteriaClick: event => dispatch(setActiveCrtiteria(event.target.value)),
        onInputChange: event => dispatch(updateSearchText(event.target.value)),
    }
);
export default connect(mapStateToProps, mapDispatchToProps)(SearchPannel);
