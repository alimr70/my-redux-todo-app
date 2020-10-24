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

    default:
      return state;
  }
};

export default menuReducer;
