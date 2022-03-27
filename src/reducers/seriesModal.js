import {
  SERIES_MODAL_OPEN,
  SERIES_MODAL_CLOSE,
  SERIES_MODAL_IS_LOADED,
} from "../actions/actionTypes";

const defaultState = {
  isLoading: false,
  open: false,
  payload: {},
};

export const seriesModal = (state = defaultState, action) => {
  switch (action.type) {
    case SERIES_MODAL_OPEN:
      return {
        ...state,
        isLoading: true,
        open: true,
      };
    case SERIES_MODAL_CLOSE:
      return {
        ...state,
        isLoading: false,
        open: false,
        payload: {},
      };
    case SERIES_MODAL_IS_LOADED:
      return {
        ...state,
        isLoading: false,
        payload: action.result,
      };
    default:
      return state;
  }
};
