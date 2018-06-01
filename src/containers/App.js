import React, { Component } from 'react';
import NoteListContainer from 'NoteListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Your Notes</h2>
        <NoteListContainer {...this.props} />
      </div>
    );
  }
}

export default App;
