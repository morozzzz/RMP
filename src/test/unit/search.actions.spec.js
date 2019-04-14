import * as actions from '../../actions/search.actions';
import {
    SET_SEARCH_CRITERIA,
    UPDATE_SERACH_TEXT,
    UPDATE_SORT_TYPE,
} from '../../constants/actionTypes.constants';

describe('search.actions', () => {
    it('setActiveCrtiteria should create SET_SEARCH_CRITERIA action', () => {
        const criteria = 'genre';

        const expectedAction = {
            type: SET_SEARCH_CRITERIA,
            payload: criteria,
        };

        expect(actions.setActiveCrtiteria(criteria)).toEqual(expectedAction);
    });

    it('updateSearchText should create UPDATE_SERACH_TEXT action', () => {
        const text = 'some text';

        const expectedAction = {
            type: UPDATE_SERACH_TEXT,
            payload: text,
        };

        expect(actions.updateSearchText(text)).toEqual(expectedAction);
    });

    it('updateSortType should create UPDATE_SORT_TYPE action', () => {
        const sortType = 'rating';

        const expectedAction = {
            type: UPDATE_SORT_TYPE,
            payload: sortType,
        };

        expect(actions.updateSortType(sortType)).toEqual(expectedAction);
    });
});
