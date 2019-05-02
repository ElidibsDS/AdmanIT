import { createStore, combineReducers } from "redux";
import CurrentPage from "./Reducers/CurrentPage";

const reducer = combineReducers({
  //
  CurrentPage
});

const store = createStore(reducer);

export default store;
