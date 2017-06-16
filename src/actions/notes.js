import { v4 } from 'uuid';

export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE_TITLE = 'UPDATE_NOTE_TITLE';
export const UPDATE_NOTE_DESCRIPTION = 'UPDATE_NOTE_DESCRIPTION';
export const DELETE_NOTE = 'DELETE_NOTE'

export const addNote = (title, description) => ({
  type: ADD_NOTE,
  id: v4(),
  title,
  description
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