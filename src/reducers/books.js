import {ADD_BOOK, UPDATE_BOOK_TITLE, CLEAR_BOOKS } from '../actions/books'

const book = (state, action) => {
  switch(action.type) {
    case ADD_BOOK:
      return {
        id: action.id,
        title: action.title,
      };
    case UPDATE_BOOK_TITLE:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        title: action.updatedBookTitle
      };
    default:
      return state;
  }
};

const books = (state = [], action) => {
  switch(action.type) {
    case ADD_BOOK:
      return [
        ...state,
        book(undefined, action)
      ];
    case UPDATE_BOOK_TITLE:
      return state.map(b => book(b, action));
    case CLEAR_BOOKS:
      return [];
    default:
      return state;
  }
};

export default books;