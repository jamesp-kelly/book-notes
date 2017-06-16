import React from 'react';
import { connect } from 'react-redux';

export const BookDetails = ({ book }) => (
  <div>
    <div>{book.title}</div>
    <div>{book.id}</div>
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
