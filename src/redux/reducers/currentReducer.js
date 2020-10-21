export const currentListIdReducer = (state = { listId: "Tasks" }, action) => {
  switch (action.type) {
    case "SET_LIST":
      return { ...state, listId: action.payload.id };

    default:
      return state;
  }
};

export const currentGroupIdReducer = (state = { groupId: null }, action) => {
  switch (action.type) {
    case "SET_GROUP":
      return { ...state, groupId: action.payload.id };

    default:
      return state;
  }
};

export const currentTaskIdReducer = (state = { taskId: null }, action) => {
  switch (action.type) {
    case "SET_TASK":
      return { ...state, taskId: action.payload.id };

    default:
      return state;
  }
};
