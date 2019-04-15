import React from 'react';
import { connect } from 'react-redux';
import MovieList from '../../components/MovieList/MovieList';
import StatusBar from '../../components/StatusBar/StatusBar';
import DetailMovieBlock from '../../components/DetailMovieBlock/DetailMovieBlock';
import Footer from '../../components/Footer/Footer';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import {
    fetchRalatedMovies,
    setDetailedMovie,
} from '../../actions/movies.actions';
import '@babel/polyfill';
import './DetailPage.css';

const getStatus = (text) => {
    if (!text) {
        return '';
    }

    return `Films by ${text.charAt(0).toUpperCase() + text.slice(1)} genre`;
};

class DetailPage extends React.Component {
    onPosterClick = async (data) => {
        const { getRelatedMovies, storeDetailedMovie } = this.props;
        const { genres } = data;

        storeDetailedMovie(data);
        getRelatedMovies({ genres });
    }

    componentDidMount = () => {
        const { getRelatedMovies, detailedMovie } = this.props;
        const { genres } = detailedMovie.genres;

        getRelatedMovies({ genres });
    }

    render() {
        const { movies, detailedMovie } = this.props;
        const singleGenre = detailedMovie.genres[0];

        return (
            <ErrorBoundary>
                <div className="detail-page">
                    <DetailMovieBlock movieData={detailedMovie} />
                    <StatusBar status={getStatus(singleGenre)} />
                    <MovieList movies={movies} onItemClick={this.onPosterClick} />
                    <Footer />
                </div>
            </ErrorBoundary>
        );
    }
}

const mapStateToProps = state => (
    {
        detailedMovie: state.movies.detailed,
        movies: state.movies.related,
    }
);

const mapDispatchToProps = dispatch => (
    {
        getRelatedMovies: options => dispatch(fetchRalatedMovies(options)),
        storeDetailedMovie: data => dispatch(setDetailedMovie(data)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
