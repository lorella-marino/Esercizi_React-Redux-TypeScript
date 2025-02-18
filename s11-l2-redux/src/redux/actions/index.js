export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const SET_COMPANY = "SET_COMPANY";

export const addFav = (companyName) => ({
  type: ADD_FAV,
  payload: companyName,
});

export const removeFav = (companyName) => ({
  type: REMOVE_FAV,
  payload: companyName,
});

export const setCompany = (companyName) => ({
  type: SET_COMPANY,
  payload: companyName,
});
