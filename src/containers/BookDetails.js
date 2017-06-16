import React from 'react';
import { connect } from 'react-redux';

export const BookDetails = ({ book, notes }) => (
  <div>
    <div>{book.title}</div>
    <div>{book.id}</div>
    {
      notes.map((n) => {
        return (
          <div>{n.title}</div>
        );
      })
    }
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const bookId = ownProps.match.params.bookId;
  return {
    book: state.books.find(b => b.id === bookId),
    notes: state.notes.filter(n => n.bookId === bookId)
  }
}

const VisibleBookDetails = connect(
  mapStateToProps
)(BookDetails);

export default VisibleBookDetails;
