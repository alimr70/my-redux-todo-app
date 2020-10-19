export const setCurrentList = (listId) => {
  return {
    type: "SET_LIST",
    payload: { id: listId },
  };
};
