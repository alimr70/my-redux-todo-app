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

    case "EDIT_TASK":
      const foundEditingTask = state.find(
        (task) => task.id === action.payload.id
      );
      const newEditingState = state.filter(
        (task) => task.id !== action.payload.id
      );
      return [
        ...newEditingState,
        {
          ...foundEditingTask,
          title: action.payload.title,
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

    case "IMPORTANT_TASK":
      const foundImportanTask = state.find(
        (task) => task.id === action.payload.id
      );
      const newImportantState = state.filter(
        (task) => task.id !== action.payload.id
      );
      return [
        ...newImportantState,
        {
          ...foundImportanTask,
          Important: action.payload.Important,
        },
      ];

    case "ADD_TO_MY_DAY":
      const foundMyDayTask = state.find(
        (task) => task.id === action.payload.id
      );
      const newMyDayState = state.filter(
        (task) => task.id !== action.payload.id
      );
      return [
        ...newMyDayState,
        {
          ...foundMyDayTask,
          addedToMyDay: action.payload.addedToMyDay,
        },
      ];

    case "CHECK_STEP":
      const foundParentTask = state.find(
        (task) => task.id === action.payload.parentTaskId
      );
      const foundStep = foundParentTask.steps.find(
        (step) => step.id === action.payload.id
      );
      const taskSteps = foundParentTask.steps.filter(
        (step) => step.id !== action.payload.id
      );
      const newTaskSteps = [
        ...taskSteps,
        {
          ...foundStep,
          isChecked: action.payload.isChecked,
        },
      ];
      const newTask = {
        ...foundParentTask,
        steps: [...newTaskSteps],
      };
      const newStepState = state.filter(
        (task) => task.id !== action.payload.parentTaskId
      );
      return [
        ...newStepState,
        {
          ...newTask,
        },
      ];

    case "DELETE_TASK":
      const newDeleteState = state.filter(
        (task) => task.id !== action.payload.id
      );
      return [...newDeleteState];

    default:
      return state;
  }
};

export default tasksReducer;
