import React from 'react';
import TopMenu from '../TopMenu/TopMenu';
import MovieList from '../MovieList/MovieList';
import StatusBar from '../StatusBar/StatusBar';
import SortPanel from '../SortPanel/SortPanel';
import Footer from '../Footer/Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './MainPage.css';

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
        };
    }

    onPosterClick = () => {
        console.log(123);
    }

    render() {
        const { movies } = this.state;
        return (
            <ErrorBoundary>
                <div className="main-page">
                    <TopMenu />
                    <StatusBar status={movies.length ? `${movies.length} movies found` : ''}>
                        {
                            movies.length ? <SortPanel /> : null
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
