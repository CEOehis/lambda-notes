import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoteDetail from 'NoteDetail';

import { notes } from '../mocks/notes';

class NoteDetailContainer extends Component {
  state = {
    note: {}
  }
  componentDidMount() {
    const noteId = this.props.match.params.id;
    this.setState({
      note: notes[(noteId - 1)]
    });
  }
  render() {
    const { note } = this.state;
    return (
      <div className="container">
        <NoteDetail note={note}/>
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