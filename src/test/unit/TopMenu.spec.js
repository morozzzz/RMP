import React from 'react';
import { shallow } from 'enzyme';
import TopMenu from '../../components/TopMenu/TopMenu';

jest.mock('../../components/Logo/Logo', () => () => <div id="Logo" />);
jest.mock('../../containers/SearchPanel/SearchPanel', () => () => <div id="SearchPanel" />);

describe('TopMenu', () => {
    it('should be rendered correctly', () => {
        const onSearchClickMock = () => {};
        const wrapper = shallow(<TopMenu onSearchClick={onSearchClickMock} />);

        expect(wrapper).toMatchSnapshot();
    });
});
