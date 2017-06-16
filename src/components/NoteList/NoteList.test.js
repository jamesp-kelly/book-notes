import React from 'react';
import { shallow } from 'enzyme';
import { NoteList } from './NoteList'; //non-reduxy version
import { twoNotes } from '../../data/note';


describe('NoteList', () => {
  it('renders without crashing', () => {
    shallow(<NoteList notes={twoNotes} />);
  });

  it('renders the correct number of notes', () => {
    const wrapper = shallow(<NoteList notes={twoNotes} />);
    expect(wrapper.find('ul').children()).toHaveLength(twoNotes.length);
  });
});