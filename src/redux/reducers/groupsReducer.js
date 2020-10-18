import DummyData from "../DummyData";

const groupsReducer = (state = DummyData.Groups, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default groupsReducer;
