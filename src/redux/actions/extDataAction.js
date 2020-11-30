import * as types from "./actionTypes";

export const get_extdata = (data) => ({
  type: types.GET_EXTDATA,
  payload: {
    extdata: data.extdata,
  },
});
