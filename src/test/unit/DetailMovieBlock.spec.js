import React from 'react';
import { shallow } from 'enzyme';
import DetailMovieBlock from '../../components/DetailMovieBlock/DetailMovieBlock';

jest.mock('../../components/Logo/Logo', () => () => <div />);

const data = {
    title: 'Some title',
    release_date: '2002',
    runtime: '156',
    vote_average: '10',
    tagline: 'Some tagline',
    poster_path: 'http://some_url',
    overview: 'Some overview',
};

describe('DetailMovieBlock', () => {
    it('should be rendered correctly', () => {
        const component = shallow(<DetailMovieBlock movieData={data} />);
        expect(component).toMatchSnapshot();
    });

    it('click on SEARCH button should call props.onSearchClick', () => {
        const onSearchClickMock = jest.fn();
        const component = shallow(
            <DetailMovieBlock movieData={data} onSearchClick={onSearchClickMock} />,
        );
        const serachButton = component.find('.detail-block__search-button');

        serachButton.simulate('click');

        expect(onSearchClickMock).toHaveBeenCalledTimes(1);
    });
});
