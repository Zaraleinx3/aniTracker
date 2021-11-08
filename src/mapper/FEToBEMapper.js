const url = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

export function saveMovieToAniTrackerMovie (movie) {
    const poster = url + movie.poster_path;
    return {
        "title": movie.title,
        "poster": poster,
        "tmdbId": movie.id,
        "release": movie.release_date,
        "lists": movie.lists,
        "tags": movie.tags,
    }
}

export function saveSeriesToAniTrackerMovie (series) {
    const poster = url + series.poster_path;
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