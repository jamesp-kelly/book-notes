import React from 'react';
import { connect, dispatch } from 'react-redux';
import BookDetailsLayout from '../components/BookDetailsLayout/BookDetailsLayout';
import { displayNoteForm } from '../actions/notes';

export const BookDetails = ({ dispatch, book, displayForm }) => {
  
  const upLinkObj = {
    url: '',
    text: 'All Books'
  };

  const handleNewNoteClicked = (e) => {
    dispatch(displayNoteForm(true));
  }

  return (
    <BookDetailsLayout 
      book={book}  
      upLink={upLinkObj} 
      onNewNoteClick={handleNewNoteClicked}
      displayForm={displayForm} />
  );
};
 

const mapStateToProps = (state, ownProps) => {
  const bookId = ownProps.match.params.bookId;
  return {
    book: state.books.find(b => b.id === bookId),
    displayForm: state.ui.displayNoteForm
  }
}

const VisibleBookDetails = connect(
  mapStateToProps
)(BookDetails);

export default VisibleBookDetails;
