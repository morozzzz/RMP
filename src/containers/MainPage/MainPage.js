import React from 'react';
import { connect } from 'react-redux';
import TopMenu from '../../components/TopMenu/TopMenu';
import MovieList from '../../components/MovieList/MovieList';
import StatusBar from '../../components/StatusBar/StatusBar';
import SortPanel from '../SortPanel/SortPanel';
import Footer from '../../components/Footer/Footer';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import {
    fetchMoviesByCriteria,
    setDetailedMovie,
} from '../../actions/movies.actions';
import './MainPage.css';

class MainPage extends React.Component {
    constructor(props) {
        super();
        this.getMovies = props.getMovies.bind(this);
    }

    componentDidMount = () => {
        const { movies } = this.props;

        !movies.length && this.getMovies(this.searchParams);
    };

    onPosterClick = (data) => {
        const { storeDetailedMovie } = this.props;

        storeDetailedMovie(data);

        // go to DP
    }

    updateMovies = () => {
        const { searchParams } = this.props;

        this.getMovies(searchParams);
    }

    render() {
        const { movies } = this.props;

        return (
            <ErrorBoundary>
                <div className="main-page">
                    <TopMenu onSearchClick={this.updateMovies} />
                    <StatusBar status={movies.length ? `${movies.length} movies found` : ''}>
                        {
                            movies.length ? <SortPanel onSortUpdate={this.updateMovies} /> : null
                        }
                    </StatusBar>
                    <MovieList movies={movies} onItemClick={this.onPosterClick} />
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
    }
);

const mapDispatchToProps = dispatch => (
    {
        getMovies: options => dispatch(fetchMoviesByCriteria(options)),
        storeDetailedMovie: data => dispatch(setDetailedMovie(data)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
