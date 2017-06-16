import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles/NoteDetailsLayout.css';

const NoteDetailsLayout = ({ note, upLink }) => (
  <div className="panel panel-default note-details-panel">
    <h1 className="panel-heading title">
      {note.title}
      {' ('}
      <Link to={upLink.url}>
        {upLink.text}
      </Link>
      {')'}
    </h1>
    <div className="panel-body">
      <div className="description">{note.description}</div>
    </div>
  </div>
  
);

export default NoteDetailsLayout;