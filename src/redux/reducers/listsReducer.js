import DummyData from "../DummyData";

const listsReducer = (state = DummyData.Lists, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;
