import React from 'react';
import { connect } from 'react-redux';
import TopMenu from '../TopMenu/TopMenu';
import MovieList from '../MovieList/MovieList';
import StatusBar from '../StatusBar/StatusBar';
import SortPanel from '../SortPanel/SortPanel';
import Footer from '../Footer/Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { fetchMovies } from '../../actions/mainPage.actions';
import './MainPage.css';

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
        };
    }

    componentDidMount = () => {
        console.log(3);
        
        fetchMovies();
    };

    onPosterClick = () => {
        // go to detail page
    }

    updateMovies = async (criteria) => {
        
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

const mapStateToProps = state => (
    {
        movies: state.mainPage.movies,
    }
);

const mapDi

export default connect(mapStateToProps)(MainPage);
