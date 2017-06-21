import React from 'react';
import { Link } from 'react-router-dom';
import VisibleBookList from '../components/BookList/BookList';
import BookEditForm from '../components/BookEditForm/BookEditForm';

const BookNotesApp = () => (
  <div>
    <div className="panel panel-default">
      {/* search */}
      {/* menu? */}
      <h1 className="panel-heading title">
        All Books
      </h1>
      <div className="panel-body">
        <VisibleBookList />
      </div>
    </div>
    <div className="panel panel-default">
      {/*<Link 
        className="btn btn-default"
        role="button"
        to={`/new`}>
        New Book</Link>*/}
        <BookEditForm />
    </div>
  </div>
);

export default BookNotesApp;