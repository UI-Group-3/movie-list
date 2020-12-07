import { combineReducers } from "redux";
import categories from "./categories";
import lists from "./lists";
import sidebarReducer from "./sidebar";
import headerReducer from "./header";

export default combineReducers({
  listState: lists,
  categoryState: categories,
  sidebarState: sidebarReducer,
  headerState: headerReducer,
});
