import { v4 } from 'uuid';

export const ADD_BOOK = 'ADD_BOOK';
export const SELECT_BOOK = 'SELECT_BOOK';


export const addBook = (title) => ({
  type: ADD_BOOK,
  title,
  id: v4()
});

export const selectBook = (id) => ({
  type: SELECT_BOOK,
  id 
});