export const currentListIdReducer = (
  state = { listId: "Tasks", title: "", isEditing: false },
  action
) => {
  switch (action.type) {
    case "SET_LIST":
      return { ...state, listId: action.payload.id };

    case "IS_EDITING_LIST":
      return { ...state, isEditing: action.payload.isEditing };

    case "EDITING_LIST":
      return { ...state, title: action.payload.title };

    case "RENAMEING_LIST":
      return {
        ...state,
        listId: action.payload.listId,
        isEditing: action.payload.isEditing,
      };

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
  state = { taskId: null, title: "", isEditing: false },
  action
) => {
  switch (action.type) {
    case "SET_TASK":
      return { ...state, taskId: action.payload.id };

    case "IS_EDITING_TASK":
      return { ...state, isEditing: action.payload.isEditing };

    case "EDITING_TASK":
      return { ...state, title: action.payload.title };

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
