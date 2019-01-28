const reducer = (state = { currentPage: window.location.pathname }, action) => {
  if (action.type === "/") {
    state = { ...state, currentPage: action.payload };
  } else if (action.type === "WORK") {
    state = { ...state, currentPage: action.payload };
  } else if (action.type === "ABOUT") {
    state = { ...state, currentPage: action.payload };
  }

  return state;
};

export default reducer;
