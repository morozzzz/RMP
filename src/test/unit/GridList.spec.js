import React from 'react';
import { shallow } from 'enzyme';
import GridList from '../../components/GridList/GridList';

jest.mock('../../components/PosterTile/PosterTile', () => () => <div id="PosterTile" />);

const moviesMock = [
    {
        id: 333339,
        title: 'Ready Player One',
        tagline: 'A better reality awaits.',
    },
    {
        id: 338970,
        title: 'Tomb Raider',
        tagline: 'Her legend begins',
    },
];


describe.skip('GridList', () => {
    it('should be rendered correctly', () => {
        const component = shallow(<GridList data={moviesMock} />);

        expect(component).toMatchSnapshot();
    });
});
