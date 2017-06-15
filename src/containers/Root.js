import React, { Component } from 'react';
import BookList from '../components/BookList/BookList';
import { twoBooks } from '../data/book';

class Root extends Component {
  constructor(props) {
    super(props);

    this.handleBookSelected = this.handleBookSelected.bind(this);
  }

  handleBookSelected(id) {
    console.log(`You selected book ${id}`);
  }

  render() {
    return (
      <div>
        <BookList 
          books={twoBooks} 
          onSelectBook={this.handleBookSelected} 
        />
      </div>
    );
  }
}

export default Root;