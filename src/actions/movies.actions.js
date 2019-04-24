import { createAction } from 'redux-actions';
import {
    MOVIES_FETCH_SUCCESS,
    RELATED_MOVIES_FETCH_SUCCESS,
    MOVIES_NOT_FOUND,
    MOVIES_FOUND,
    STORE_DETAILED_MOVIE,
} from '../constants/actionTypes.constants';
import {
    getMovies,
    getMovieById,
} from '../services/MovieService';

const moviesFetchSuccess = createAction(MOVIES_FETCH_SUCCESS);

const moviesNotFound = createAction(MOVIES_NOT_FOUND);

const moviesFound = createAction(MOVIES_FOUND);

const storeDetailedMovie = createAction(STORE_DETAILED_MOVIE);

const ralatedMoviesFetchSuccess = createAction(RELATED_MOVIES_FETCH_SUCCESS);

const fetchMoviesByCriteria = options => dispatch => getMovies(options)
    .then((formattedResp) => {
        if (!formattedResp.data.length) {
            dispatch(moviesNotFound());
        } else {
            dispatch(moviesFound());
        }

        dispatch(moviesFetchSuccess(formattedResp.data));
    });

const fetchRalatedMovies = options => dispatch => getMovies(options)
    .then((formattedResp) => {
        dispatch(ralatedMoviesFetchSuccess(formattedResp.data));
    });

const fetchDetailedMovie = id => dispatch => getMovieById(id)
    .then((formattedResp) => {
        dispatch(storeDetailedMovie(formattedResp));
        formattedResp && dispatch(fetchRalatedMovies(formattedResp.id));
    });

export {
    fetchMoviesByCriteria,
    fetchDetailedMovie,
};
