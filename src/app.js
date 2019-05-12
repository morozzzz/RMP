import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import MainPage from './containers/MainPage/MainPage';
import DetailPage from './containers/DetailPage/DetailPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import './app.css';

// eslint-disable-next-line object-curly-newline
const App = ({ Router, location, context, store }) => (
    <Provider store={store}>
        <Router location={location} context={context}>
            <Switch>
                <Route path="/film/:id" component={DetailPage} />
                <Route path="/search" component={MainPage} />
                <Route exact path="/" component={MainPage} />
                <Route path="" component={NotFoundPage} />
            </Switch>
        </Router>
    </Provider>
);

export default hot(module)(App);
