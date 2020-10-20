export const addingListReducer = (state = { title: "" }, action) => {
  switch (action.type) {
    case "ADDING_LIST":
      return { ...state, title: action.payload.title };

    default:
      return state;
  }
};

export const addingGroupReducer = (state = { title: "" }, action) => {
  switch (action.type) {
    case "ADDING_GROUP":
      return { ...state, title: action.payload.title };

    default:
      return state;
  }
};
