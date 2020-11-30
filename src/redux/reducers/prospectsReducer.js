import * as types from "../actions/actionTypes";

//make the initial state of Prospects
const initialState = {
  data: [],
};

const prospectState = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROSPECTS: {
      return {
        ...state,
        data: action.payload.data,
      };
    }
    default:
      return state;
  }
};

export default prospectState;
