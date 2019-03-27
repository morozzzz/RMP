import React from 'react';
import './PosterTile.css';

const PosterTile = ({ data, onTileClick }) => {
    const {
        imageURL,
        title,
        genre,
        year,
    } = data;

    const onClick = () => {
        const selection = window.getSelection();
        const selectionType = selection && selection.type;

        if (selectionType !== 'Range') {
            onTileClick();
        }
    };

    return (
        <div onClick={onClick} className="poster-tile">
            <img className="poster-tile__image" src={imageURL} alt="poster" />
            <div className="poster-tile__primary-data">
                <div className="poster-tile__title">{title.toUpperCase()}</div>
                <div className="poster-tile__year">{year}</div>
            </div>
            <div className="poster-tile__secondary-data">
                <div className="poster-tile__genre">{genre}</div>
            </div>
        </div>
    );
};

export default PosterTile;
