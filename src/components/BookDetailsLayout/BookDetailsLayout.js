import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VisibleNoteList from '../NoteList/NoteList';


const BookDetailsLayout = ({ book, upLink }) => (

  <div className="panel panel-default">
    <h1 className="panel-heading title">
      {book.title}
      <Link to={upLink.url}>
        {` (${upLink.text})`}
      </Link>
    </h1>
    <div className="panel-body">
      <VisibleNoteList selectedBookId={book.id} />
    </div>
  </div>
);

export default BookDetailsLayout;