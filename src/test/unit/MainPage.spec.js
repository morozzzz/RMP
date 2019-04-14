import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../../components/MainPage/MainPage';
import MovieService from '../../services/MovieService';
import '@babel/polyfill';

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

jest.mock('../../services/MovieService');
jest.mock('../../components/TopMenu/TopMenu', () => () => <div id="TopMenu" />);
jest.mock('../../components/MovieList/MovieList', () => () => <div id="MovieList" />);
jest.mock('../../components/StatusBar/StatusBar', () => () => <div id="StatusBar" />);
jest.mock('../../components/SortPanel/SortPanel', () => () => <div id="SortPanel" />);
jest.mock('../../components/Footer/Footer', () => () => <div id="Footer" />);
jest.mock('../../components/ErrorBoundary/ErrorBoundary', () => () => <div id="ErrorBoundary" />);

describe.skip('MainPage', () => {
    beforeEach(() => {
        MovieService.getMovies.mockImplementation(() => Promise.resolve(moviesMock));
    });

    it('should be rendered correctly', () => {
        const wrapper = shallow(<MainPage />);

        expect(wrapper).toMatchSnapshot();
    });

    it('componentDidMount() should set state with movies', () => {
        const wrapper = shallow(<MainPage />);
        const instance = wrapper.instance();

        instance.componentDidMount()
            .then(() => {
                expect(wrapper.state().movies).toEqual(moviesMock);
            });
    });

    it('updateMovies() should set state with new movies', () => {
        const newMovies = [
            {
                id: 181808,
                title: 'Star Wars: The Last Jedi',
                tagline: 'The Saga Continues',
                vote_average: 7.1,
                vote_count: 4732,
                release_date: '2017-12-13',
                poster_path: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
                overview: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
                budget: 200000000,
                revenue: 1325937250,
                genres: [
                    'Fantasy',
                    'Adventure',
                    'Science Fiction',
                ],
                runtime: 152,
            },
        ];

        MovieService.getMovies.mockImplementation(() => Promise.resolve(newMovies));

        const wrapper = shallow(<MainPage />);
        const instance = wrapper.instance();

        instance.updateMovies()
            .then(() => {
                expect(wrapper.state().movies).toEqual(newMovies);
            });
    });
});
