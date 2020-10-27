const screenReducer = (
  state = { width: document.documentElement.clientWidth },
  action
) => {
  switch (action.type) {
    case "SET_WIDTH":
      return {
        ...state,
        width: action.payload.screenWidth,
      };

    default:
      return state;
  }
};

export default screenReducer;
