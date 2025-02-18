import { ADD_FAV, REMOVE_FAV } from "../actions";

const initialState = [];

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return state.includes(action.payload) ? state : [...state, action.payload];
    case REMOVE_FAV:
      return state.filter((company) => company !== action.payload);
    default:
      return state;
  }
};

export default favReducer;
