import counterReducer from "./counterReducer";
import tasksReducer from "./tasksReducer";
import listsReducer from "./listsReducer";
import groupsReducer from "./groupsReducer";
import { currentListIdReducer, currentGroupIdReducer } from "./currentReducer";
import { addingListReducer, addingGroupReducer } from "./addingReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: tasksReducer,
  lists: listsReducer,
  groups: groupsReducer,
  currentList: currentListIdReducer,
  currentGroup: currentGroupIdReducer,
  addingList: addingListReducer,
  addingGroup: addingGroupReducer,
});

export default rootReducer;
