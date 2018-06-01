import React from 'react';
import PropTypes from 'prop-types';
import Note from 'Note';

const NoteList = ({notes, ...props}) => (
  <div className="row">
    {notes && notes.map(note => (
      <Note key={note.id} note={note} {...props} />
    ))}
  </div>
);

export default NoteList;

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  ).isRequired
}