import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';

const BookList = ({books, onSelectBook}) => (
  <ul>
    {
      books.map((book, i) => 
        <Book 
          key={book.id}
          title={book.title} 
          id={book.id}
          onSelectBook={onSelectBook}
        />
      )
    }
  </ul>
);

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;
