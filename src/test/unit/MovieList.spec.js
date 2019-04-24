import React from 'react';
import { shallow } from 'enzyme';
import MovieList from '../../components/MovieList/MovieList';

const moviesMock = [
    {
        id: 333339,
        title: 'Ready Player One',
        tagline: 'A better reality awaits.',
        vote_average: 8.1,
        vote_count: 617,
        release_date: '2018-03-28',
        poster_path: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
        overview: 'When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.',
        budget: 175000000,
        revenue: 0,
        genres: [
            'Adventure',
            'Science Fiction',
            'Action',
        ],
        runtime: 140,
    },
    {
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
    },
];

jest.mock('../../components/GridList/GridList', () => () => <div id="GridList" />);

describe('MovieList', () => {
    it('should be rendered correctly', () => {
        const wrapper = shallow(<MovieList movies={moviesMock} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('container with message should be shown if there are no movies', () => {
        const wrapper = shallow(<MovieList movies={[]} />);

        expect(wrapper.find('.movie-list__message')).toBeDefined();
    });
});
