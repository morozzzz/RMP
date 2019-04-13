const CRITERIAS = {
    TITLE: 'title',
    GENRE: 'genres',
};

const SORT_TYPES = {
    RELEASE_DATE: 'release_date',
    RATING: 'vote_average',
};

const KEY_CODES = {
    ENTER: 13,
};

const SERVER_URL = 'https://reactjs-cdp.herokuapp.com';

const GET_MOVIES_URL = `${SERVER_URL}/movies`;

export {
    CRITERIAS,
    SORT_TYPES,
    KEY_CODES,
    GET_MOVIES_URL,
};
