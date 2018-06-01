import React, { Component } from 'react';
import NoteList from 'NoteList';

class NoteListContainer extends Component {
  state = {}
  render() {
    return (
      <div className="container">
        <NoteList notes={this.props.notes} {...this.props} />
      </div>
    )
  }
}

export default NoteListContainer;