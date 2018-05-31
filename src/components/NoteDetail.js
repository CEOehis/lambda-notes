import React from 'react';
import { Button } from 'reactstrap';

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