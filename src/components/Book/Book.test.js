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
      />
    );
  });

  it('renders the book title', () => {
    const wrapper = shallow(
      <Book 
        title={singleBook.title} 
        id={singleBook.id}
      />
    );
    expect(wrapper.find('.book-title').text()).toEqual(singleBook.title);
  });
});