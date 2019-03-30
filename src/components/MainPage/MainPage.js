import React from 'react';
import TopMenu from '../TopMenu/TopMenu';
import MovieList from '../MovieList/MovieList';
import StatusBar from '../StatusBar/StatusBar';
import SortPanel from '../SortPanel/SortPanel';
import Footer from '../Footer/Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MovieService from '../../services/MovieService';
import './MainPage.css';

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
        };
    }

    componentDidMount = () => {
        const defaultCriteria = {}; // todo

        return MovieService.getMovies(defaultCriteria)
            .then((movies) => {
                this.setState({ movies });
            });
    };

    onPosterClick = () => {
        // go to detail page
    }

    updateMovies = async (criteria) => {
        const movies = await MovieService.getMovies(criteria);
        this.setState({ movies });
    }

    render() {
        const { movies } = this.state;
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

export default MainPage;
