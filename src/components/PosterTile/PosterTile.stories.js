import React from 'react';
import { storiesOf } from '@storybook/react';
import PosterTile from './PosterTile';

const data = {
    poster_path: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    title: 'AVENGERS: INFINITY WAR',
    genres: ['Adventure', 'Science Fiction', 'Fantasy', 'Action'],
    release_date: '2018',
};

storiesOf('Poster Tile', module)
    .add('Default', () => (
        <div style={{ width: '300px' }}>
            <PosterTile data={data} />
        </div>
    ));
