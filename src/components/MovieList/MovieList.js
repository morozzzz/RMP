import React from 'react';
import GridList from '../GridList/GridList';
import './MovieList.css';

const MovieList = ({ movies, onItemClick }) => (
    <div className="movie-list">
        {
            movies.length
                ? <GridList data={movies} onItemClick={onItemClick} />
                : <div className="movie-list__message">No films found</div>
        }
    </div>
);

export default MovieList;
