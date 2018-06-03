import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  CardBody,
  CardTitle
} from 'reactstrap';

const Note = ({note, ...props}) => (
  <div style={{paddingBottom: '10px'}} key={note.id} className="col-md-4">
    <Card style={{cursor: 'pointer'}} onClick={() => props.history.push('notes/' + note.id)} >
      <CardBody>
        <CardTitle>{note.title}</CardTitle>
        <hr />
        <CardText>{note.body}</CardText>
      </CardBody>
    </Card>
  </div>
);

export default Note;

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
}