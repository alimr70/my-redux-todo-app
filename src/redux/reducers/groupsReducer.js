import DummyData from "../DummyData";

const groupsReducer = (state = DummyData.Groups, action) => {
  switch (action.type) {
    case "ADD_GROUP":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
        },
      ];

    case "EDIT_GROUP":
      const newState = state.filter((group) => group.id !== action.payload.id);
      return [
        ...newState,
        {
          id: action.payload.id,
          title: action.payload.title,
        },
      ];

    default:
      return state;
  }
};

export default groupsReducer;
