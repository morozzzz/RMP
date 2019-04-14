import React from 'react';
import { shallow } from 'enzyme';
import DetailPage from '../../components/DetailPage/DetailPage';
import MovieService from '../../services/MovieService';

jest.mock('../../services/MovieService');

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

describe.skip('DetailPage', () => {
    beforeEach(() => {
        MovieService.getMovies.mockImplementation(() => Promise.resolve(moviesMock));
    });

    it('component should be rendered correctly', () => {
        const component = shallow(<DetailPage detailedMovie={detailedMovieMock} />);

        expect(component).toMatchSnapshot();
    });

    it('onPosterClick() should update state with new movies and detailedMovie', () => {
        const newDetailedMovie = {
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
        };

        const newMovies = [
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

        const component = shallow(<DetailPage detailedMovie={detailedMovieMock} />);
        const instance = component.instance();

        MovieService.getMovies.mockImplementation(() => Promise.resolve(newMovies));

        instance.onPosterClick(newDetailedMovie)
            .then(() => {
                expect(component.state('detailedMovie')).toEqual(newDetailedMovie);
                expect(component.state('movies')).toEqual(newMovies);
            });
    });
});
