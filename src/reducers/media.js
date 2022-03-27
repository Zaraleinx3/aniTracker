import { MOVIE_IS_SAVING, MOVIE_IS_SAVED } from "../actions/actionTypes";

const defaultState = {
  isSaving: false,
  searchResult: [],
};

export const media = (state = defaultState, action) => {
  switch (action.type) {
    case MOVIE_IS_SAVING: {
      let newState = { ...state, isSaving: true };
      return newState;
    }
    case MOVIE_IS_SAVED: {
      return {
        ...state,
        isSaving: false,
      };
    }
    /* TODO: Das darunter
            case SEASON_IS_SAVED:
                return {

                }
            ...
            abgebrochen hinzufügen?
            */
    default: {
      return state;
    }
  }
};
