import DummyData from "../DummyData";

const tasksReducer = (state = DummyData.Tasks, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          steps: action.payload.steps,
          isChecked: action.payload.isChecked,
          addedToMyDay: action.payload.addedToMyDay,
          Important: action.payload.Important,
          Planned: action.payload.Planned,
          parentList: action.payload.parentList,
          createdAt: action.payload.createdAt,
        },
      ];

    case "CHECK_TASK":
      const foundTask = state.find((task) => task.id === action.payload.id);
      const newState = state.filter((task) => task.id !== action.payload.id);
      return [
        ...newState,
        {
          ...foundTask,
          isChecked: action.payload.isChecked,
        },
      ];

    default:
      return state;
  }
};

export default tasksReducer;
