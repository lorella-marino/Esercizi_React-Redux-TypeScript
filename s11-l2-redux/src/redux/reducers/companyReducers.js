import { SET_COMPANY } from "../actions";

const initialState = {
  selectedCompany: null,
  jobs: [],
  error: null,
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANY:
      return {
        ...state,
        selectedCompany: action.payload.companyName,
        jobs: action.payload.jobs,
        error: null,
      };
    default:
      return state;
  }
};

export default companyReducer;
