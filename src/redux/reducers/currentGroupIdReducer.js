const currentGroupIdReducer = (state = { groupId: 0 }, action) => {
  switch (action.type) {
    case "SET_GROUP":
      return { ...state, groupId: action.payload.id };

    default:
      return state;
  }
};

export default currentGroupIdReducer;
