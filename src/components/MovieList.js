import React from 'react';
import StatusBar from './StatusBar';
import GridList from './GridList';
import SortPanel from './SortPanel';

const MovieList = ({ movies }) => (
    <div className="movie-list">
        {
            movies.length && (
                <StatusBar status={`${movies.length} movies found`}>
                    <SortPanel />
                </StatusBar>
            )
        }
        <GridList movies={movies} />
    </div>
);

export default MovieList;
