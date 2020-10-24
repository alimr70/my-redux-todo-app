export const currentListIdReducer = (
  state = { listId: "Tasks", isEditing: false },
  action
) => {
  switch (action.type) {
    case "SET_LIST":
      return { ...state, listId: action.payload.id };

    case "IS_EDITING_LIST":
      return { ...state, isEditing: action.payload.isEditing };

    default:
      return state;
  }
};

export const currentGroupIdReducer = (
  state = { groupId: null, isEditing: false },
  action
) => {
  switch (action.type) {
    case "SET_GROUP":
      return { ...state, groupId: action.payload.id };

    case "IS_EDITING_GROUP":
      return { ...state, isEditing: action.payload.isEditing };

    default:
      return state;
  }
};

export const currentTaskIdReducer = (
  state = { taskId: null, isEditing: false },
  action
) => {
  switch (action.type) {
    case "SET_TASK":
      return { ...state, taskId: action.payload.id };

    case "IS_EDITING_TASK":
      return { ...state, isEditing: action.payload.isEditing };

    case "RENAMEING_TASK":
      return {
        ...state,
        taskId: action.payload.taskId,
        isEditing: action.payload.isEditing,
      };

    default:
      return state;
  }
};
