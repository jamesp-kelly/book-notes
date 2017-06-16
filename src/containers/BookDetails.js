import React from 'react';
import { connect } from 'react-redux';
import VisibleNoteList from '../components/NoteList/NoteList';

export const BookDetails = ({ book, notes }) => (
  <div>
    <div>{book.title}</div>
    <div>{book.id}</div>
    <VisibleNoteList selectedBookId={book.id} />
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const bookId = ownProps.match.params.bookId;
  return {
    book: state.books.find(b => b.id === bookId)
  }
}

const VisibleBookDetails = connect(
  mapStateToProps
)(BookDetails);

export default VisibleBookDetails;
