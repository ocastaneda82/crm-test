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
    case types.SENDING_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.REQUEST_DATA: {
      return {
        ...state,
        extdata: action.payload.extdata,
      };
    }
    case types.REQUEST_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};

export default extdataState;
