import React from 'react';
import { shallow } from 'enzyme';
import PosterTile from '../../components/PosterTile/PosterTile';

let selectionType;

const movieData = {
    title: 'Some title',
    release_date: '2002',
    poster_path: 'http://some_url',
    genres: [
        'Action',
        'Adventure',
    ],
};

const onTileClickMock = jest.fn();

global.getSelection = () => ({
    type: selectionType,
});

describe('PosterTile', () => {
    beforeEach(() => {
        onTileClickMock.mockClear();
    });

    it('should be rendered correctly', () => {
        const component = shallow(<PosterTile data={movieData} onTileClick={onTileClickMock} />);

        expect(component).toMatchSnapshot();
    });

    it('click on poster tile should invoke props.onTileClick() with right args', () => {
        const component = shallow(<PosterTile data={movieData} onTileClick={onTileClickMock} />);

        selectionType = 'None';

        component.simulate('click');

        expect(onTileClickMock).toHaveBeenCalledWith(movieData);
    });

    it('selection on poster tile should not invoke props.onTileClick()', () => {
        const component = shallow(<PosterTile data={movieData} onTileClick={onTileClickMock} />);

        selectionType = 'Range';

        component.simulate('click');

        expect(onTileClickMock).not.toBeCalled();
    });
});
