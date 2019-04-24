import React from 'react';
import { shallow } from 'enzyme';
import SortPanel from '../../containers/SortPanel/SortPanel';

describe('SearchPanel', () => {
    it('should be rendered correctly', () => {
        const wrapper = shallow(<SortPanel />);

        expect(wrapper).toMatchSnapshot();
    });
});
