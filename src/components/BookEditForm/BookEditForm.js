import React from 'react';
import { connect } from 'react-redux';
import { addBook, displayBookForm } from '../../actions/books';

let BookEditForm = ({ dispatch }) => {
  let bookInput;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input 
        placeholder="Book Title"
        className="form-control"
        type="text" 
        ref={node => bookInput = node}  
      />
      <button 
        style={{marginRight: 10}}
        className="btn btn-default"
        onClick={() => {
          dispatch(addBook(bookInput.value));
          dispatch(displayBookForm(false));
          bookInput.value = '';
        }}
      >Submit</button>
      <button
        className="btn btn-default"
        onClick={() => {
          dispatch(displayBookForm(false));
          bookInput.value = '';
        }}>Cancel</button>
    </form>
  );
}

BookEditForm = connect()(BookEditForm);

export default BookEditForm;