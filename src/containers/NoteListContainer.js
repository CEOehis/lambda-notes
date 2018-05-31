import React, { Component } from 'react';
import NoteList from 'NoteList';

import { notes } from '../mocks/notes';


class NoteListContainer extends Component {
  state = {}
  render() {
    return (
      <div className="container">
        <NoteList notes={notes} {...this.props} />
      </div>
    )
  }
}

export default NoteListContainer;