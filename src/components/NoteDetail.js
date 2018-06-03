import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const NoteDetail = ({note, editNote, deleteNote}) => (
  <div>
    <div>
      <Button onClick={editNote} color="success">edit</Button>
      <Button onClick={deleteNote} color="danger">delete</Button>
    </div>
    <h1>{note.title}</h1>
    <p>{note.body}</p>
  </div>
);

export default NoteDetail;

NoteDetail.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }),
  editNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired
}