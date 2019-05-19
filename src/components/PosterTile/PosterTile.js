// @flow

import React from 'react';
import './PosterTile.css';

type posterTilePropType = {
    data: Object,
    onTileClick: Function
};

const PosterTile = ({ data, onTileClick }: posterTilePropType) => {
    const {
        poster_path,
        title,
        genres,
        release_date,
    } = data;

    const handleClick = () => {
        const selection = window.getSelection();
        const selectionType = selection && selection.type;

        if (selectionType !== 'Range') {
            onTileClick(data);
        }
    };

    return (
        <div onClick={handleClick} className="poster-tile">
            <img className="poster-tile__image" src={poster_path} alt="poster" />
            <div className="poster-tile__primary-data">
                <div className="poster-tile__title">{title.toUpperCase()}</div>
                <div className="poster-tile__year">{release_date.slice(0, 4)}</div>
            </div>
            <div className="poster-tile__secondary-data">
                <div className="poster-tile__genre">{genres.join(' ')}</div>
            </div>
        </div>
    );
};

export default PosterTile;
