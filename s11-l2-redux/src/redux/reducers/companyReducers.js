import { SET_COMPANY } from "../actions";

const initialState = {
  selectedCompany: null,
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANY:
      return {
        ...state,
        selectedCompany: action.payload,
      };
    default:
      return state;
  }
};

export default companyReducer;
