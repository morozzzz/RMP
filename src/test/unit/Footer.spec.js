import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer/Footer';

jest.mock('../../components/PosterTile/PosterTile', () => () => <div id="PosterTile" />);

describe('Footer', () => {
    it('should be rendered correctly', () => {
        const component = shallow(<Footer />);

        expect(component).toMatchSnapshot();
    });
});
