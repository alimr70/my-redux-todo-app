const currentListIdReducer = (state = { listId: 0 }, action) => {
  switch (action.type) {
    case "SET_LIST":
      return { ...state, listId: action.payload.id };

    default:
      return state;
  }
};

export default currentListIdReducer;
