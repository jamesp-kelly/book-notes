import React from 'react';
import VisibleBookList from '../components/BookList/BookList';

const BookNotesApp = () => (
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
);

export default BookNotesApp;