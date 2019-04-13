import { GET_MOVIES_URL } from '../constants/app.constants';


const getMovies = (options = {}) => {
    const queryString = Object.keys(options)
        .map(param => `${param}=${options[param]}&`)
        .join('')
        .slice(0, -1);

    const targetUrl = `${GET_MOVIES_URL}?${queryString}`;

    return fetch(targetUrl);
};

const getMovieById = () => Promise.resolve({}); // todo

export {
    getMovies,
    getMovieById,
};
