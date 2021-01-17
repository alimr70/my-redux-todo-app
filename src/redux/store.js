import rootReducer from "./reducers/rootReducer";
import { createStore } from "redux";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(
  throttle(() => {
    saveState({
      tasks: store.getState().tasks,
      tists: store.getState().tists,
      groups: store.getState().groups,
    });
  }),
  1000
);

export default store;
