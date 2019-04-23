import React from 'react';
import { connect } from 'react-redux';
import MovieList from '../../components/MovieList/MovieList';
import StatusBar from '../../components/StatusBar/StatusBar';
import DetailMovieBlock from '../../components/DetailMovieBlock/DetailMovieBlock';
import Footer from '../../components/Footer/Footer';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import { fetchDetailedMovie } from '../../actions/movies.actions';
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
        const { getDetailedMovie, history } = this.props;

        history.push(`/film/${data.id}`);

        getDetailedMovie(data.id);
    }

    componentDidMount = () => {
        const { getDetailedMovie, match } = this.props;
        const { params } = match;
        const movieId = params.id;

        getDetailedMovie(movieId);
    }

    render() {
        const { movies, detailedMovie } = this.props;
        const singleGenre = detailedMovie && detailedMovie.genres && detailedMovie.genres[0];

        return (
            <ErrorBoundary>
                <div className="detail-page">
                    <DetailMovieBlock movieData={detailedMovie} />
                    <StatusBar status={getStatus(singleGenre)} />
                    {
                        detailedMovie
                            ? <MovieList movies={movies} onItemClick={this.onPosterClick} />
                            : <div />
                    }
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
        getDetailedMovie: id => dispatch(fetchDetailedMovie(id)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
