import { DISPLAY_BOOK_FORM } from '../actions/books';
import { DISPLAY_NOTE_FORM } from '../actions/notes';

const ui = (state = {}, action) => {
  switch(action.type) {
    case DISPLAY_BOOK_FORM:
      return {
        displayBookForm: action.display
      };
    case DISPLAY_NOTE_FORM:
      return {
        displayNoteForm: action.display
      };
    default:
      return state;
  }
};


export default ui;