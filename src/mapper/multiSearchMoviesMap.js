var map = {
  title: "title",
  tmdbId: "id",
  cover: {
    key: "poster_path",
    transform: function (poster_path) {
      return "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + poster_path;
    },
  },
  description: "overview",
  releaseDate: "release_date",
};

export default map;
