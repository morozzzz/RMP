import React from 'react';
import { shallow } from 'enzyme';
import TopMenu from '../../components/TopMenu/TopMenu';

jest.mock('../../components/Logo/Logo', () => () => <div id="Logo" />);
jest.mock('../../components/SearchPanel/SearchPanel', () => () => <div id="SearchPanel" />);

describe.skip('TopMenu', () => {
    it('should be rendered correctly', () => {
        const onSearchClickMock = () => {};
        const wrapper = shallow(<TopMenu onSearchClick={onSearchClickMock} />);

        expect(wrapper).toMatchSnapshot();
    });
});
