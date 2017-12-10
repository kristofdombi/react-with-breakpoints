import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ children }) => (
  <div className="note">
    <span className="note-sign">NOTE:</span>
    { children }
  </div>
);

Note.displayName = 'Note';

Note.propTypes = { children: PropTypes.node };

export default Note;
