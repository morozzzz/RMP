import { createAction } from 'redux-actions';
import {
    MOVIES_FETCH_SUCCESS,
    SET_DETAILED_MOVIE,
    RELATED_MOVIES_FETCH_SUCCESS,
} from '../constants/actionTypes.constants';
import { getMovies } from '../services/MovieService';

const moviesFetchSuccess = createAction(MOVIES_FETCH_SUCCESS);

const ralatedMoviesFetchSuccess = createAction(RELATED_MOVIES_FETCH_SUCCESS);

const setDetailedMovie = createAction(SET_DETAILED_MOVIE);

const fetchMoviesByCriteria = options => dispatch => getMovies(options)
    .then((formattedResp) => {
        dispatch(moviesFetchSuccess(formattedResp.data));
    });

const fetchRalatedMovies = options => dispatch => getMovies(options)
    .then((formattedResp) => {
        dispatch(ralatedMoviesFetchSuccess(formattedResp.data));
    });

export {
    fetchMoviesByCriteria,
    setDetailedMovie,
    fetchRalatedMovies,
};
