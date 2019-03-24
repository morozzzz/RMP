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
            inputData: null,
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
    };

    render() {
        const { inputData, searchCriteria } = this.state;

        return (
            <div className="search-pannel">
                <h3 className="search-header">FIND YOUR MOVIE</h3>
                <input className="search-input" type="text" placeholder="Enter key words..." onChange={this.onInputChange} />
                <div className="search-bottom-pannel">
                    <div className="search-criterias">
                        <div>SEARCH BY</div>
                        <button onClick={this.onTitleCriteriaClick} type="button" className={`criteria-button pointer ${searchCriteria === CRITERIAS.TITLE && 'criteria-button-selected'}`}>TITLE</button>
                        <button onClick={this.onGenreCriteriaClick} type="button" className={`criteria-button pointer ${searchCriteria === CRITERIAS.GENRE && 'criteria-button-selected'}`}>GENRE</button>
                    </div>
                    <button onClick={this.onSearchClick} disabled={!inputData} type="button" className="search-button pointer">SEARCH</button>
                </div>
            </div>
        );
    }
}

export default SearchPannel;
