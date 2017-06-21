import React from 'react';
import { connect } from 'react-redux';
import { addNote, displayNoteForm } from '../../actions/notes';

let NoteEditForm = ({ dispatch, bookId }) => {
  let noteTitle, noteDescription;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input 
        placeholder="Note Title"
        className="form-control"
        type="text" 
        ref={node => noteTitle = node}  
      />
      <input 
        placeholder="Note Description"
        className="form-control"
        type="text" 
        ref={node => noteDescription = node}  
      />
      <button 
        type="button"
        style={{marginRight: 10}}
        className="btn btn-default"
        onClick={() => {
          dispatch(addNote(noteTitle.value, noteDescription.value, bookId));
          dispatch(displayNoteForm(false));
          noteTitle.value = '';
          noteDescription.value = '';
        }}
      >Submit</button>
      <button
        type="button"
        className="btn btn-default"
        onClick={() => {
          dispatch(displayNoteForm(false));
          noteTitle.value = '';
          noteDescription.value = '';
        }}>Cancel</button>
    </form>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    bookId: ownProps.bookId
  }
}

NoteEditForm = connect(mapStateToProps)(NoteEditForm);

export default NoteEditForm;