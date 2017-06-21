import React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../actions/books';

let BookEditForm = ({ dispatch }) => {
  
  let bookInput;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input 
        type="text" 
        ref={node => bookInput = node}  
      />
      <button 
        onClick={() => {
          dispatch(addBook(bookInput.value));
          bookInput.value = '';
        }}
      >
        Submit
      </button>
    </form>
  );
}

BookEditForm = connect()(BookEditForm);

export default BookEditForm;