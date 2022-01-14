const url = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

export function mapTmdbMovieToAniTrackerAPI (movie) {
    console.log(movie);
    return {
        "title": movie.title,
        "poster": movie.poster,
        "rank":	movie.rank,
        "watched": movie.watched,
        "release": movie.release,
        "genres": movie.genres,
        "lists": movie.lists,
        "tags": movie.tags,
        "flatrate": movie.flatrate,
        "tmdbId": movie.tmdbId.toString(),
    }
}

export function mapTmdbSeasonToAniTrackerAPI (series) {
    const poster = url + series.poster_path;
    //TODO: model von API angucken und kopieren
    return {
        "title": series.name,
        "poster": poster,
        "tmdbId": series.id,
        "release": series.first_air_date,
        "numberOfSeasons": series.numberOfSeasons,
        "numberOfEpisodes": series.numberOfEpisodes,
        "lists": series.lists,
        "tags": series.tags,
    }
}