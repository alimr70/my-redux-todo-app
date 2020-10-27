export const detailbarReducer = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case "OPEN_DETAILBAR":
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };

    default:
      return state;
  }
};

export const toolbarReducer = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case "OPEN_TOOLBAR":
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };

    default:
      return state;
  }
};
