import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VisibleNoteList from '../NoteList/NoteList';
import NoteEditForm from '../NoteEditForm/NoteEditForm';
import './styles/BookDetailsLayout.css'

const BookDetailsLayout = ({ book, upLink, onNewNoteClick, displayForm }) => (

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
      {
        displayForm ?
        <NoteEditForm bookId={book.id} /> :
        <button
          className="btn btn-default"
          onClick={onNewNoteClick}  
        >
          New Note</button>
      }
      
    </div>
  </div>
  
);

export default BookDetailsLayout;