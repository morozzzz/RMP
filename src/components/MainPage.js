import React from 'react';
import TopMenu from './TopMenu';
import MovieList from './MovieList';
// import Footer from './Footer';


class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [1],
        };
    }

    render() {
        const { movies } = this.state;
        return (
            <div className="main-page">
                <TopMenu />
                <MovieList movies={movies} />
            </div>
        );
    }
}

export default MainPage;
