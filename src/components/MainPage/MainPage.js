import React from 'react';
import { connect } from 'react-redux';
import TopMenu from '../TopMenu/TopMenu';
import MovieList from '../MovieList/MovieList';
import StatusBar from '../StatusBar/StatusBar';
import SortPanel from '../SortPanel/SortPanel';
import Footer from '../Footer/Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { fetchMovies } from '../../actions/movies.actions';
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

    onPosterClick = () => {
        // go to detail page
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
        getMovies: options => dispatch(fetchMovies(options)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
