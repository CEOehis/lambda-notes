import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const NoteDetail = ({note}) => (
  <div>
    <div>
      <Button color="success">edit</Button>
      <Button color="danger">delete</Button>
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
  })
}