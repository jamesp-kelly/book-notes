import React from 'react';
import { shallow } from 'enzyme';
import Book from './Book'
import { singleBook } from '../../data/book';

describe('Book', () => {
  it('renders without crashing', () => {
    shallow(
      <Book 
        title={singleBook.title} 
        id={singleBook.id}
        onSelectBook={() => {}} 
      />
    );
  });

  it('renders the book title', () => {
    const wrapper = shallow(
      <Book 
        title={singleBook.title} 
        id={singleBook.id} 
        onSelectBook={() => {}}
      />
    );
    expect(wrapper.text()).toEqual(singleBook.title);
  });

  it('invokes callback correctly when clicked', () => {
    let bookId;
    const handleBookClick = (id) => bookId = id;

    const wrapper = shallow(
      <Book 
        title={singleBook.title} 
        id={singleBook.id} 
        onSelectBook={handleBookClick}
      />
    );

    wrapper.find('div').simulate('click');
    expect(bookId).toEqual(singleBook.id);
  });
});