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

    default:
      return state;
  }
};

export default groupsReducer;
