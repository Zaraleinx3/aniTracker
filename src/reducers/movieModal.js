import {
  MOVIE_MODAL_OPEN,
  MOVIE_MODAL_CLOSE,
  MOVIE_MODAL_IS_LOADED,
} from "../actions/actionTypes";

const defaultState = {
  isLoading: false,
  open: false,
  payload: {},
};

export const movieModal = (state = defaultState, action) => {
  switch (action.type) {
    case MOVIE_MODAL_OPEN:
      return {
        ...state,
        isLoading: true,
        open: true,
      };
    case MOVIE_MODAL_CLOSE:
      return {
        ...state,
        isLoading: false,
        open: false,
        payload: {},
      };
    case MOVIE_MODAL_IS_LOADED:
      return {
        ...state,
        isLoading: false,
        payload: action.result,
      };
    default:
      return state;
  }
};
