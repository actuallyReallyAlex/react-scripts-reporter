import axios from "axios";

export const SET_REPORT = "SET_REPORT";
export const SET_ROOT = "SET_ROOT";

export const setReport = report => ({
  type: SET_REPORT,
  payload: {
    report
  }
});

export const setRoot = root => ({
  type: SET_ROOT,
  payload: {
    root
  }
});

// * THUNK ACTIONS

export const getReport = () => {
  return dispatch => {
    return axios.get("http://localhost:5000/report").then(response => {
      console.log({ data: response.data });
      dispatch(setReport(response.data));
    });
  };
};

export const getRoot = () => {
  return dispatch => {
    return axios.get("http://localhost:5000/root").then(response => {
      dispatch(setRoot(response.data));
    });
  };
};
