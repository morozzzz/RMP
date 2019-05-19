// @flow

import React from 'react';
import withStyles from 'react-jss';
import Logo from '../Logo/Logo';

type detailMovieBlockProps = {
    movieData: Object,
    onSearchClick: Function
};

const backgroundImgUrl = '../../assets/background_main.jpg';

const styles = {
    // .detail-block
    detailBlockClass: {
        width: '100%',
        background: `url(${backgroundImgUrl})`,
        backgroundSize: 'cover',
    },
    // .detail-block__overlay
    detailBlockOverlayClass: {
        backgroundColor: 'rgba(0, 0, 0, 0.781)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    // .detail-block__top-bar
    detailBlockTopBarClass: {
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.8em 0',
    },
    // .detail-block__search-button
    detailBlockSearchButtonClass: {
        outline: 'none',
        background: 'rgb(66, 66, 66)',
        border: 'none',
        color: 'rgb(248, 129, 129)',
        fontWeight: 'bold',
        height: '2em',
        width: '5em',
        cursor: 'pointer',
    },
    // .detail-block__content
    detailBlockContentClass: {
        maxWidth: '1080px',
        width: '40%',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '1em auto',
    },
    // .detail-block__image-container
    detailBlockImageContainerClass: {
        width: '35%',
    },
    // .detail-block__image
    detailBlockImageClass: {
        width: '100%',
    },
    // .detail-block__info
    detailBlockInfoClass: {
        width: '55%',
        color: 'white',
    },
    // .detail-block__primary-data
    detailBlockPrimaryDataClass: {
        display: 'flex',
        alignItems: 'center',
        margin: '0.4em 0',
    },
    // .detail-block__title
    detailBlockTitleClass: {
        fontSize: '2em',
        color: 'rgb(248, 129, 129)',
    },
    // .detail-block__additional
    detailBlockAdditionalClass: {
        margin: '0.2em 0',
    },
    // .detail-block__rating
    detailBlockRatingClass: {
        fontSize: '1.3em',
        border: '0.05em solid rgb(185, 250, 132)',
        padding: '0.2em',
        borderRadius: '50%',
        color: 'rgb(185, 250, 132)',
        marginLeft: '1em',
        minWidth: '1.2em',
        minHeight: '1.2em',
        textAlign: 'center',
    },
    // .detail-block__secondary-data
    detailBlockSecondaryDataClass: {
        margin: '0.8em 0',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        fontWeight: 'bold',
    },
    // .detail-block__description
    detailBlockDescriptionClass: {
        margin: '1em 0',
        lineHeight: '1.25em',
    },
};

const DetailMovieBlock = (props: detailMovieBlockProps) => {
    const {
        movieData: {
            title,
            release_date,
            runtime,
            vote_average,
            tagline,
            poster_path,
            overview,
        },
        onSearchClick,
        classes,
    } = props;

    return (
        <div className={classes.detailBlockClass}>
            <div className={classes.detailBlockOverlayClass}>
                <div className={classes.detailBlockTopBarClass}>
                    <Logo name="netflixroulettee" redirectUrl="" />
                    <button onClick={onSearchClick} type="button" className={classes.detailBlockSearchButtonClass}>SEARCH</button>
                </div>
                {
                    title ? (
                        <div className={classes.detailBlockContentClass}>
                            <div className={classes.detailBlockImageContainerClass}>
                                <img className={classes.detailBlockImageClass} src={poster_path} alt="poster" />
                            </div>
                            <div className={classes.detailBlockInfoClass}>
                                <div className={classes.detailBlockPrimaryDataClass}>
                                    <div className={classes.detailBlockTitleClass}>{title}</div>
                                    <div className={classes.detailBlockRatingClass}>
                                        {vote_average}
                                    </div>
                                </div>
                                <div className={classes.detailBlockAdditionalClass}>{tagline}</div>
                                <div className={classes.detailBlockSecondaryDataClass}>
                                    <div>{release_date}</div>
                                    <div>{`${runtime} min`}</div>
                                </div>
                                <div className={classes.detailBlockDescriptionClass}>
                                    {overview}
                                </div>
                            </div>
                        </div>
                    )
                        : null
                }
            </div>
        </div>
    );
};

export default withStyles(styles)(DetailMovieBlock);
