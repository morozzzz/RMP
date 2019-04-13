import { createAction } from 'redux-actions';
import {
    SET_ACTIVE_CRITERIA,
    UPDATE_SERACH_TEXT,
} from '../constants/actionTypes.constants';

const setActiveCrtiteria = createAction(SET_ACTIVE_CRITERIA);
const updateSearchText = createAction(UPDATE_SERACH_TEXT);

export {
    setActiveCrtiteria,
    updateSearchText,
};
