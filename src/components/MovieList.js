import React from 'react';
import StatusBar from './StatusBar';
import GridList from './GridList';
import SortPanel from './SortPanel';

const MovieList = ({ movies }) => (
    <div className="movie-list">
        <StatusBar status={movies.length ? `${movies.length} movies found` : ''}>
            {
                movies.length ? <SortPanel /> : null
            }
        </StatusBar>
        <GridList movies={movies} />
    </div>
);

export default MovieList;
