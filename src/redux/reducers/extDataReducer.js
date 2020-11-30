import * as types from "../actions/actionTypes";

//make the initial state of Prospects
const initialState = {
  extdata: [],
};

const extdataState = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_EXTDATA: {
      return {
        ...state,
        extdata: action.payload.extdata,
      };
    }
    default:
      return state;
  }
};

export default extdataState;
