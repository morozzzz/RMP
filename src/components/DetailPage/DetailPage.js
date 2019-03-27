import React from 'react';
import MovieList from '../MovieList/MovieList';
import StatusBar from '../StatusBar/StatusBar';
import DetailMovieBlock from '../DetailMovieBlock/DetailMovieBlock';
import Footer from '../Footer/Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './DetailPage.css';

class DetailPage extends React.Component {
    constructor() {
        super();
        this.state = {
            detailMovie: {
                title: 'sfsdsd sdsdsdsd',
                year: '4554',
                duration: '156',
                rating: '5.5',
                additional: 'sdsdsdsd edfdfdfdfdfd fdf',
                imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTQ2NzYxNjQyMF5BMl5BanBnXkFtZTcwOTQ0OTI0Mw@@._V1_.jpg',
                description: 'dfdsgfdsgfs sfdighsi fdifgihf fihgif hgifhg ifhgif ghifhgi fhgifhgif goifhgifpo gfihgpifhg pifhpif ifhgpif ifhgif f hifhgifhg ifhg ifh gpihspdgjspjhgso[djgsd go[hgifhg ifhgif ghifhgi fhgifhgif goifhgifpo gfihgpifhg pifhpif ifhgpif ifhgif f hifhgifhg ifhg ifh gpihspdgjspjhgso[djgsd go[s jdgsodjg osdjg[s jfdgpo[sfjg[s djgdsgo[ds ',
            },
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
            genre: 'drama',
        };
    }

    onPosterClick = () => {
        console.log(123);
    }

    render() {
        const { movies, genre, detailMovie } = this.state;
        return (
            <ErrorBoundary>
                <div className="detail-page">
                    <DetailMovieBlock data={detailMovie} />
                    <StatusBar status={`Films by ${genre.charAt(0).toUpperCase() + genre.slice(1)} genre`} />
                    <MovieList movies={movies} onItemClick={this.onPosterClick} />
                    <Footer />
                </div>
            </ErrorBoundary>
        );
    }
}

export default DetailPage;
