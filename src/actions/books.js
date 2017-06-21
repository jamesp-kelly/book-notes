import { v4 } from 'uuid';

export const DISPLAY_BOOK_FORM = 'DISPLAY_BOOK_FORM';

export const ADD_BOOK = 'ADD_BOOK';
export const UPDATE_BOOK_TITLE = 'UPDATE_BOOK_TITLE';
export const CLEAR_BOOKS = 'CLEAR_BOOKS';

export const CLICK_NEW_BOOK = 'CLICK_NEW_BOOK'


export const addBook = (title) => ({
  type: ADD_BOOK,
  title,
  id: v4()
});

export const displayBookForm = (display) => ({
  type: DISPLAY_BOOK_FORM,
  display
});

export const updateBookTitle = (id, updatedTitle) => ({
  type: UPDATE_BOOK_TITLE,
  id,
  updatedTitle 
});

export const clearBooks = () => ({
  type: CLEAR_BOOKS
});

export const clickNewBook = () => ({
  type: CLICK_NEW_BOOK
})

