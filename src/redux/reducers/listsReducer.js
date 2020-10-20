import DummyData from "../DummyData";

const listsReducer = (state = DummyData.Lists, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          group: action.payload.group,
        },
      ];

    default:
      return state;
  }
};

export default listsReducer;
