import * as types from './actionTypes';
import tmdbApi from '../middleware/tmdbApi';
import aniTrackerApi from '../middleware/aniTrackerApi';
import * as FEToBEMapper from '../mapper/FEToBEMapper';
import * as tmdbToFeMapper from '../mapper/TmdbToFEMapper';

import * as toast from '../helper/toast';

// **************************** Movie Modal Actions ***********************

export const movieModalOpen = () => ({
    type: types.MOVIE_MODAL_OPEN,
});

export const movieModalClose = () => ({
    type: types.MOVIE_MODAL_CLOSE,
});

export const movieModalIsLoaded = (result) => ({
    type: types.MOVIE_MODAL_IS_LOADED,
    result,
});

export const openMovieModal = (clickedMovie) => (dispatch) => {
    if(clickedMovie){
        dispatch(movieModalOpen());
        tmdbApi.GetMovieWatchProvider(clickedMovie.tmdbId)
        .then(data => {
            const flatrate = data.results.DE ? data.results.DE.flatrate : [];
            const result = {
                ...clickedMovie, 
                flatrate: flatrate ? flatrate : [],
            }
            dispatch(movieModalIsLoaded(result))
        })
    } else {
        console.log('clickedMovie is empty')
        //TODO: Toast
    }
}

// **************************** Series Modal Actions ***********************

export const seriesModalOpen = () => ({
    type: types.SERIES_MODAL_OPEN,
});

export const seriesModalClose = () => ({
    type: types.SERIES_MODAL_CLOSE,
});

export const seriesModalIsLoaded = (result) => ({
    type: types.SERIES_MODAL_IS_LOADED,
    result,
});

export const openSeriesModal = (clickedSeries) => (dispatch) => {
    if(clickedSeries){
        dispatch(seriesModalOpen());
        tmdbApi.GetSeriesInfo(clickedSeries.tmdbId)
        .then(data => {
            const flatrate = data.provider.DE ? data.provider.DE.flatrate : [];
            const result = {
                ...clickedSeries, 
                flatrate: flatrate ? flatrate : [],
                genres: data.episodesAndSeasons.genres,
                numberOfSeasons: data.episodesAndSeasons.number_of_seasons,
                numberOfEpisodes: data.episodesAndSeasons.number_of_episodes,
                seasons: data.episodesAndSeasons.seasons,
            }
            dispatch(seriesModalIsLoaded(result));              
        })
    } else {
        console.log('clickedSerie is empty')
        //TODO: Toast
    }
}

// **************************** Search Actions ****************************

export const searchIsLoading = () => ({
    type: types.SEARCH_IS_LOADING,
})

export const searchIsLoaded = (result) => ({
    type: types.SEARCH_IS_LOADED,
    result,
})

export const multiSearchMovieDB = (searchValue) => (dispatch) => {
    if(searchValue){
        dispatch(searchIsLoading());

        tmdbApi.MultiSearch(searchValue)
        .then(data => {
            const result = {
                movies: tmdbToFeMapper.multiSearchMoviesMapper(data.movies.results),
                series: tmdbToFeMapper.multiSearchSeriesMapper(data.series.results)
            }
            result.movies = result.movies.map(mov => ({ ...mov, type: 'Movie' }))
            result.series = result.series.map(tv => ({ ...tv, type: 'Series' }))
            dispatch(searchIsLoaded(result));
        })
        .catch(err => {
            toast.error(err);
        }) 
    } else {
        toast.warn("Bitte gib einen Suchbegriff ein.");
    }
}

// **************************** AniTracker Actions ****************************

export const movieIsSaving = () => ({
    type: types.MOVIE_IS_SAVING,
});

export const movieIsSaved = () => ({
    type: types.MOVIE_IS_SAVED,
});

export const saveMovie = (movie) => (dispatch) => {
    if(movie){
        dispatch(movieIsSaving());
        const mappedMovie = FEToBEMapper.mapTmdbMovieToAniTrackerAPI(movie);
        aniTrackerApi.SaveMovie(mappedMovie)
        .then(data => {
            let list = movie.lists.at(-1);
            let message = `${movie.title} wurde erfolgreich auf ${list} gesetzt.`;
            toast.success(message);
            dispatch(movieIsSaved(data));
        })
        .catch(err => {
            switch(err.response.status) {
                case 409:
                    toast.warn(`${movie.title} existiert bereits.`); 
                    break;
                default:  
                    toast.error('Beim speichern ist ein Fehler aufgetreten.');
            }
        })    
    } else {
        let message = 'Es wurde kein Film ausgewählt.';
        toast.error(message);
    }
}

export const listIsLoading = () => ({
    type: types.LIST_IS_LOADING,
});

export const listIsLoaded = (list) => ({
    type: types.LIST_IS_LOADED,
    payload: list,
});

export const getList = (list) => (dispatch) => {
    if(list) {
        dispatch(listIsLoading());
        aniTrackerApi.GetAllbyList(list) 
        .then(data => {
            console.log(data);
            dispatch(listIsLoaded(data));
        })
    } else {
        console.log('List is empty')
        //TODO: Toast
    }
}