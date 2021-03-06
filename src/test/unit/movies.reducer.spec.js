import reducer from '../../reducers/movies.reducer';
import {
    MOVIES_FETCH_SUCCESS,
    RELATED_MOVIES_FETCH_SUCCESS,
} from '../../constants/actionTypes.constants';

const initialState = {};

describe('search reducer', () => {
    it('should handle SET_SEARCH_CRITERIA action', () => {
        const movies = ['movie1', 'movie1'];

        const expectedState = {
            general: movies,
        };

        const action = {
            type: MOVIES_FETCH_SUCCESS,
            payload: movies,
        };

        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle RELATED_MOVIES_FETCH_SUCCESS action', () => {
        const movies = ['movie1', 'movie1'];

        const expectedState = {
            related: movies,
        };

        const action = {
            type: RELATED_MOVIES_FETCH_SUCCESS,
            payload: movies,
        };

        expect(reducer(initialState, action)).toEqual(expectedState);
    });
});
