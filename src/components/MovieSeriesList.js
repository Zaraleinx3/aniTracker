/* eslint-disable */

import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import BaseMovieSeriesCard from "./cards/BaseMovieSeriesCard";
import { getList } from "../actions";

class MovieSeriesList extends Component {
  constructor(props) {
    super(props);
    this.props.getList(this.props.match.params.listName);
  }

  /*componentDidMount() {
        //dispatch
        this.props.getList(this.props.match.params.listName); 
    }*/

  render() {
    return (
      <div>
        <h1>{this.props.match.params.listName}</h1>
        {this.props.list === undefined
          ? "liste leer"
          : this.props.list.data === undefined
            ? "liste leer"
            : this.props.list.data.map((item) => (
              <BaseMovieSeriesCard
                item={item}
                key={item.tmdbId}
                buttons={"search"}
              />
            ))}
      </div>
    );
  }
}

MovieSeriesList.protoTypes = {
  getList: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  list: PropTypes.shape({
    data: PropTypes.array,
  }),
};

const mapStateToProps = (state) => ({
  list: state.list.currentList,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (list) => dispatch(getList(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieSeriesList);
