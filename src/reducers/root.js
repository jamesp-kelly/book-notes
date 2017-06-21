import { combineReducers } from 'redux';
import books from './books';
import notes from './notes';
import ui from './ui';

const rootReducer = combineReducers({
  books,
  notes,
  ui
});

export default rootReducer;