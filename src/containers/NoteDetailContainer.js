import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoteDetail from 'NoteDetail';

class NoteDetailContainer extends Component {
  constructor() {
    super();

    this.editNote = this.editNote.bind(this);
  }

  editNote() {
    console.log('note editing');
    this.props.history.push(this.props.location.pathname + '/edit');
  }

  render() {
    return (
      <div className="container">
        <NoteDetail note={this.props.notes[this.props.match.params.id - 1]} editNote={this.editNote}/>
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