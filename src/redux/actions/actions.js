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

/* -------------------------------------------------------------------------- */
/*                                Menu Actions                                */
/* -------------------------------------------------------------------------- */

export const openMenu = (isOpen, source) => {
  return {
    type: "OPEN_MENU",
    payload: { isOpen: isOpen, source: source },
  };
};
