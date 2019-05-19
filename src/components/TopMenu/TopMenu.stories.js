import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import configureStore from '../../configureStore';
import TopMenu from './TopMenu';


const store = configureStore();

storiesOf('Top Menu', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('Default', () => (
        <TopMenu />
    ));
