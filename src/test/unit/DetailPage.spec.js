import React from 'react';
import { shallow } from 'enzyme';
import DetailPage from '../../containers/DetailPage/DetailPage';

jest.mock('../../services/MovieService');

const detailedMovieMock = {
    id: 338970,
    title: 'Tomb Raider',
    tagline: 'Her legend begins',
    vote_average: 6.2,
    vote_count: 817,
    release_date: '2018-03-08',
    poster_path: 'https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg',
    overview: 'Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.',
    budget: 94000000,
    revenue: 126025000,
    genres: [
        'Action',
        'Adventure',
    ],
    runtime: 118,
};

jest.mock('../../components/MovieList/MovieList', () => () => <div id="MovieList" />);
jest.mock('../../components/StatusBar/StatusBar', () => () => <div id="StatusBar" />);
jest.mock('../../components/DetailMovieBlock/DetailMovieBlock', () => () => <div id="DetailMovieBlock" />);
jest.mock('../../components/Footer/Footer', () => () => <div id="Footer" />);

describe('DetailPage', () => {
    it('component should be rendered correctly', () => {
        const component = shallow(<DetailPage detailedMovie={detailedMovieMock} />);

        expect(component).toMatchSnapshot();
    });
});
