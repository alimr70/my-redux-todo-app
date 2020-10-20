import counterReducer from "./counterReducer";
import tasksReducer from "./tasksReducer";
import listsReducer from "./listsReducer";
import groupsReducer from "./groupsReducer";
import currentListIdReducer from "./currentListIdReducer";
import currentGroupIdReducer from "./currentGroupIdReducer";
import addingListReducer from "./addingListReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: tasksReducer,
  lists: listsReducer,
  groups: groupsReducer,
  currentList: currentListIdReducer,
  currentGroup: currentGroupIdReducer,
  addingList: addingListReducer,
});

export default rootReducer;
