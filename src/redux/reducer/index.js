import { combineReducers } from 'redux';
import categories from './categories';
import lists from './lists';
import sideBar from './sidebar';

export default combineReducers({
  listState: lists,
  categoryState: categories,
  sidebarState: sideBar
});