import {ADD_NOTE, UPDATE_NOTE_TITLE, UPDATE_NOTE_DESCRIPTION, DELETE_NOTE } from '../actions/notes'

const note = (state, action) => {
  switch(action.type) {
    case ADD_NOTE:
      return {
        id: action.id,
        title: action.title,
        description: action.description,
        bookId: action.bookId
      };
    case UPDATE_NOTE_TITLE:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        title: action.updatedNoteTitle
      };
    case UPDATE_NOTE_DESCRIPTION:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        description: action.updatedNoteDescription
      }
    default:
      return state;
  }
};

const notes = (state = [], action) => {
  switch(action.type) {
    case ADD_NOTE:
      return [
        ...state,
        note(undefined, action)
      ];
    case UPDATE_NOTE_TITLE:
      return state.map(n => note(n, action));
    case UPDATE_NOTE_DESCRIPTION:
      return state.map(n => note(n, action));
    case DELETE_NOTE:
      return [];
    default:
      return state;
  }
};

export default notes;