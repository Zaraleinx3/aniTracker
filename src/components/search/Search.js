import React from 'react';
import { connect } from 'react-redux';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { AtAccordion, AtAccordionDetails, AtAccordionSummary } from './Search.overrides';

import BaseMovieSeriesCard from './../cards/BaseMovieSeriesCard';
import { multiSearchMovieDB } from '../../actions';

const Search = (props) => {
    const [expanded, setExpanded] = React.useState();

    const handleAccordionChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const keyPress = (e) => {
        if (e.keyCode === 13) {
            props.multiSearchMovieDB(e.target.value);
        }
    };

    return (
        <section>
            <Paper
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'Search'}}
                    onKeyDown={keyPress}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>

            <AtAccordion expanded={expanded === 'series'} onChange={handleAccordionChange('series')}>
                <AtAccordionSummary aria-controls="series-content" id="searchSeriesAccordion">
                   Series 
                </AtAccordionSummary>
                <AtAccordionDetails>
                    {!props.result.series ? '' : props.result.series.map((series) => (
                        <BaseMovieSeriesCard
                            item={series}
                            key={series.tmdbId}
                            buttons={"search"}
                        />
                    ))}
                </AtAccordionDetails>
            </AtAccordion>
            <AtAccordion expanded={expanded === 'movies'} onChange={handleAccordionChange('movies')}>
                <AtAccordionSummary aria-controls="movies-content" id="searchMoviesAccordion">
                    Movies
                </AtAccordionSummary>
                <AtAccordionDetails>
                    {!props.result.movies ? '' : props.result.movies.map((movie) => (
                        <BaseMovieSeriesCard
                            item={movie}
                            key={movie.tmdbId}
                            buttons={"search"}
                        />
                    ))}
                </AtAccordionDetails>
            </AtAccordion>

        </section >
    )
}

const mapStateToProps = (state) => ({
    result: state.search.searchResult
})

const mapDispatchToProps = (dispatch) => ({
    multiSearchMovieDB: (searchValue) => dispatch(multiSearchMovieDB(searchValue))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);