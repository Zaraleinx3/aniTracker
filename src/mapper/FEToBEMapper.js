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

export function mapTmdbSeasonToAniTrackerAPI (season) {
    const poster = url + season.poster_path;
    //TODO: model von API angucken und kopieren
    return {
        "tmdbId": season.tmdbId.toString(),
        "title": season.name,
        "poster": poster,
        "release": season.first_air_date,
        "numberOfSeasons": season.numberOfSeasons,
        "numberOfEpisodes": season.numberOfEpisodes,
        "lists": season.lists,
        "tags": season.tags,
    }
}