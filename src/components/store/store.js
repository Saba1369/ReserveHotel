import { compose, createStore } from "redux";
import rootReducer from "./reducer";
import { STORAGE_RESERVE_LIST } from "../../constant/local";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STORAGE_RESERVE_LIST);
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch {
    console.log(undefined);
  }
};
const saveState = (store) => {
  const serializedState = JSON.stringify(store);
  localStorage.setItem(STORAGE_RESERVE_LIST, serializedState);
};

const persist = loadState();
const store = createStore(rootReducer, persist, composeEnhancers());

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
