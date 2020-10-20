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
