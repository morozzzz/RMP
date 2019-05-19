// @flow

import React from 'react';
import GridList from '../GridList/GridList';
import './MovieList.css';

type movieListPropType = {
    movies: Array<Object>,
    onItemClick: Function
};

const MovieList = ({ movies = [], onItemClick }: movieListPropType) => (
    <div className="movie-list">
        {
            movies.length
                ? <GridList data={movies} onItemClick={onItemClick} />
                : <div className="movie-list__message">No films found</div>
        }
    </div>
);

export default MovieList;
