import React from 'react';
import PosterTile from '../PosterTile/PosterTile';
import './GridList.css';

const GridList = ({ data = [], onItemClick }) => (
    <div className="grid-list">
        <div className="grid-list__content">
            {
                data.map(movieData => (
                    <PosterTile data={movieData} key={movieData.id} onTileClick={onItemClick} />
                ))
            }
        </div>
    </div>
);

export default GridList;
