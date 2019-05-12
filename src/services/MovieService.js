import fetch from 'node-fetch';
import { GET_MOVIES_URL } from '../constants/app.constants';

const getMovies = (queryString) => {
    const targetUrl = `${GET_MOVIES_URL}?${queryString}`;

    return fetch(targetUrl)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response.json();
        });
};

const getMovieById = (id) => {
    const targetUrl = `${GET_MOVIES_URL}/${id}`;

    return fetch(targetUrl)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response.json();
        });
};

export {
    getMovies,
    getMovieById,
};
