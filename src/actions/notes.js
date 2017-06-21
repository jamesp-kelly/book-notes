import { v4 } from 'uuid';

export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE_TITLE = 'UPDATE_NOTE_TITLE';
export const UPDATE_NOTE_DESCRIPTION = 'UPDATE_NOTE_DESCRIPTION';
export const DELETE_NOTE = 'DELETE_NOTE'

export const DISPLAY_NOTE_FORM = 'DISPLAY_NOTE_FORM';

export const addNote = (title, description, bookId) => ({
  type: ADD_NOTE,
  id: v4(),
  title,
  description,
  bookId
});

export const updateNoteTitle = (id, updatedTitle) => ({
  type: UPDATE_NOTE_TITLE,
  id,
  updatedTitle
});

export const updateNoteDescription = (id, updatedDescription) => ({
  type: UPDATE_NOTE_DESCRIPTION,
  id,
  updatedDescription
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  id
});

export const displayNoteForm = (display) => ({
  type: DISPLAY_NOTE_FORM,
  display
});