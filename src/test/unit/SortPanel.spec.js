import React from 'react';
import { shallow } from 'enzyme';
import SortPanel from '../../components/SortPanel/SortPanel';
import { SORT_TYPES } from '../../constants/app.constants';

describe('SearchPanel', () => {
    it('should be rendered correctly', () => {
        const wrapper = shallow(<SortPanel />);

        expect(wrapper).toMatchSnapshot();
    });

    it('componentDidUpdate() should invoke props.onSortUpdate() with state as args', () => {
        const onSortUpdateMock = jest.fn();

        const wrapper = shallow(<SortPanel onSortUpdate={onSortUpdateMock} />);
        const instance = wrapper.instance();

        const state = wrapper.state();

        instance.componentDidUpdate();

        expect(onSortUpdateMock).toHaveBeenCalledWith(state);
    });

    it('click on RATING button should set state.sortBy with SORT_TYPES.RATING', () => {
        const wrapper = shallow(<SortPanel onSortUpdate={() => {}} />);
        const ratingButton = wrapper.find('#rating-button');

        ratingButton.simulate('click');

        expect(wrapper.state().sortBy).toEqual(SORT_TYPES.RATING);
    });

    it('click on RELEASE DATE button should set state.sortBy with SORT_TYPES.RELEASE_DATE', () => {
        const wrapper = shallow(<SortPanel onSortUpdate={() => {}} />);
        const releaseButton = wrapper.find('#release-button');

        releaseButton.simulate('click');

        expect(wrapper.state().sortBy).toEqual(SORT_TYPES.RELEASE_DATE);
    });
});
