import React from 'react';
import TopMenu from './TopMenu';
import MovieList from './MovieList';
// import Footer from './Footer';


class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [
                {
                    title: 'sdfsdf sdfsdffsdf',
                    imageURL: 'https://m.media-amazon.com/images/M/MV5BMTQ2NzYxNjQyMF5BMl5BanBnXkFtZTcwOTQ0OTI0Mw@@._V1_.jpg',
                    genre: 'sfs sdfsdf',
                    year: '1555',
                    id: 1,
                },
                {
                    title: 'sdfsdf sdfsdffsdf',
                    imageURL: 'https://m.media-amazon.com/images/M/MV5BMTQ2NzYxNjQyMF5BMl5BanBnXkFtZTcwOTQ0OTI0Mw@@._V1_.jpg',
                    genre: 'sfs sdfsdf',
                    year: '1555',
                    id: 2,
                },
                {
                    title: 'sdfsdf sdfsdffsdf',
                    imageURL: 'https://m.media-amazon.com/images/M/MV5BMTQ2NzYxNjQyMF5BMl5BanBnXkFtZTcwOTQ0OTI0Mw@@._V1_.jpg',
                    genre: 'sfs sdfsdf',
                    year: '1555',
                    id: 3,
                },
                {
                    title: 'sdfsdf sdfsdffsdf',
                    imageURL: 'https://m.media-amazon.com/images/M/MV5BMTQ2NzYxNjQyMF5BMl5BanBnXkFtZTcwOTQ0OTI0Mw@@._V1_.jpg',
                    genre: 'sfs sdfsdf',
                    year: '1555',
                    id: 4,
                },
            ],
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
