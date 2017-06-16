import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Note from '../Note/Note';

export const NoteList = ({ notes, selectedBookId }) => (
  <ul>
    {
      notes.map((note) => 
        <Note 
          key={note.id}
          id={note.id}
          title={note.title}
        />
      )
    }
  </ul>
);

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes.filter(note => note.bookId === ownProps.selectedBookId)
  }
}

const VisibleNoteList = connect(
  mapStateToProps
)(NoteList);

export default VisibleNoteList;
