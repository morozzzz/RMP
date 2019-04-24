import React from 'react';
import { shallow } from 'enzyme';
import SearchPanel from '../../containers/SearchPanel/SearchPanel';

describe('SearchPanel', () => {
    it('should be rendered correctly', () => {
        const wrapper = shallow(<SearchPanel />);

        expect(wrapper).toMatchSnapshot();
    });
});
