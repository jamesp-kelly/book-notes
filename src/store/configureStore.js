import { createStore } from 'redux';
import rootReducer from '../reducers/root';
import { twoBooks } from '../data/book';

const configureStore = () => {

  const testData = {
    books: twoBooks
  };

  const store = createStore(rootReducer, testData);
  return store;
}

export default configureStore;
