import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Note = ({ title, id }) => (
  <div>
    <Link to={`/note/${id}`}>
      <div className="note-title">{title}</div>
    </Link>
  </div>
);

Note.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Note;