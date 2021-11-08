import React from 'react';
import { connect } from 'react-redux';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from '../styles/searchStyles';

import BaseMovieSeriesCard from './cards/BaseMovieSeriesCard';
import { default as SearchButtonSet } from './cards/buttonSets/Search';
import { multiSearchMovieDB } from '../actions';

function Search(props) {
    const classes = useStyles(props);

    function keyPress(e){
        if(e.keyCode === 13){
          props.multiSearchMovieDB(e.target.value);
       }
      }

    return (
        <div>
        <div className={classes.search}>
        <div className={classes.searchIcon}>
            <SearchIcon />
        </div>
        <InputBase
            placeholder="Suche ..."
            classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onKeyDown={keyPress}
            fullWidth
        />
        </div>
        <div className={classes.root}>
            <Accordion 
                className={classes.accordion} 
                disabled={(props.result.series === undefined || props.result.series.length === 0 ) ? true : false}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Serien</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={classes.root}>
                        { !props.result.series ? '' : props.result.series.map((series) => (
                            <BaseMovieSeriesCard  
                                item={ series }
                                key={ series.tmdbId}
                                buttons={"search"}
                            />
                        ))}
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion 
                className={classes.accordion} 
                disabled={(props.result.movies === undefined || props.result.movies.length === 0 ) ? true : false}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Filme</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={classes.root}>
                        { !props.result.movies ? '' : props.result.movies.map((movie) => (
                            <BaseMovieSeriesCard  
                                item={ movie }
                                key={movie.tmdbId}
                                buttons={"search"}
                            />
                        ))}
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
    );
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


