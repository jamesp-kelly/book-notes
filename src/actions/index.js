import { v4 } from 'uuid';

export const ADD_BOOK = 'ADD_BOOK';
export const UPDATE_BOOK_TITLE = 'UPDATE_BOOK_TITLE';
export const CLEAR_BOOKS = 'CLEAR_BOOKS';

export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE_TITLE = 'UPDATE_NOTE_TITLE';
export const UPDATE_NOTE_DESCRIPTION = 'UPDATE_NOTE_DESCRIPTION';
export const DELETE_NOTE = 'DELETE_NOTE'


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

export const addNote = (title, description) => ({
  type: ADD_NOTE,
  title,
  description
});

export const updateNoteTitle = (id, updatedTitle) => ({
  type: UPDATE_NOTE_TITLE,
  updatedTitle
});

export const updateNoteDescription = (id, updatedDescription) => ({
  type: UPDATE_NOTE_DESCRIPTION,
  updatedDescription
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  id
});