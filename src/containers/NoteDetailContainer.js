import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoteDetail from 'NoteDetail';

class NoteDetailContainer extends Component {
  constructor() {
    super();

    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  editNote() {
    this.props.history.push(this.props.location.pathname + '/edit');
  }

  deleteNote() {
    this.props.history.push('/')
    const noteId = this.props.match.params.id;
    this.props.onDeleteNote(noteId);
  }

  render() {
    return (
      <div className="container">
        <NoteDetail note={this.props.notes[this.props.match.params.id - 1]} editNote={this.editNote} deleteNote={this.deleteNote} />
      </div>
    )
  }
}

export default NoteDetailContainer;

NoteDetailContainer.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
}