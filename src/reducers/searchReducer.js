import { SEARCH_IS_LOADING, SEARCH_IS_LOADED } from '../actions/actionTypes';

const defaultState = {
    isLoading: false,
    searchResult: [],
}

export const search = (state = defaultState, action) => {
    switch(action.type){
        case SEARCH_IS_LOADING: 
            console.log("SEARCH_IS_LOADING")
            let newState = { ...state, isLoading: true }
            console.log(state)
            return newState;
        case SEARCH_IS_LOADED:
            console.log(action)
            console.log("SEARCH_IS_LOADED")
            return {
                ...state, 
                isLoading: false,
                searchResult: action.result
            }
        default: 
            return state;
    }
}