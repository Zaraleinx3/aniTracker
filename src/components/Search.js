import React from 'react';
import { connect } from 'react-redux';
import { fade, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import BaseMovieCard from './cards/BaseMovieCard';
import { default as SearchButtonSet } from './cards/buttonSets/Search';
import { multiSearchMovieDB } from '../actions';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    accordion: {
        backgroundColor: '#212326',
        marginBottom: '18px',
    },
    search: {
        // for search icon
        position: 'relative',
        marginBottom: '20px',
        borderRadius: theme.shape.borderRadius,
        // TODO: color change
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
      },
  }));

function Search(props) {
    const classes = useStyles();

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
                            <BaseMovieCard  
                                item={ series }
                                key={ series.id}
                            buttons={<SearchButtonSet />}
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
                            <BaseMovieCard  
                                item={ movie }
                                key={movie.id}
                            buttons={<SearchButtonSet />}
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


