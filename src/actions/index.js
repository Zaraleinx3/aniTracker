import * as types from './actionTypes';
import tmdbApi from '../middleware/tmdbApi';
import aniTrackerApi from '../middleware/aniTrackerApi';
import * as aniTrackerMapper from '../mapper/aniTrackerMapper';
// import objectMapper from 'object-mapper';

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
        tmdbApi.GetMovieWatchProvider(clickedMovie.id)
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
        tmdbApi.GetSeriesWatchProvider(clickedSeries.id)
        .then(data => {
            const flatrate = data.results.DE ? data.results.DE.flatrate : [];
            const result = {
                ...clickedSeries, 
                flatrate: flatrate ? flatrate : [],
            }
            tmdbApi.GetEpisodesAndSeasons(clickedSeries.id)
            .then(details => {
                const detailsResult = { 
                    ...result, 
                    genres: details.genres,
                    numberOfSeasons: details.number_of_seasons,
                    numberOfEpisodes: details.number_of_episodes,
                    seasons: details.seasons,
                }
                dispatch(seriesModalIsLoaded(detailsResult));
            })                
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
                movies: data.results.filter(item => item.media_type === 'movie'),
                series: data.results.filter(item => item.media_type === 'tv')
            }

            dispatch(searchIsLoaded(result));
        })    
    } else {
        console.log('SearchValue is empty')
        //TODO: Toast
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
        const mappedMovie = aniTrackerMapper.saveMovieToAniTrackerMovie(movie);
        aniTrackerApi.SaveMovie(mappedMovie)
        .then(data => {
            console.log(data)
            dispatch(movieIsSaved(data));
        })    
    } else {
        console.log('Movie is empty')
        //TODO: Toast
    }
}