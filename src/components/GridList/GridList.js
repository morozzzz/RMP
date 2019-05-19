// @flow

import React from 'react';
import PosterTile from '../PosterTile/PosterTile';
import './GridList.css';

type gridListPropType = {
    data: Array<Object>,
    onItemClick: Function
};

const GridList = ({ data = [], onItemClick }: gridListPropType) => (
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
