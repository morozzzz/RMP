import React from 'react';
import './SearchPanel.css';
import { CRITERIAS, KEY_CODES } from '../../constants/app.constants';

class SearchPannel extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            searchBy: CRITERIAS.TITLE,
        };
    }

    onInputChange = (event) => {
        this.setState({ search: event.target && event.target.value });
    };

    onTitleCriteriaClick = () => {
        this.setState({ searchBy: CRITERIAS.TITLE });
    };

    onGenreCriteriaClick = () => {
        this.setState({ searchBy: CRITERIAS.GENRE });
    };

    handleSearchClick = () => {
        const { onSearchClick } = this.props;

        onSearchClick(this.state);
    };

    handleKey = (event) => {
        const { search } = this.state;
        const { onSearchClick } = this.props;

        if (event.keyCode === KEY_CODES.ENTER && search) {
            onSearchClick(this.state);
        }
    }

    render() {
        const { search, searchBy } = this.state;

        return (
            <div className="search-panel">
                <h3 className="search-panel__header">FIND YOUR MOVIE</h3>
                <input className="search-panel__input" type="text" placeholder="Enter key words..." onKeyUp={this.handleKey} onChange={this.onInputChange} />
                <div className="search-panel__bottom-bar">
                    <div className="search-panel__criterias">
                        <div>SEARCH BY</div>
                        <button id="title-button" onClick={this.onTitleCriteriaClick} type="button" className={`search-panel__criteria-button ${searchBy === CRITERIAS.TITLE && 'search-panel__criteria-button_selected'}`}>TITLE</button>
                        <button id="genre-button" onClick={this.onGenreCriteriaClick} type="button" className={`search-panel__criteria-button ${searchBy === CRITERIAS.GENRE && 'search-panel__criteria-button_selected'}`}>GENRE</button>
                    </div>
                    <button onClick={this.handleSearchClick} disabled={!search} type="button" className="search-panel__search-button">SEARCH</button>
                </div>
            </div>
        );
    }
}

export default SearchPannel;
