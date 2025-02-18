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

export const fetchJobs = (companyName) => async (dispatch) => {
  try {
    const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?company=${companyName}`);
    if (!response.ok) {
      throw new Error("Errore nel recupero dei dati");
    }
    const { data } = await response.json();
    dispatch({ type: SET_COMPANY, payload: { companyName, jobs: data } });
  } catch (error) {
    console.error("Errore nel recupero dei risultati:", error);
  }
};
