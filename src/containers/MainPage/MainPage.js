import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import TopMenu from '../../components/TopMenu/TopMenu';
import MovieList from '../../components/MovieList/MovieList';
import StatusBar from '../../components/StatusBar/StatusBar';
import SortPanel from '../SortPanel/SortPanel';
import Footer from '../../components/Footer/Footer';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import {
    fetchMoviesByCriteria,
} from '../../actions/movies.actions';
import './MainPage.css';

class MainPage extends React.Component {
    constructor(props) {
        super();
        this.getMovies = props.getMovies.bind(this);
    }

    componentDidMount = () => {
        const { location } = this.props;
        const { search } = location;

        if (!search) return;

        const searchParams = queryString.parse(search);

        this.getMovies(searchParams);
    }

    onPosterClick = (data) => {
        const { history } = this.props;

        history.push(`/film/${data.id}`);
    }

    updateMovies = () => {
        const { searchParams, history } = this.props;

        const query = queryString.stringify(searchParams);

        console.log(query);


        const query2 = Object.keys(searchParams)
            .map(param => `${param}=${searchParams[param]}&`)
            .join('')
            .slice(0, -1);

        console.log(query2);


        history.push(`/search/?${query}`);

        this.getMovies(query2);
    }

    render() {
        const { movies, isMoviesFound } = this.props;

        return (
            <ErrorBoundary>
                <div className="main-page">
                    <TopMenu onSearchClick={this.updateMovies} />
                    <StatusBar status={isMoviesFound ? `${movies.length} movies found` : ''}>
                        {
                            isMoviesFound ? <SortPanel onSortUpdate={this.updateMovies} /> : null
                        }
                    </StatusBar>
                    {
                        typeof isMoviesFound === 'boolean' ? <MovieList movies={movies} onItemClick={this.onPosterClick} /> : <div />
                    }
                    <Footer />
                </div>
            </ErrorBoundary>
        );
    }
}

const mapStateToProps = state => (
    {
        movies: state.movies.general,
        searchParams: state.searchParams,
        isMoviesFound: state.movies.isMoviesFound,
    }
);

const mapDispatchToProps = dispatch => (
    {
        getMovies: options => dispatch(fetchMoviesByCriteria(options)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
