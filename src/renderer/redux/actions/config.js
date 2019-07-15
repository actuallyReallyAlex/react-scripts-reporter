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
