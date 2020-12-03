import { combineReducers } from 'redux';
import categories from './categories';
import lists from './lists';

export default combineReducers({
  listState: categories,
  categoryState: lists
});