const defaultState = {
  report: {
    numFailedTestSuites: null,
    numFailedTests: null,
    numPassedTestSuites: null,
    numPassedTests: null,
    numPendingTestSuites: null,
    numPendingTests: null,
    testResults: []
  },
  root: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SET_REPORT":
      return Object.assign({}, state, { report: action.payload.report });
    case "SET_ROOT":
      return Object.assign({}, state, { root: action.payload.root });
    default:
      return state;
  }
};
