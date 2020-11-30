import * as types from "./actionTypes";
import axios from "axios";

export const get_extdata = (data) => ({
  type: types.GET_EXTDATA,
  payload: {
    extdata: data.extdata,
  },
});

export const sending_request = () => ({
  type: types.SENDING_REQUEST,
  payload: {
    loading: true,
  },
});

export const request_data = (data) => ({
  type: types.REQUEST_DATA,
  payload: {
    extdata: data.data,
  },
});

export const request_error = (error) => ({
  type: types.REQUEST_ERROR,
  payload: {
    error: error,
  },
});

const getData = () => {
  return axios
    .get("https://directus.digitalactive.info/crm_test.json")
    .then((res) => res)
    .catch((error) => error);
};

export const fetchData = () => (distpach) => {
  distpach(sending_request());
  return getData()
    .then((data) => {
      distpach(request_data(data.data));
    })
    .catch((error) => {
      distpach(request_error(error));
    });
};
