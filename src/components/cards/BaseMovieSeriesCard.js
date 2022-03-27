import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";

import { AtCard } from "./BaseMovieSeriesCard.overrides";

import { openMovieModal, openSeriesModal, saveMovie } from "../../actions";
import { default as SearchButtonSet } from "../cards/buttonSets/Search";

const BaseMovieSeriesCard = (props) => {
  const { poster, title, type } = props.item;

  const openModal = (props) => {
    if (props.item.type === "Series") {
      props.openSeriesModal(props.item);
    } else {
      props.openMovieModal(props.item);
    }
  };

  const renderButtonSet = () => {
    switch (props.buttons) {
      case "search":
        return <SearchButtonSet saveItem={saveItem} />;
      case "list":
        return "";
      default:
        return "";
    }
  };

  const saveItem = (list) => {
    var lists = [list];
    props.item.lists = lists;

    if (type === "Series") {
      //TODO: saveSeries
      console.log(list);
    } else {
      props.saveMovie(props.item);
    }
  };

  return (
    <AtCard>
      <CardActionArea onClick={() => openModal(props)}>
        <CardMedia
          component="img"
          alt={title}
          height="300"
          image={poster}
          title={title}
        />
      </CardActionArea>
      {renderButtonSet()}
    </AtCard>
  );
};

BaseMovieSeriesCard.propTypes = {
  item: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    lists: PropTypes.array.isRequired,
  }),
  buttons: PropTypes.string.isRequired,
  openSeriesModal: PropTypes.func.isRequired,
  openMovieModal: PropTypes.func.isRequired,
  saveMovie: PropTypes.func,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  openMovieModal: (movie) => dispatch(openMovieModal(movie)),
  openSeriesModal: (series) => dispatch(openSeriesModal(series)),
  saveMovie: (movie) => dispatch(saveMovie(movie)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseMovieSeriesCard);
