export const SET_CONTENT = "SET_CONTENT";
export const SET_CURRENT_TEST = "SET_CURRENT_TEST";

export const setContent = content => ({
  type: SET_CONTENT,
  payload: {
    content
  }
});

export const setCurrentTest = (currentTestIndex, currentTestName) => ({
  type: SET_CURRENT_TEST,
  payload: { currentTestIndex, currentTestName }
});
