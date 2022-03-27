import { LIST_IS_LOADING, LIST_IS_LOADED } from "../actions/actionTypes";

const defaultState = {
  isLoading: false,
  currentList: undefined,
};

export const list = (state = defaultState, action) => {
  switch (action.type) {
    case LIST_IS_LOADING: {
      let newState = { ...state, isLoading: true };
      return newState;
    }
    case LIST_IS_LOADED: {
      return {
        ...state,
        isLoading: false,
        currentList: action.payload === [] ? undefined : action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
