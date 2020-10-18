import DummyData from "../DummyData";

const tasksReducer = (state = DummyData.Tasks, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tasksReducer;
