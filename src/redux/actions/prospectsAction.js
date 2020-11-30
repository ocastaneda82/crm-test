import * as types from "./actionTypes";

export const get_prospects = (data) => ({
  type: types.GET_PROSPECTS,
  payload: {
    data: data.data,
  },
});
