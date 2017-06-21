import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import VisibleBookList from '../components/BookList/BookList';
import BookEditForm from '../components/BookEditForm/BookEditForm';
import { displayBookForm } from '../actions/books';

let BookNotesApp = ({ dispatch, displayForm }) => {
  return (
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
        {
          displayForm ? 
            <BookEditForm /> : 
            <button 
              className="btn btn-default"
              onClick={() => dispatch(displayBookForm(true))}
            >Add</button>
        }
      </div>
    </div>
  );
} 


const mapStateToProps = (state, ownProps) => {
  return {
    displayForm: state.ui.displayBookForm
  }
}

BookNotesApp = connect(mapStateToProps)(BookNotesApp);

export default BookNotesApp;