const defaultState = {
  content: "Main",
  currentTestIndex: null,
  currentTestName: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SET_CONTENT":
      return Object.assign({}, state, { content: action.payload.content });
    case "SET_CURRENT_TEST":
      return Object.assign({}, state, {
        currentTestIndex: action.payload.currentTestIndex,
        currentTestName: action.payload.currentTestName
      });
    default:
      return state;
  }
};
