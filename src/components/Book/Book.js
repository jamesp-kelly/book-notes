import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Book = ({ title, id }) => (
  <div>
    <Link to={`/books/${id}`}>
      <div>{title}</div>
    </Link>
  </div>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Book;