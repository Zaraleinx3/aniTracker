import objectMapper from 'object-mapper';

const posterBase = process.env.REACT_APP_POSTER_BASE;

export function multiSearchMoviesMapper(movies) {
    let mappedMovies = [];
    let mapProfile = {
        "poster_path": {
            key: "poster",
            transform: function (poster) { 
              return posterBase + poster;
            }
          },
        "overview": "overview",
        "release_date": "release", // TODO: Eventuell anpassen an API
        "id": "tmdbId",
        "media_type": "mediaType",
        "title": "title",
    }

    movies.map((movieItem) => 
       mappedMovies.push(objectMapper(movieItem,mapProfile))
    )

    return mappedMovies;
    
}

export function multiSearchSeriesMapper(series) {
    let mappedSeries = [];
    let mapProfile = {
        "poster_path": {
            key: "poster",
            transform: function (poster) { 
              return posterBase + poster;
            }
          },
      "id": "tmdbId",
      "overview": "overview",
      "media_type": "mediaType",
      "name": "title",
    }

    series.map((seriesItem) => 
       mappedSeries.push(objectMapper(seriesItem,mapProfile))
    )

    return mappedSeries;
}
