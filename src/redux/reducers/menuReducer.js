const menuReducer = (state = { isOpen: false, source: null }, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return {
        ...state,
        isOpen: action.payload.isOpen,
        source: action.payload.source,
      };

    default:
      return state;
  }
};

export default menuReducer;
