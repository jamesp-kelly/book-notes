import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../Book/Book';
import { getVisibleBooks } from '../../util/';

export const BookList = ({ books }) => (
  <ul>
    {
      books.map((book) => 
        <Book 
          key={book.id}
          id={book.id}
          title={book.title}
        />
      )
    }
  </ul>
);

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    books: getVisibleBooks(state.books)
  }
}

const VisibleBookList = connect(
  mapStateToProps
)(BookList);

export default VisibleBookList;
