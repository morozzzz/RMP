import reducer from '../../reducers/search.reducer';
import {
    SET_SEARCH_CRITERIA,
    UPDATE_SERACH_TEXT,
    UPDATE_SORT_TYPE,
} from '../../constants/actionTypes.constants';

const initialState = {};

describe('search reducer', () => {
    it('should handle SET_SEARCH_CRITERIA action', () => {
        const criteria = 'genre';

        const expectedState = {
            searchBy: criteria,
        };

        const action = {
            type: SET_SEARCH_CRITERIA,
            payload: criteria,
        };

        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle UPDATE_SERACH_TEXT action', () => {
        const text = 'some text';

        const expectedState = {
            search: text,
        };

        const action = {
            type: UPDATE_SERACH_TEXT,
            payload: text,
        };

        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle UPDATE_SORT_TYPE action', () => {
        const sortType = 'rating';

        const expectedState = {
            sortBy: sortType,
        };

        const action = {
            type: UPDATE_SORT_TYPE,
            payload: sortType,
        };

        expect(reducer(initialState, action)).toEqual(expectedState);
    });
});
