import React from 'react';
import PosterTile from './PosterTile';
import './GridList.css';

const GridList = ({ movies = [] }) => (
    <div className="grid-list">
        <div className="grid-list-content">
            {
                movies.map(movieData => <PosterTile data={movieData} key={movieData.id} />)
            }
        </div>
    </div>
);

export default GridList;
