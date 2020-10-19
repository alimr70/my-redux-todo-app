import counterReducer from "./counterReducer";
import tasksReducer from "./tasksReducer";
import listsReducer from "./listsReducer";
import groupsReducer from "./groupsReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: tasksReducer,
  lists: listsReducer,
  groups: groupsReducer,
});

export default rootReducer;
