import React from 'react';
import './SearchPanel.css';

const CRITERIAS = {
    TITLE: 'title',
    GENRE: 'genre',
};

class SearchPannel extends React.Component {
    constructor() {
        super();
        this.state = {
            inputData: '',
            searchCriteria: CRITERIAS.TITLE,
        };
    }

    onInputChange = (event) => {
        this.setState({ inputData: event.target && event.target.value });
    };

    onTitleCriteriaClick = () => {
        this.setState({ searchCriteria: CRITERIAS.TITLE });
    };

    onGenreCriteriaClick = () => {
        this.setState({ searchCriteria: CRITERIAS.GENRE });
    };

    onSearchClick = () => {
        console.log(999);
    };

    handleKey = (event) => {
        const { inputData } = this.state;
        if (event.keyCode === 13 && inputData) {
            this.onSearchClick();
        }
    }

    render() {
        const { inputData, searchCriteria } = this.state;

        return (
            <div className="search-panel">
                <h3 className="search-panel__header">FIND YOUR MOVIE</h3>
                <input className="search-panel__input" type="text" placeholder="Enter key words..." onKeyUp={this.handleKey} onChange={this.onInputChange} />
                <div className="search-panel__bottom-bar">
                    <div className="search-panel__criterias">
                        <div>SEARCH BY</div>
                        <button onClick={this.onTitleCriteriaClick} type="button" className={`search-panel__criteria-button ${searchCriteria === CRITERIAS.TITLE && 'search-panel__criteria-button_selected'}`}>TITLE</button>
                        <button onClick={this.onGenreCriteriaClick} type="button" className={`search-panel__criteria-button ${searchCriteria === CRITERIAS.GENRE && 'search-panel__criteria-button_selected'}`}>GENRE</button>
                    </div>
                    <button onClick={this.onSearchClick} disabled={!inputData} type="button" className="search-panel__search-button">SEARCH</button>
                </div>
            </div>
        );
    }
}

export default SearchPannel;
