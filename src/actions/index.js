import { v4 } from 'uuid';

export const ADD_BOOK = 'ADD_BOOK';
export const UPDATE_BOOK_TITLE = 'UPDATE_BOOK_TITLE';
export const CLEAR_BOOKS = 'CLEAR_BOOKS';



export const addBook = (title) => ({
  type: ADD_BOOK,
  title,
  id: v4()
});

export const updateBookTitle = (id, updatedTitle) => ({
  type: UPDATE_BOOK_TITLE,
  id,
  updatedTitle 
});

export const clearBooks = () => ({
  type: CLEAR_BOOKS
});
