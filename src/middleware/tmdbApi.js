import axios from "axios";

const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;
const language = "de-DE";

var Tmdb = {};

/*
 TODOS: 
    - Error Handling => Toast?
    - Mapping => tmdb Model into our Model
 */

// First Search for movie and series
Tmdb.MultiSearchOld = (searchValue) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/multi?api_key=${TMDB_KEY}&language=${language}&query=${searchValue}&include_adult=true`
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

Tmdb.MultiSearch = (searchValue) =>
  axios
    .all([Tmdb.MoviesSearch(searchValue), Tmdb.SeriesSearch(searchValue)])
    .then(
      axios.spread((...responses) => {
        return {
          movies: responses[0],
          series: responses[1],
        };
      })
    )
    .catch((err) => {
      throw err;
    });

// Get Movies
Tmdb.MoviesSearch = (searchValue) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&language=${language}&query=${searchValue}&include_adult=true`
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

Tmdb.GetSeriesInfo = (tmdbId) =>
  axios
    .all([
      Tmdb.GetSeriesWatchProvider(tmdbId),
      Tmdb.GetEpisodesAndSeasons(tmdbId),
    ])
    .then(
      axios.spread((...responses) => {
        return {
          provider: responses[0],
          episodesAndSeasons: responses[1],
        };
      })
    )
    .catch((err) => {
      throw err;
    });

// Search for Movie Providers like Amazon, Netflix and logos
Tmdb.GetMovieWatchProvider = (movieId) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${TMDB_KEY}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

// Get Series
Tmdb.SeriesSearch = (searchValue) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/tv?api_key=${TMDB_KEY}&language=${language}&query=${searchValue}&include_adult=true`
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

// Search for Series Providers like Amazon, Netflix and logos
Tmdb.GetSeriesWatchProvider = (tvId) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/tv/${tvId}/watch/providers?api_key=${TMDB_KEY}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

// Search for Series Details
Tmdb.GetEpisodesAndSeasons = (tvId) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/tv/${tvId}?api_key=${TMDB_KEY}&language=${language}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

// Search for Episode Details
Tmdb.GetEpisodeDetails = (tvId, seasonNumber, episodeNumber) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}?api_key=${TMDB_KEY}&language=${language}`
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export default Tmdb;
