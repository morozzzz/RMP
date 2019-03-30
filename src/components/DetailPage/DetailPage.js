import React from 'react';
import MovieList from '../MovieList/MovieList';
import StatusBar from '../StatusBar/StatusBar';
import DetailMovieBlock from '../DetailMovieBlock/DetailMovieBlock';
import Footer from '../Footer/Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MovieService from '../../services/MovieService';
import '@babel/polyfill';
import './DetailPage.css';

const getStatus = (text) => {
    if (!text) {
        return '';
    }

    return `Films by ${text.charAt(0).toUpperCase() + text.slice(1)} genre`;
};

class DetailPage extends React.Component {
    constructor({ detailedMovie }) {
        super();
        this.state = {
            detailedMovie: detailedMovie || {
                id: '',
                title: '',
                tagline: '',
                vote_average: '',
                vote_count: '',
                release_date: '',
                poster_path: '',
                overview: '',
                budget: '',
                revenue: '',
                genres: [''],
                runtime: '',
            },
            movies: [],
        };
    }

    onPosterClick = async (data) => {
        const movies = await MovieService.getMovies(data.genres[0]);
        this.setState({ movies, detailedMovie: data });
    }

    componentDidMount = () => {
        const { detailedMovie } = this.state;
        const genre = detailedMovie && detailedMovie.genres[0];

        MovieService.getMovies({ genre })
            .then((movies) => {
                this.setState({ movies });
            });
    }

    render() {
        const { movies, detailedMovie } = this.state;
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

export default DetailPage;
