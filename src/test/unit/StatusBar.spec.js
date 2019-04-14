import React from 'react';
import { shallow } from 'enzyme';
import StatusBar from '../../components/StatusBar/StatusBar';

describe.skip('StatusBar', () => {
    it('should be rendered correctly', () => {
        const statusMock = 'some status';
        const wrapper = shallow(<StatusBar status={statusMock} />);

        expect(wrapper).toMatchSnapshot();
    });
});
