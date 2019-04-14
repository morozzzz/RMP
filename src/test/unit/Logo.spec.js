import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../../components/Logo/Logo';

describe.skip('Logo', () => {
    it('should be rendered correctly', () => {
        const logoName = 'some name';
        const logoRedirectUrl = 'http://some_url';
        const component = shallow(<Logo name={logoName} redirectUrl={logoRedirectUrl} />);

        expect(component).toMatchSnapshot();
    });
});
