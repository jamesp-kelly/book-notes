import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VisibleNoteList from '../NoteList/NoteList';
import './styles/BookDetailsLayout.css'

const BookDetailsLayout = ({ book, upLink }) => (

  <div>
    <div className="panel panel-default book-details-panel">
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
    <div className="panel panel-default">
      <Link 
        className="btn btn-default"
        role="button"
        to={`/note/new`}>
        New Note</Link>
    </div>
  </div>
  
);

export default BookDetailsLayout;