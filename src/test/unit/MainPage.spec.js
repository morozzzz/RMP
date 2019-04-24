import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../../containers/MainPage/MainPage';
import '@babel/polyfill';

jest.mock('../../components/TopMenu/TopMenu', () => () => <div id="TopMenu" />);
jest.mock('../../components/MovieList/MovieList', () => () => <div id="MovieList" />);
jest.mock('../../components/StatusBar/StatusBar', () => () => <div id="StatusBar" />);
jest.mock('../../containers/SortPanel/SortPanel', () => () => <div id="SortPanel" />);
jest.mock('../../components/Footer/Footer', () => () => <div id="Footer" />);
jest.mock('../../components/ErrorBoundary/ErrorBoundary', () => () => <div id="ErrorBoundary" />);
jest.mock('../../services/MovieService');
jest.mock('../../actions/movies.actions');

describe('MainPage', () => {
    it('should be rendered correctly', () => {
        const wrapper = shallow(<MainPage />);

        expect(wrapper).toMatchSnapshot();
    });
});
