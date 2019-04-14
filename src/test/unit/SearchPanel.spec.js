import React from 'react';
import { shallow } from 'enzyme';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import { CRITERIAS, KEY_CODES } from '../../constants/app.constants';

describe.skip('SearchPanel', () => {
    it('should be rendered correctly', () => {
        const wrapper = shallow(<SearchPanel />);

        expect(wrapper).toMatchSnapshot();
    });

    it('changes in input field should set state with new input value', () => {
        const mockInpuValue = 'some value';
        const wrapper = shallow(<SearchPanel />);
        const inputField = wrapper.find('.search-panel__input');

        inputField.simulate('change', { target: { value: mockInpuValue } });

        expect(wrapper.state().search).toEqual(mockInpuValue);
    });

    it('click on TITLE button should set state.searchBy with "title" value', () => {
        const wrapper = shallow(<SearchPanel />);
        const titleButton = wrapper.find('#title-button');

        titleButton.simulate('click');

        expect(wrapper.state().searchBy).toEqual(CRITERIAS.TITLE);
    });

    it('click on GENRE button should set state.searchBy with "genre" value', () => {
        const wrapper = shallow(<SearchPanel />);
        const genreButton = wrapper.find('#genre-button');

        genreButton.simulate('click');

        expect(wrapper.state().searchBy).toEqual(CRITERIAS.GENRE);
    });

    it('click on SEARCH button should invoke props.onSearchClick() with state as arguments', () => {
        const onSearchClickMock = jest.fn();
        const stateMock = {
            search: 'some text',
            searchBy: CRITERIAS.GENRE,
        };

        const wrapper = shallow(<SearchPanel onSearchClick={onSearchClickMock} />);
        const searchButton = wrapper.find('.search-panel__search-button');

        wrapper.setState(stateMock);

        searchButton.simulate('click');

        expect(onSearchClickMock).toHaveBeenCalledWith(stateMock);
    });

    it('push ENTER key in input field should invoke props.onSearchClick() with state as arguments', () => {
        const onSearchClickMock = jest.fn();
        const stateMock = {
            search: 'some text',
            searchBy: CRITERIAS.GENRE,
        };

        const wrapper = shallow(<SearchPanel onSearchClick={onSearchClickMock} />);
        const inputField = wrapper.find('.search-panel__input');

        wrapper.setState(stateMock);

        inputField.simulate('keyUp', { keyCode: KEY_CODES.ENTER });

        expect(onSearchClickMock).toHaveBeenCalledWith(stateMock);
    });
});
