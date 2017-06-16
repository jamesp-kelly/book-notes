import React from 'react';
import { connect } from 'react-redux';
import NoteDetailsLayout from '../components/NoteDetailsLayout/NoteDetailsLayout';

export const NoteDetails = ({ note, selectedBook }) => {
  
  const upLinkObj = {
    url: `/${selectedBook.id}`,
    text: selectedBook.title
  };

  return (
    <NoteDetailsLayout note={note} upLink={upLinkObj} />
  );
}

const mapStateToProps = (state, ownProps) => {
  const noteId = ownProps.match.params.noteId;
  const selectedNote = state.notes.find(n => n.id === noteId);

  return {
    note: selectedNote,
    selectedBook: state.books.find(b => b.id == selectedNote.bookId)
  }
}

const VisibleNoteDetails = connect(
  mapStateToProps
)(NoteDetails);

export default VisibleNoteDetails;
