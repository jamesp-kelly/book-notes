import React from 'react';
import PropTypes from 'prop-types';

const Book = ({id, title, onSelectBook}) => (
  <div onClick={() => onSelectBook(id)}>{title}</div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onSelectBook: PropTypes.func.isRequired
};

export default Book;