import React from 'react';
import Logo from '../Logo/Logo';
import './DetailMovieBlock.css';

const DetailMovieBlock = ({ data }) => {
    const {
        title,
        year,
        duration,
        rating,
        additional,
        imageUrl,
        description,
    } = data;

    const onSearchClick = () => {
        console.log(132);
    };

    return (
        <div className="detail-block">
            <div className="detail-block__overlay">
                <div className="detail-block__top-bar">
                    <Logo />
                    <button onClick={onSearchClick} type="button" className="detail-block__search-button">SEARCH</button>
                </div>
                <div className="detail-block__content">
                    <div className="detail-block__image-container">
                        <img className="detail-block__image" src={imageUrl} alt="poster" />
                    </div>
                    <div className="detail-block__info">
                        <div className="detail-block__primary-data">
                            <div className="detail-block__title">{title}</div>
                            <div className="detail-block__rating">{rating}</div>
                        </div>
                        <div className="detail-block__additional">{additional}</div>
                        <div className="detail-block__secondary-data detail-block-secondary-data">
                            <div className="detail-block-secondary-data__item">{year}</div>
                            <div className="detail-block-secondary-data__item">{`${duration} min`}</div>
                        </div>
                        <div className="detail-block__description">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailMovieBlock;
