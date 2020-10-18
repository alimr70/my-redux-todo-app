import tasksReducer from "./tasksReducer";
import listsReducer from "./listsReducer";
import groupsReducer from "./groupsReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  lists: listsReducer,
  groups: groupsReducer,
});

export default rootReducer;
