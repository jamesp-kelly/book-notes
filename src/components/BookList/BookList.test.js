import React from 'react';
import { shallow } from 'enzyme';
import { BookList } from './BookList'; //non-reduxy
import { twoBooks } from '../../data/book';


describe('BookList', () => {
  it('renders without crashing', () => {
    shallow(<BookList books={twoBooks} />);
  });

  it('renders the correct number of books', () => {
    const wrapper = shallow(<BookList books={twoBooks} />);
    expect(wrapper.find('ul').children()).toHaveLength(twoBooks.length);
  });
});