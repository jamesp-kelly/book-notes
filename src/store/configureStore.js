import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/root';
import { twoBooks } from '../data/book';
import { twoNotes } from '../data/note';

const configureStore = () => {

  const testData = {
    books: twoBooks,
    notes: twoNotes
  };

  const store = createStore(
    rootReducer, 
    testData,
    applyMiddleware(logger)
  );

  return store;
}

export default configureStore;
