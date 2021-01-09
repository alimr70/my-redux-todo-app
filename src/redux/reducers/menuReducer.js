const menuReducer = (
  state = { isOpen: false, source: null, sourceId: null },
  action
) => {
  switch (action.type) {
    case "OPEN_MENU":
      return {
        ...state,
        isOpen: action.payload.isOpen,
        source: action.payload.source,
        sourceId: action.payload.sourceId,
      };

    case "TOGGLE_MENU":
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };

    default:
      return state;
  }
};

export default menuReducer;
