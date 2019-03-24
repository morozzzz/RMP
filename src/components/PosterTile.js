import React from 'react';
import './PosterTile.css';

const PosterTile = ({ data }) => {
    const {
        imageURL,
        title,
        genre,
        year,
    } = data;

    return (
        <div className="poster-tile">
            <img className="poster-image" src={imageURL} alt="poster" />
            <div className="primary-data">
                <div className="poster-title">{title.toUpperCase()}</div>
                <div className="poster-year">{year}</div>
            </div>
            <div className="secondary-data">
                <div className="poster-genre">{genre}</div>
            </div>
        </div>
    );
};


export default PosterTile;
