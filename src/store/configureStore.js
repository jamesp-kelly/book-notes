import { createStore } from 'redux';
import rootReducer from '../reducers/root';
import { twoBooks } from '../data/book';
import { twoNotes } from '../data/note';

const configureStore = () => {

  const testData = {
    books: twoBooks,
    notes: twoNotes
  };

  const store = createStore(rootReducer, testData);
  return store;
}

export default configureStore;
