import React from 'react';
import { connect } from 'react-redux';
import BookDetailsLayout from '../components/BookDetailsLayout/BookDetailsLayout';

export const BookDetails = ({ book }) => {
  
  const upLinkObj = {
    url: '',
    text: 'All Books'
  };

  return (
    <BookDetailsLayout book={book} upLink={upLinkObj} />
  );
};
 

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
