import { configureStore, combineReducers } from "@reduxjs/toolkit";
import companyReducer from "../reducers/companyReducers";
import favReducer from "../reducers/favReducer";

const rootReducer = combineReducers({
  company: companyReducer,
  favourites: favReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
