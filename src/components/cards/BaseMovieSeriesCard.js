import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase';

import { openMovieModal, openSeriesModal, saveMovie } from '../../actions';
import { seriesModal } from '../../reducers/seriesModal';
import { default as SearchButtonSet } from '../cards/buttonSets/Search';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    float: 'left',
    marginLeft: '18px',
    marginBottom: '18px',
  },
});

function BaseMovieSeriesCard(props) {  
  const classes = useStyles();
  const url = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  
  const {poster_path, name, title, media_type} = props.item;
  const image = url + poster_path;
  const cardTitle = ( media_type === "tv") ? name : title;

  const openModal = (props) => {
    if(props.item.media_type === 'tv'){
      props.openSeriesModal(props.item)
    }
    else {
      props.openMovieModal(props.item)
    }
  }

  const renderButtonSet = () => {
    switch(props.buttons){
      case 'search': return <SearchButtonSet saveItem={saveItem}/>
      case 'list': return ''
      default: return ''
    }
  }

  const saveItem = (list) => {
    var lists = [list];
    props.item.lists = lists

    if (media_type === "tv") {
        //TODO: saveSeries
    } else {
        props.saveMovie(props.item);
    }
  }

  return (
    <Card className={`${classes.root} ${props.className}`}>
          <CardActionArea onClick={() => openModal(props)}>
              <CardMedia
                  component="img"
                  alt={cardTitle}
                  height="300"
                  image={image}
                  title={cardTitle}
              />
          </CardActionArea> 
          { renderButtonSet() }
    </Card>
  );
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  openMovieModal: (movie) => dispatch(openMovieModal(movie)),
  openSeriesModal: (series) => dispatch(openSeriesModal(series)),
  saveMovie: (movie) => dispatch(saveMovie(movie)),
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BaseMovieSeriesCard);