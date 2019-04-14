import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/movies.actions';
import {
    MOVIES_FETCH_SUCCESS,
    SET_DETAILED_MOVIE,
    RELATED_MOVIES_FETCH_SUCCESS,
} from '../../constants/actionTypes.constants';
import { getMovies } from '../../services/MovieService';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const criteriaStub = {};
const movieMock = {
    id: 333339,
    title: 'Ready Player One',
    tagline: 'A better reality awaits.',
    vote_average: 8.1,
    vote_count: 617,
    release_date: '2018-03-28',
    poster_path: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
    overview: 'When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.',
    budget: 175000000,
    revenue: 0,
    genres: [
        'Adventure',
        'Science Fiction',
        'Action',
    ],
    runtime: 140,
};

jest.mock('../../services/MovieService');

getMovies.mockImplementation(() => Promise.resolve({
    data: [movieMock],
}));


describe('movies.actions', () => {
    describe('fetchMoviesByCriteria', () => {
        it('should create MOVIES_FETCH_SUCCESS action when movies fetching is successfully done', () => {
            const store = mockStore();
            const expectedActions = [
                {
                    type: MOVIES_FETCH_SUCCESS,
                    payload: [movieMock],
                },
            ];

            return store.dispatch(actions.fetchMoviesByCriteria(criteriaStub)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('should create RELATED_MOVIES_FETCH_SUCCESS action when fetching of related movies is successfully done', () => {
            const store = mockStore();
            const expectedActions = [
                {
                    type: RELATED_MOVIES_FETCH_SUCCESS,
                    payload: [movieMock],
                },
            ];

            return store.dispatch(actions.fetchRalatedMovies(criteriaStub)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('should create SET_DETAILED_MOVIE action', () => {
            const expectedAction = {
                type: SET_DETAILED_MOVIE,
                payload: movieMock,
            };

            expect(actions.setDetailedMovie(movieMock)).toEqual(expectedAction);
        });
    });
});
