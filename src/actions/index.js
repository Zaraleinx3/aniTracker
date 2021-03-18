import * as types from "./actionTypes";
import tmdbApi from "../middleware/tmdbApi";

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