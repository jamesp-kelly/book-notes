import React from 'react';
import { shallow } from 'enzyme';
import Note from './Note'
import { singleNote } from '../../data/note';

describe('Note', () => {
  it('renders without crashing', () => {
    shallow(
      <Note 
        title={singleNote.title} 
        id={singleNote.id}
      />
    );
  });

  it('renders the note title', () => {
    const wrapper = shallow(
      <Note 
        title={singleNote.title} 
        id={singleNote.id}
      />
    );
    expect(wrapper.find('.note-title').text()).toEqual(singleNote.title);
  });
});