import React from 'react';

const FilterBar = ({ count, genre }) => (
    <div className="filter-bar">
        <div className="list-status">
            { count && `${count} movies found` }
            { genre && `Films by ${genre}` }
        </div>

        {
            count && (
                <div className="filter">
                    <div className="filter-label">Sort by</div>
                    <div>release date</div>
                    <div>rating</div>
                </div>
            )
        }
    </div>
);

export default FilterBar;
