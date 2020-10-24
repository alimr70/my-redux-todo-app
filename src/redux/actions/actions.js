/* -------------------------------------------------------------------------- */
/*                               Counter Actions                              */
/* -------------------------------------------------------------------------- */

export const initCounter = (myDay, important, planned, tasksList) => {
  return {
    type: "INIT_COUNTER",
    payload: {
      myDay: myDay,
      important: important,
      planned: planned,
      tasksList: tasksList,
    },
  };
};

/* -------------------------------------------------------------------------- */
/*                                Group Actions                               */
/* -------------------------------------------------------------------------- */

export const setCurrentGroup = (groupId) => {
  return {
    type: "SET_GROUP",
    payload: { id: groupId },
  };
};

export const addingGroup = (title) => {
  return {
    type: "ADDING_GROUP",
    payload: { title: title },
  };
};

export const addGroup = (id, title) => {
  return {
    type: "ADD_GROUP",
    payload: {
      id: id,
      title: title,
    },
  };
};

export const editGroup = (id, title) => {
  return {
    type: "EDIT_GROUP",
    payload: {
      id: id,
      title: title,
    },
  };
};

export const isEditingGroup = (isEditing) => {
  return {
    type: "IS_EDITING_GROUP",
    payload: {
      isEditing: isEditing,
    },
  };
};

/* -------------------------------------------------------------------------- */
/*                                List Actions                                */
/* -------------------------------------------------------------------------- */

export const setCurrentList = (listId) => {
  return {
    type: "SET_LIST",
    payload: { id: listId },
  };
};

export const addingList = (title) => {
  return {
    type: "ADDING_LIST",
    payload: { title: title },
  };
};

export const addList = (id, title, groupId) => {
  return {
    type: "ADD_LIST",
    payload: {
      id: id,
      title: title,
      group: groupId,
    },
  };
};

export const isEditingList = (isEditing) => {
  return {
    type: "IS_EDITING_LIST",
    payload: {
      isEditing: isEditing,
    },
  };
};
/* -------------------------------------------------------------------------- */
/*                                Task Actions                                */
/* -------------------------------------------------------------------------- */

export const setCurrentTask = (taskId) => {
  return {
    type: "SET_TASK",
    payload: { id: taskId },
  };
};

export const addingTask = (title) => {
  return {
    type: "ADDING_TASK",
    payload: { title: title },
  };
};

export const addTask = (id, title, listId) => {
  return {
    type: "ADD_TASK",
    payload: {
      id: id,
      title: title,
      steps: [],
      isChecked: false,
      addedToMyDay: null,
      Important: false,
      Planned: null,
      parentList: listId,
      createdAt: Date.now(),
    },
  };
};

export const checkTask = (id, isChecked) => {
  return {
    type: "CHECK_TASK",
    payload: {
      id: id,
      isChecked: isChecked,
    },
  };
};

export const checkStep = (parentTaskId, id, isChecked) => {
  return {
    type: "CHECK_STEP",
    payload: {
      parentTaskId: parentTaskId,
      id: id,
      isChecked: isChecked,
    },
  };
};

export const editTask = (id, title) => {
  return {
    type: "EDIT_TASK",
    payload: {
      id: id,
      title: title,
    },
  };
};

export const isEditingTask = (isEditing) => {
  return {
    type: "IS_EDITING_TASK",
    payload: {
      isEditing: isEditing,
    },
  };
};

/* -------------------------------------------------------------------------- */
/*                                Menu Actions                                */
/* -------------------------------------------------------------------------- */

export const openMenu = (isOpen, source, sourceId) => {
  return {
    type: "OPEN_MENU",
    payload: { isOpen: isOpen, source: source, sourceId: sourceId },
  };
};

export const menuRename = (source, sourceId) => {
  switch (source) {
    case "TASK_ITEM":
      return {
        type: "RENAMEING_TASK",
        payload: {
          taskId: sourceId,
          isEditing: true,
        },
      };

    case "TASK_DETAIL":
      return {
        type: "RENAMEING_TASK",
        payload: {
          taskId: sourceId,
          isEditing: true,
        },
      };

    default:
      break;
  }
};
