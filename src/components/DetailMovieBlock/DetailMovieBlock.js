import React from 'react';
import Logo from '../Logo/Logo';
import './DetailMovieBlock.css';

const DetailMovieBlock = ({ movieData, onSearchClick }) => {
    const {
        title,
        release_date,
        runtime,
        vote_average,
        tagline,
        poster_path,
        overview,
    } = movieData;

    return (
        <div className="detail-block">
            <div className="detail-block__overlay">
                <div className="detail-block__top-bar">
                    <Logo name="netflixroulettee" redirectUrl="" />
                    <button onClick={onSearchClick} type="button" className="detail-block__search-button">SEARCH</button>
                </div>
                <div className="detail-block__content">
                    <div className="detail-block__image-container">
                        <img className="detail-block__image" src={poster_path} alt="poster" />
                    </div>
                    <div className="detail-block__info">
                        <div className="detail-block__primary-data">
                            <div className="detail-block__title">{title}</div>
                            <div className="detail-block__rating">{vote_average}</div>
                        </div>
                        <div className="detail-block__additional">{tagline}</div>
                        <div className="detail-block__secondary-data detail-block-secondary-data">
                            <div className="detail-block-secondary-data__item">{release_date}</div>
                            <div className="detail-block-secondary-data__item">{`${runtime} min`}</div>
                        </div>
                        <div className="detail-block__description">{overview}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailMovieBlock;
